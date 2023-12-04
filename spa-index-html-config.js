/**
 * @typedef {import('@types/web-app-manifest').ImageResource} ImageResource
 *
 * @typedef {import('@types/web-app-manifest').WebAppManifest} WebAppManifest
 *
 * @typedef {import('./vite-plugins/spa-index-html').CSPT} CSPT
 *
 * @typedef {import('./vite-plugins/spa-index-html').MetaT} MetaT
 */

/** @type {CSPT} */
export const csps = [
    { name: 'font-src', value: 'self' },
    { name: 'form-action', value: 'none' },
    { name: 'manifest-src', value: 'self' },
    { name: 'script-src', value: ['self'] },
    { name: 'style-src', value: 'self' },
    { name: 'upgrade-insecure-requests' },
];

export const description = 'Lionel Dickson Portfolio';

/** @type {ImageResource[]} */
export const icons = [
    // { src: 'favicon.ico', rel: 'icon', sizes: '32x32', type: 'image/x-icon' },
    // { src: 'logo-16.webp', rel: 'apple-touch-icon', sizes: '16x16', type: 'image/webp' },
    // { src: 'logo-32.webp', rel: 'apple-touch-icon', sizes: '32x32', type: 'image/webp' },
    // { src: 'logo-180.webp', rel: 'apple-touch-icon', sizes: '180x180', type: 'image/webp' },
    // { src: 'logo-192.webp', rel: 'icon', sizes: '192x192', type: 'image/webp' },
    // { src: 'logo-512.webp', rel: 'icon', sizes: '512x512', type: 'image/webp', purpose: 'maskable' },
];
export const keywords = ['Art', 'Creative', 'Design', 'Designer', 'Portfolio', 'Sketchbook'];

/**
 * @param {object} viteEnv
 * @returns {WebAppManifest}
 */
export function generateManifest(viteEnv) {
    return {
        short_name: viteEnv.VITE_APP_NAME,
        name: viteEnv.VITE_APP_NAME,
        description: description,
        categories: keywords,
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        orientation: 'portrait',
    };
}

/**
 * @param {object} viteEnv
 * @param {object} packageJson
 * @returns {MetaT[]}
 */
export function generateMetas(viteEnv, packageJson) {
    return [
        { name: 'author', content: packageJson.author },
        { name: 'title', content: viteEnv.VITE_APP_NAME },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords.join(', ') },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
    ];
}
