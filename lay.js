const siteConfig = {
    meta: {
        lang: 'vi'
    },
    api: {
        provider: true
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

// PV4 Initialization
if (window.PV4) {
    window.PV4.init(siteConfig);
}