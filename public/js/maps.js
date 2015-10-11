YUI.add('MAC-maps', function (Y) {

    var isRetina = Y.config.win.devicePixelRatio >= 2;

    Y.all('[data-map]').each(function (mapNode) {
         L.mapbox.accessToken = 'pk.eyJ1IjoibW1hY2xlb2QiLCJhIjoiY2lmbWlkamV0MDE2cHU2bHlyc2p3Y3pwbiJ9.YjHJqXvs_YB9bSQpJQWtrw';
         var map = L.mapbox.map('map', 'mmacleod.nm6dohm7', {zoomControl: false});
         var featureLayer = L.mapbox.featureLayer().addTo(map);
         featureLayer.loadID("mmacleod.nm6dohm7");
         new L.Control.Zoom({position:'bottomright'}).addTo(map);
         featureLayer.on('ready', function() {map.fitBounds(featureLayer.getBounds());});
         map.scrollWheelZoom.disable();
    })

}, '1.8.0', {
    requires: ['node-base', 'mapbox']
});
