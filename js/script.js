var spec1 = "js/world_happiness_map.vg.json";
vegaEmbed('#vega_map', spec1).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "js/happiness_scatter_plot.vg.json";
vegaEmbed('#vega_scatter_plot', spec2, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
