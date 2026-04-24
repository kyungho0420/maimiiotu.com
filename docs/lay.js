/**
 * MAI MI IOTU - Premium Modern Vietnam
 */
const siteConfig = {
    meta: {
        framework: 'V4',
        type: 'page',
        mode: 'live',
        lang: 'en',
        theme: false,
        footer: true,
        symbol: false,
        scroll_smooth: true
    },
    api: {
        server: 'provider',
        redirect: '../'
    },
    canvas: {
        target: '#home',
        effect: '', 
        overlay: 'dotted',

        image_type: 'cover',
        image_count: 3,
        image_path: './section/',
        image_format: 'jpg',
        image_slide: 8 // transition interval
    },
    buttons: []
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.V4) {
        window.V4.init(siteConfig);
    }
});