var options = {
	chart: {
		type: 'donut',
		height: 250,
	},
	legend: {
		position: "bottom",
		offsetY: 10,
	},
	dataLabels: {
		enabled: false
  },
	labels: ['Buy', 'Sell', 'Keep'],
	series: [20, 70, 30],
	stroke: {
		width: 0,
	},
	colors: ['#1646b3', '#194eca', '#225de4', '#4274e8', '#628cec', '#81a3f0'],
}
var chart = new ApexCharts(
	document.querySelector("#donut-volume-currency"),
	options
);
chart.render();