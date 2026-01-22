const siteConfig = {
    meta: {
        framework: 'V4',
        type: 'page',
        mode: 'demo',
        lang: 'vi'
    },
    api: {
        damso: true
    },
    canvas: {
        target: '#overview',
        overlay: 'dotted',

        // Optional placeholders for user configuration clarity
        image_type: 'cover',
        image_count: 3,
        image_path: './section/',
        image_format: 'jpg'
    },
    buttons: [
        { name: 'Products', icon: 'trolley', url: '#portfolio' },
        { name: 'Profile', icon: 'phone', url: '#profile' },
    ]
};

// V4 Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (window.V4) {
        window.V4.init(siteConfig);
    }
});