document.addEventListener('DOMContentLoaded', function () {
    // Data for the chart
    const data = [
        { project: 'Project 1', value: 30 },
        { project: 'Project 2', value: 50 },
        { project: 'Project 3', value: 70 },
        { project: 'Project 4', value: 90 },
        { project: 'Project 5', value: 20 }
    ];

    // Set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 40, left: 40 },
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // Append the svg object to the body of the page
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left +
