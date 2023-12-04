/** @typedef {import('postcss')} postcss */

/** @type {postcss} */
export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-discard-comments': {
            removeAll: true,
        },
    },
};
