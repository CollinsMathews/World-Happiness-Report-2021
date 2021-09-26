var spec2 = "js/map.vg.json";
  vegaEmbed('#vega_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);