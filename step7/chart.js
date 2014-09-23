            var initialize = function(){
                  var colors = {
                  accentColor: '#999999',
                  axisColor: '#000',
                  balloonOutlineColor: '#333',
                  balloonFillColor: '#fff'
            }

            var createBarGraph = function(valueField, lineColor, title){
                  var graph = new AmCharts.AmGraph();
                  graph.type = "column";
                  graph.valueField = valueField;
                  graph.lineColor = lineColor;
                  graph.lineAlpha = 0;
                  graph.title = title
                  graph.fillAlphas = 0.6;
                  chart.addGraph(graph);
            }

            var createLineGraph = function(valueField, lineColor, title){
                  var graph = new AmCharts.AmGraph();
                  graph.type = "line";
                  graph.valueField = valueField;
                  graph.lineColor = lineColor;
                  graph.lineAlpha = 1;
                  graph.fillAlphas = 0;
                  graph.title = title
                  chart.addGraph(graph);  
            }

            var createCategoryAxis = function(){
                  chart.categoryAxis.color = colors.accentColor;
                  chart.categoryAxis.gridAlpha = 0;
                  chart.categoryAxis.axisColor = colors.axisColor;
                  chart.categoryAxis.gridPosition = "middle";
                  chart.categoryAxis.tickLength = 0;   
            }

            var createValueAxis = function(){
                  var valueAxis = new AmCharts.ValueAxis();
                  valueAxis.color = colors.accentColor;
                  valueAxis.showLastLabel = true;
                  valueAxis.tickLength = 0;
                  valueAxis.gridAlpha = 0;
                  valueAxis.gridPosition = "middle";
                  valueAxis.axisColor = colors.axisColor;
                  chart.addValueAxis(valueAxis);
                  return valueAxis
            };

            var organizeLineChartData = function(){
                _.each(lineChartData, function(item, index){
                  var dateArray = item.date.split("-");
                  var date = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
                  lineChartData[index].date = date;
                  });  
            }

            var createBasicChart = function(dataProvider, categoryField){
                  chart = new AmCharts.AmSerialChart();
                  chart.dataProvider = dataProvider;
                  chart.categoryField = categoryField;
            }

            var createLineCategoryAxis = function(){
                  createCategoryAxis();
                  chart.categoryAxis.parseDates = true;
                  chart.categoryAxis.equalSpacing = true;
            }

            var createLineValueAxis = function(){
                  valueAxis = createValueAxis();
                  valueAxis.title = 'Rank';
                  valueAxis.titleBold = false;
                  valueAxis.titleColor = colors.accentColor;
            }

            var createBalloon = function(){
                  chart.balloon.adjustBorderColor = true;
                  chart.balloon.color = colors.balloonOutlineColor;
                  chart.balloon.borderColor = colors.balloonOutlineColor;
                  chart.balloon.fillColor = colors.balloonFillColor;
                  chart.balloon.cornerRadius = 0;
                  chart.balloon.borderThickness = 1;
                  chart.balloon.showBullet = false;
                  chart.balloon.textShadowColor = colors.balloonFillColor;
                  chart.balloon.fontSize = 14;
            }

            var createChartCursor = function(){
                  var chartCursor = new AmCharts.ChartCursor();
                  chartCursor.cursorAlpha = 1;
                  chartCursor.oneBalloonOnly = false;
                  chartCursor.categoryBalloonDateFormat = "MMM. D, YYYY"
                  chartCursor.cursorColor = colors.axisColor
                  chart.addChartCursor(chartCursor);
            }

            var createLegend = function(){
                  var legend = new AmCharts.AmLegend();
                  legend.valueText = "";
                  legend.position = 'top';
                  chart.addLegend(legend);
            }

            var lineGraph = function(elementID, values, colors, titles){
            organizeLineChartData();
            createBasicChart(lineChartData, 'date');  
            createLineCategoryAxis();
            createLineValueAxis();

            $.each(values, function(index, item){
                  createLineGraph(values[index], colors[index], titles[index]);
            })

            createBalloon();
            createChartCursor();
            createLegend();
           
            chart.write(elementID);
            }

            var barGraph = function(elementID, values, colors, titles){
       chart = new AmCharts.AmSerialChart();
            createBasicChart(barChartData, 'year')

            createCategoryAxis();
            chart.categoryAxis.showLastLabel = true;

            createValueAxis();

             $.each(values, function(index, item){
                  createBarGraph(values[index], colors[index], titles[index]);
            })

            createBarGraph('fires', 'red', 'Fires')
            createBarGraph('acres', 'orange', 'Acres burned')

            createBalloon();

            createChartCursor();

            createLegend();

            chart.write(elementID);
            }

            chartMaker = {
                  barGraph: barGraph,
                  lineGraph: lineGraph
            }
      }
      initialize();