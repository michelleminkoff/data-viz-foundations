    var initialize = function() {
        $(function() {
            
            chartMaker.organizeLineChartData();
            chartMaker.createBasicChart(lineChartData, 'date');  
            chartMaker.createLineCategoryAxis();
            chartMaker.createLineValueAxis();

            chartMaker.createLineGraph('D. Earnhardt Jr.', 'blue', 'D. Earnhardt Jr.')
            chartMaker.createLineGraph('Kurt Busch', 'green', 'Kurt Busch')

            chartMaker.createBalloon();
            chartMaker.createChartCursor();
            chartMaker.createLegend();
           
            chart.write('line-chart-holder');

            chart = new AmCharts.AmSerialChart();

            chartMaker.createBasicChart(barChartData, 'year')

            chartMaker.createCategoryAxis();
            chart.categoryAxis.showLastLabel = true;

            chartMaker.createValueAxis();

            chartMaker.createBarGraph('fires', 'red', 'Fires')
            chartMaker.createBarGraph('acres', 'orange', 'Acres burned')

            chartMaker.createBalloon();

            chartMaker.createChartCursor();

            chartMaker.createLegend();

            chart.write('bar-chart-holder');


        });
    };
    
    initialize();