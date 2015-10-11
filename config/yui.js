var isProduction = process.env.NODE_ENV === 'production',
    version      = require('../package').version,

    YUI_VERSION = '3.10.0';

exports.version = YUI_VERSION;
exports.config  = {
    combine: isProduction,
    filter : isProduction ? 'min' : 'raw',
    root   : YUI_VERSION + '/',

    modules: {
        'mapbox-css': 'https://api.mapbox.com/mapbox.js/v2.2.2/mapbox.css',

        'mapbox': {
            fullpath: 'https://api.mapbox.com/mapbox.js/v2.2.2/mapbox.js',
            requires: ['mapbox-css']
        }
    },

    groups: {
        'app': {
            combine  : isProduction,
            comboBase: '/combo/' + version + '?',
            base     : '/',
            root     : '/',

            modules: {
                'MAC-home': {
                    use: ['MAC-main', 'MAC-maps']
                },

                'MAC-main': {
                    path    : 'js/main.js',
                },

                'MAC-maps': {
                    path    : 'js/maps.js',
                    requires: ['node-base', 'mapbox']
                },

                'MAC-rsvp': {
                    path    : 'js/rsvp.js',
                    requires: [
                        'MAC-main',
                        'app-base',
                        'app-content',
                        'app-transitions',
                        'escape',
                        'event-focus',
                        'io-queue',
                        'model',
                        'model-list',
                        'model-sync-rest',
                        'selector-css3',
                        'view',
                        'promise'
                    ]
                },

                'MAC-wedding': {
                    path: 'js/wedding.js',
                    requires: ['MAC-main', 'MAC-maps', 'event-resize', 'graphics']
                }
            }
        }
    }
};
