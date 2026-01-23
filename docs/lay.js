/**
 * Maimiiotu
 */
const siteConfig = {
    meta: {
        framework: 'V4',
        type: 'page',
        mode: 'live',
        lang: 'vi',
        theme: true
    },
    api: {
        damso: true,
        turnstile: '0x4AAAAAACJQlCjpqGMqegcx',
        redirect: '../'
    },
    canvas: {
        target: '#home',
        effect: '', // No effect specified previously, but canvas object existed.
        overlay: 'dotted',

        image_type: 'cover',
        image_count: 3,
        image_path: './section/',
        image_format: 'jpg'
    },
    buttons: [
        { name: 'Products', icon: 'trolley', url: '#portfolio' },
        { name: 'Profile', icon: 'phone', url: '#profile' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.V4) {
        window.V4.init(siteConfig);
    }
});