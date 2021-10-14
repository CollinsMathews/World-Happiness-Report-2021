var spec1 = "js/world_happiness_map.vg.json";
vegaEmbed('#vega_map', spec1).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "js/happiness_scatter_plot.vg.json";
vegaEmbed('#vega_scatter_plot', spec2, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "js/country_bar_chart.vg.json";
vegaEmbed('#vega_bar_chart', spec3, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec4 = "js/parallel_coordinate_plot.vg.json";
vegaEmbed('#parallel_coordinate_plot', spec4, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);