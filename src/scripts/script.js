(function () {

	'use strict';

	document.addEventListener("DOMContentLoaded", function () {

		// var margin = {
		// 	top: 20,
		// 	right: 20,
		// 	bottom: 30,
		// 	left: 40
		// };

		// var width = window.innerWidth - margin.left - margin.right;
		// var height = window.innerHeight - margin.top - margin.bottom;

		// var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
		// var y = d3.scale.linear().range([height, 0]);

		// var xAxis = d3.svg.axis().scale(x).orient("bottom");
		// var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10, "%");

		// var svg = d3.select("#chart").append("svg:svg")
		// 	.attr("width", width + margin.left + margin.right)
		// 	.attr("height", height + margin.top + margin.bottom)
		// 	.append("svg:g")
		// 	.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

		var data = [4, 8, 15, 16, 23, 42];

		var x = d3.scale.linear()
			.domain([0, d3.max(data)])
			.range([0, 420]);

		d3.select('#chart')
			.selectAll("div")
				.data(data)
			.enter().append("div")
				.style("width", function (d) { return x(d) + "px"; })
				.text(function (d) { return d; });


	});

})();