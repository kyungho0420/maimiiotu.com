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
        scroll_smooth: true
    },
    api: {
        server: 'damso',
        turnstile: '0x4AAAAAACJQlCjpqGMqegcx',
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
    buttons: [
        { name: 'Products', icon: 'inventory_2', url: '#portfolio' },
        { name: 'Profile', icon: 'contact_mail', url: '#profile' },
        { name: 'Contact', icon: 'mail', url: '#contact' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.V4) {
        window.V4.init(siteConfig);
    }
});