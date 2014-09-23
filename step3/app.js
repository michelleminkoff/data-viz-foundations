
   
    //Define the methods and attributes of your module
    var initialize = function() {
        $(function() {
            accentColor = '#999999';
            axisColor = '#000';
            
            _.each(lineChartData, function(item, index){
                var dateArray = item.date.split("-");
                var date = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
                lineChartData[index].date = date;
            });
            chart = new AmCharts.AmSerialChart();

            chart.dataProvider = lineChartData;
            chart.categoryField = 'date';

            chart.categoryAxis.color = accentColor;
            chart.categoryAxis.gridAlpha = 0;
            chart.categoryAxis.axisColor = axisColor;
            chart.categoryAxis.gridPosition = "middle";
            chart.categoryAxis.tickLength = 0;
            chart.categoryAxis.parseDates = true;
            chart.categoryAxis.equalSpacing = true;


            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.color = accentColor;
            valueAxis.showLastLabel = true;
            valueAxis.tickLength = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.gridPosition = "middle";
            valueAxis.axisColor = axisColor;
            valueAxis.title = 'Rank';
            valueAxis.titleBold = false;
            valueAxis.titleColor = accentColor;
            chart.addValueAxis(valueAxis);

            var graph = new AmCharts.AmGraph();
            graph.type = "line";
            graph.valueField = 'D. Earnhardt Jr.';
            graph.lineColor = 'blue';
            graph.lineAlpha = 1;
            graph.fillAlphas = 0;
            graph.title = 'D. Earnhardt Jr.'
            chart.addGraph(graph);

            var graph2 = new AmCharts.AmGraph();
            graph2.type = "line";
            graph2.valueField = 'Kurt Busch';
            graph2.lineColor = 'green';
            graph2.lineAlpha = 1;
            graph2.title = 'Kurt Busch'
            graph2.fillAlphas = 0;
            chart.addGraph(graph2);

            chart.balloon.adjustBorderColor = true;
            chart.balloon.color = '#333333';
            chart.balloon.borderColor = '#333333';
            chart.balloon.fillColor = '#ffffff';
            chart.balloon.cornerRadius = 0;
            chart.balloon.borderThickness = 1;
            chart.balloon.showBullet = false;
            chart.balloon.textShadowColor = "#ffffff";
            chart.balloon.fontSize = 14;

            var chartCursor = new AmCharts.ChartCursor();
            chartCursor.cursorAlpha = 1;
            chartCursor.oneBalloonOnly = false;
            chartCursor.categoryBalloonDateFormat = "MMM. D, YYYY"
            chartCursor.cursorColor = axisColor
            chart.addChartCursor(chartCursor);

            var legend = new AmCharts.AmLegend();
            legend.valueText = "";
            legend.position = 'top';
            chart.addLegend(legend);

            chart.write('line-chart-holder');

            chart = new AmCharts.AmSerialChart();

            chart.dataProvider = barChartData;
            chart.categoryField = 'year';

            chart.categoryAxis.color = accentColor;
            chart.categoryAxis.gridAlpha = 0;
            chart.categoryAxis.axisColor = axisColor;
            chart.categoryAxis.gridPosition = "middle";
            chart.categoryAxis.tickLength = 0;
            chart.categoryAxis.showLastLabel = true;

            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.color = accentColor;
            valueAxis.showLastLabel = true;
            valueAxis.tickLength = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.gridPosition = "middle";
            valueAxis.axisColor = axisColor;
            chart.addValueAxis(valueAxis);

            var graph = new AmCharts.AmGraph();
            graph.type = "column";
            graph.valueField = 'fires';
            graph.lineColor = 'red';
            graph.lineAlpha = 0;
            graph.title = "Fires"
            graph.fillAlphas = 0.6;
            chart.addGraph(graph);

            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.valueField = 'acres';
            graph2.lineColor = 'orange';
            graph2.lineAlpha = 0;
            graph2.fillAlphas = 0.6;
            graph2.title = "Acres burned"
            chart.addGraph(graph2);

            chart.balloon.adjustBorderColor = true;
            chart.balloon.color = '#333333';
            chart.balloon.borderColor = '#333333';
            chart.balloon.fillColor = '#ffffff';
            chart.balloon.cornerRadius = 0;
            chart.balloon.borderThickness = 1;
            chart.balloon.showBullet = false;
            chart.balloon.textShadowColor = "#ffffff";
            chart.balloon.fontSize = 14;

            var chartCursor = new AmCharts.ChartCursor();
            chartCursor.cursorAlpha = 1;
            chartCursor.oneBalloonOnly = false;
            chartCursor.categoryBalloonDateFormat = "YYYY"
            chartCursor.cursorColor = axisColor
            chart.addChartCursor(chartCursor);

            var legend = new AmCharts.AmLegend();
            legend.valueText = "";
            legend.position = 'top';
            chart.addLegend(legend);

            chart.write('bar-chart-holder');


        });
    };
    
    initialize();