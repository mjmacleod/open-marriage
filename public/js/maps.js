YUI.add('MAC-maps', function (Y) {

    var isRetina = Y.config.win.devicePixelRatio >= 2;

    Y.all('[data-map]').each(function (mapNode) {
         L.mapbox.accessToken = 'pk.eyJ1IjoibW1hY2xlb2QiLCJhIjoiY2lmbWlkamV0MDE2cHU2bHlyc2p3Y3pwbiJ9.YjHJqXvs_YB9bSQpJQWtrw';
         var map = L.mapbox.map('map', 'mmacleod.nm6dohm7');

var featureLayer = L.mapbox.featureLayer().addTo(map);
         featureLayer.loadID("mmacleod.nm6dohm7");

featureLayer.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(featureLayer.getBounds(), { padding: [250, 250] });
});
    })

}, '1.8.0', {
    requires: ['node-base', 'mapbox']
});
