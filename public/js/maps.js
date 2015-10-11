YUI.add('MAC-maps', function (Y) {

    var isRetina = Y.config.win.devicePixelRatio >= 2;

    Y.all('[data-map]').each(function (mapNode) {
         L.mapbox.accessToken = 'pk.eyJ1IjoibW1hY2xlb2QiLCJhIjoiY2lmbWlkamV0MDE2cHU2bHlyc2p3Y3pwbiJ9.YjHJqXvs_YB9bSQpJQWtrw';
         var map = L.mapbox.map('map', 'mmacleod.nm6dohm7');
         map.ui.zoomer.add();
         map.centerzoom(data.center, data.zoom);
    })

}, '1.8.0', {
    requires: ['node-base', 'mapbox']
});
