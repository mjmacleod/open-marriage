YUI.add('MAC-maps', function (Y) {

    var isRetina = Y.config.win.devicePixelRatio >= 2;

    Y.all('[data-map]').each(function (mapNode) {
         L.mapbox.accessToken = 'pk.eyJ1IjoibW1hY2xlb2QiLCJhIjoiY2lmbWlkamV0MDE2cHU2bHlyc2p3Y3pwbiJ9.YjHJqXvs_YB9bSQpJQWtrw';
         var map = L.mapbox.map('map', 'mmacleod.nm6dohm7');
         var featureLayer = L.mapbox.featureLayer({"type":"FeatureCollection","features":[{"type":"Feature","properties":{"id":"marker-ifmijedw1","title":"Reception","description":"","marker-size":"medium","marker-color":"#9c89cc","marker-symbol":""},"geometry":{"coordinates":[378.891774,-34.147896],"type":"Point"},"id":"161668d487670d7833c5c09bd9c227e1"},{"type":"Feature","properties":{"id":"marker-ifmihfbf0","title":"Ceremony","description":"","marker-size":"medium","marker-color":"#9c89cc","marker-symbol":""},"geometry":{"coordinates":[378.926482,-34.351798],"type":"Point"},"id":"bc3452b65d7c83caa39249e0797070d8"}],"id":"mmacleod.nm6dohm7"}).addTo(map);

         map.ui.zoomer.add();
         map.centerzoom(data.center, data.zoom);
    })

}, '1.8.0', {
    requires: ['node-base', 'mapbox']
});
