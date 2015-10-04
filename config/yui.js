var isProduction = process.env.NODE_ENV === 'production',
    version      = require('../package').version,

    YUI_VERSION = '3.10.0';

exports.version = YUI_VERSION;
exports.config  = {
    combine: isProduction,
    filter : isProduction ? 'min' : 'raw',
    root   : YUI_VERSION + '/',

    modules: {
        'mapbox-css': 'http://api.tiles.mapbox.com/mapbox.js/v0.6.7/mapbox.css',

        'mapbox': {
            fullpath: 'http://api.tiles.mapbox.com/mapbox.js/v0.6.7/mapbox.js',
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
                'hide-address-bar': {
                    path: 'vendor/hide-address-bar/hide-address-bar.js'
                },

                'MAC-home': {
                    use: ['MAC-main', 'MAC-maps']
                },

                'MAC-main': {
                    path    : 'js/main.js',
                    requires: ['node-base', 'hide-address-bar']
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
