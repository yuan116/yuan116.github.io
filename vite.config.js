import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import _ from 'lodash';
import path from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv, normalizePath } from 'vite';
import Inspect from 'vite-plugin-inspect';
import packageJson from './package.json';
import { csps, generateManifest, generateMetas, icons } from './spa-index-html-config';
import spaIndexHTML from './vite-plugins/spa-index-html';

const excludeOptimizeDeps = [];

export default defineConfig((env) => {
    const viteEnv = loadEnv(env.mode, process.cwd());
    const isProduction = env.mode === 'production';
    // const isProduction = false;
    const date = new Date();
    const banner = isProduction
        ? [
              '/**',
              ` * @author ${packageJson.author}`,
              ` * @version ${packageJson.version} (${date.getFullYear()}-${_.padStart(date.getMonth() + 1, 2, '0')}-${_.padStart(date.getDate(), 2, '0')})`,
              ' */',
          ].join('\n')
        : undefined;

    return {
        base: viteEnv.VITE_APP_BASENAME.split('/')
            .filter(Boolean)
            .reduce((outputBase, base) => outputBase + base + '/', '/'),
        build: {
            commonjsOptions: {
                requireReturnsDefault: true,
            },
            modulePreload: false,
            outDir: 'www',
            rollupOptions: {
                input: [
                    normalizePath('resources/scripts/app.jsx'),
                    normalizePath('resources/scss/vendor.scss'),
                    normalizePath('resources/scss/app.scss'),
                    normalizePath('resources/scss/tailwind.scss'),
                ],
                output: {
                    assetFileNames(chunkInfo) {
                        return getOutputName(isProduction, chunkInfo.name.split('.').pop());
                    },
                    chunkFileNames(chunkInfo) {
                        return getOutputName(isProduction, 'js');
                    },
                    compact: true,
                    entryFileNames: getOutputName(isProduction, 'js'),
                    generatedCode: {
                        constBindings: true,
                        objectShorthand: true,
                    },
                    indent: false,
                    manualChunks(id, meta) {
                        const nodeModulesIndex = id.lastIndexOf('node_modules');

                        if (nodeModulesIndex !== -1) {
                            const moduleName = id.substring(nodeModulesIndex).split('/')[1];

                            return 'vendor-' + moduleName;
                        }

                        const appModuleIndex = id.indexOf(normalizePath('resources/scripts/'));
                        if (appModuleIndex !== -1) {
                            const appModule = id.substring(appModuleIndex).split(path.sep).slice(2);

                            switch (appModule[0]) {
                                case 'components':
                                case 'pages':
                                    return 'app-' + appModule.at(-2);
                                    break;
                                case 'contexts':
                                    return 'app-' + appModule.at(-1);
                                    break;
                                case 'hooks':
                                case 'react-utilities':
                                case 'utilities':
                                    return 'app-' + appModule[0];
                                    break;
                                default:
                                    break;
                            }
                        }

                        return null;
                    },
                    minifyInternalExports: true,
                    plugins: [visualizer()],
                },
                strictDeprecations: true,
            },
            sourcemap: !isProduction,
        },
        define: {
            'import.meta.env.VITE_APP_VERSION': JSON.stringify(packageJson.version),
        },
        esbuild: {
            banner,
            legalComments: 'none',
            minifyIdentifiers: true,
            minifyWhitespace: true,
            minifySyntax: true,
            target: 'es2022',
            treeShaking: true,
        },
        optimizeDeps: {
            include: Object.keys(packageJson.dependencies).filter((dependency) => !excludeOptimizeDeps.includes(dependency)),
        },
        plugins: [
            babel({
                babelHelpers: 'bundled',
            }),
            nodeResolve({
                browser: true,
                preferBuiltins: false,
            }),
            Inspect(),
            // polyfillNode({
            //     include: [new RegExp('node_modules/*.*js')],
            //     exclude: [new RegExp('node_modules/(react|react-dom|scheduler)/*.*js')],
            // }),
            react(),
            spaIndexHTML({
                src: normalizePath('resources/html/index.html'),
                csps,
                icons,
                manifestData: generateManifest(viteEnv),
                metas: generateMetas(viteEnv, packageJson),
                title: viteEnv.VITE_APP_NAME,
            }),
        ],
        resolve: {
            alias: {
                '@': '/resources/scripts',
            },
        },
    };
});

/**
 * @param {boolean} isProduction
 * @param {string} extension
 * @returns {string}
 */
function getOutputName(isProduction, extension) {
    let name = `[hash].${extension}`;

    if (!isProduction) {
        name = '[name]-' + name;
    }

    return normalizePath('assets/' + getOutputDirectoryName(extension) + '/' + name);
}

/**
 * @param {string} extension
 * @returns {string}
 */
function getOutputDirectoryName(extension) {
    switch (extension) {
        case 'css':
        case 'js':
            return extension;
        case 'eot':
        case 'otf':
        case 'ttf':
        case 'woff':
        case 'woff2':
            return 'fonts';
        default:
            return 'images';
    }
}
