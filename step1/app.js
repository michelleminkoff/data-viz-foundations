
   
    //Define the methods and attributes of your module
    var initialize = function() {
        $(function() {
            barChartData = [
                {
                "year": 1960,
                "fires": 103387,
                "acres": 4478188
                },
                {
                "year": 1961,
                "fires": 98517,
                "acres": 3036219
                },
                {
                "year": 1962,
                "fires": 115345,
                "acres": 4078894
                },
                {
                "year": 1963,
                "fires": 164183,
                "acres": 7120768
                },
                {
                "year": 1964,
                "fires": 116358,
                "acres": 4197309
                },
                {
                "year": 1965,
                "fires": 113684,
                "acres": 2652112
                },
                {
                "year": 1966,
                "fires": 122500,
                "acres": 4574389
                },
                {
                "year": 1967,
                "fires": 125025,
                "acres": 4658586
                },
                {
                "year": 1968,
                "fires": 125371,
                "acres": 4231996
                },
                {
                "year": 1969,
                "fires": 113351,
                "acres": 6689081
                },
                {
                "year": 1970,
                "fires": 121736,
                "acres": 3278565
                },
                {
                "year": 1971,
                "fires": 108398,
                "acres": 4278472
                },
                {
                "year": 1972,
                "fires": 124554,
                "acres": 2641166
                },
                {
                "year": 1973,
                "fires": 117957,
                "acres": 1915273
                },
                {
                "year": 1974,
                "fires": 145868,
                "acres": 2879095
                },
                {
                "year": 1975,
                "fires": 134872,
                "acres": 1791327
                },
                {
                "year": 1976,
                "fires": 241699,
                "acres": 5109926
                },
                {
                "year": 1977,
                "fires": 173998,
                "acres": 3152644
                },
                {
                "year": 1978,
                "fires": 218842,
                "acres": 3910913
                },
                {
                "year": 1979,
                "fires": 163196,
                "acres": 2986826
                },
                {
                "year": 1980,
                "fires": 234892,
                "acres": 5260825
                },
                {
                "year": 1981,
                "fires": 249370,
                "acres": 4814206
                },
                {
                "year": 1982,
                "fires": 174755,
                "acres": 2382036
                },
                {
                "year": 1983,
                "fires": 18229,
                "acres": 1323666
                },
                {
                "year": 1984,
                "fires": 20493,
                "acres": 1148409
                },
                {
                "year": 1985,
                "fires": 82591,
                "acres": 2896147,
                "forestService": 161505000, 
                "doi": 78438000 
                },
                {
                "year": 1986,
                "fires": 85907,
                "acres": 2719162,
                "forestService": 111625000, 
                "doi": 91153000
                },
                {
                "year": 1987,
                "fires": 71300,
                "acres": 2447296,
                "forestService": 253657000, 
                "doi": 81452000
                },
                {
                "year": 1988,
                "fires": 72750,
                "acres": 5009290,
                "forestService": 429609000, 
                "doi": 149317000
                },
                {
                "year": 1989,
                "fires": 48949,
                "acres": 1827310,
                "forestService": 331672000, 
                "doi": 168115000
                },
                {
                "year": 1990,
                "deaths": 21,
                "fires": 66481,
                "acres": 4621621,
                "forestService": 253700000, 
                "doi": 144252000
                },
                {
                "year": 1991,
                "deaths": 11,
                "fires": 75754,
                "acres": 2953578,
                "forestService": 132300000, 
                "doi": 73820000
                },
                {
                "year": 1992,
                "deaths": 12,
                "fires": 87394,
                "acres": 2069929,
                "forestService": 290300000, 
                "doi": 87166000
                },
                {
                "year": 1993,
                "deaths": 2,
                "fires": 58810,
                "acres": 1797574,
                "forestService": 184000000, 
                "doi": 56436000
                },
                {
                "year": 1994,
                "deaths": 31,
                "fires": 79107,
                "acres": 4073579,
                "forestService": 757200000, 
                "doi": 161135000
                },
                {
                "year": 1995,
                "deaths": 14,
                "fires": 82234,
                "acres": 1840546,
                "forestService": 367000000, 
                "doi": 110126000
                },
                {
                "year": 1996,
                "deaths": 7,
                "fires": 96363,
                "acres": 6065998,
                "forestService": 547500000, 
                "doi": 153683000
                },
                {
                "year": 1997,
                "deaths": 11,
                "fires": 66196,
                "acres": 2856959,
                "forestService": 179100000, 
                "doi": 105048000
                },
                {
                "year": 1998,
                "deaths": 14,
                "fires": 81043,
                "acres": 1329704,
                "forestService": 306800000, 
                "doi": 109904000
                },
                {
                "year": 1999,
                "deaths": 24,
                "fires": 92487,
                "acres": 5626093,
                "forestService": 361100000, 
                "doi": 154416000
                },
                {
                "year": 2000,
                "deaths": 18,
                "fires": 92250,
                "acres": 739349,
                "forestService": 1076000000, 
                "doi": 334802000
                },
                {
                "year": 2001,
                "deaths": 16,
                "fires": 84079,
                "acres": 3570911,
                "forestService": 683122000, 
                "doi": 269574000
                },
                {
                "year": 2002,
                "deaths": 23,
                "fires": 73457,
                "acres": 7184712,
                "forestService": 1279000000, 
                "doi": 395040000
                },
                {
                "year": 2003,
                "deaths": 29,
                "fires": 63629,
                "acres": 3960842,
                "forestService": 1023500000, 
                "doi": 303638000
                },
                {
                "year": 2004,
                "deaths": 17,
                "fires": 65461,
                "acres": 8097880,
                "forestService": 726000000, 
                "doi": 281244000
                },
                {
                "year": 2005,
                "deaths": 7,
                "fires": 66753,
                "acres": 8689389,
                "forestService": 690000000, 
                "doi": 294054000
                },
                {
                "year": 2006,
                "deaths": 15,
                "fires": 96385,
                "acres": 9873745,
                "forestService": 1501337000, 
                "doi": 424058000
                },
                {
                "year": 2007,
                "deaths": 2,
                "fires": 85705,
                "acres": 9328045,
                "forestService": 1373919000, 
                "doi": 470491000
                },
                {
                "year": 2008,
                "deaths": 23,
                "fires": 78979,
                "acres": 5292468,
                "forestService": 1458805000, 
                "doi": 392783000
                },
                {
                "year": 2009,
                "deaths": 13,
                "fires": 78792,
                "acres": 5921786,
                "forestService": 1018329000, 
                "doi": 218418000
                },
                {
                "year": 2010,
                "deaths": 1,
                "fires": 71971,
                "acres": 3422724,
                "forestService": 897686000, 
                "doi": 231214000
                },
                {
                "year": 2011,
                "deaths": 8,
                "fires": 74126,
                "acres": 8711367,
                "forestService": 1414379000, 
                "doi": 318789000
                },
                {
                "year": 2012,
                "deaths": 14,
                "fires": 67774,
                "acres": 9326238,
                "forestService": 1436614000, 
                "doi": 465832000
                },
                {
                "year": 2013,
                "deaths": 20
                }
            ];      

            lineChartData = [
                {
                    "date": "2012-02-27",
                    "Kurt Busch": 34,
                    "Kyle Busch": 17,
                    "D. Earnhardt Jr.": 2,
                    "C. Edwards": 8,
                    "D. Hamlin": 4,
                    "K. Harvick": 7,
                    "J.  Johnson": 49,
                    "M. Kenseth": 1,
                    "B. Keselowski": 29,
                    "T. Stewart": 16
                },
                {
                    "date": "2012-03-04",
                    "Kurt Busch": 26,
                    "Kyle Busch": 9,
                    "D. Earnhardt Jr.": 5,
                    "C. Edwards": 10,
                    "D. Hamlin": 1,
                    "K. Harvick": 3,
                    "J.  Johnson": 37,
                    "M. Kenseth": 4,
                    "B. Keselowski": 12,
                    "T. Stewart": 15
                },
                {
                    "date": "2012-03-11",
                    "Kurt Busch": 29,
                    "Kyle Busch": 12,
                    "D. Earnhardt Jr.": 4,
                    "C. Edwards": 6,
                    "D. Hamlin": 3,
                    "K. Harvick": 2,
                    "J.  Johnson": 23,
                    "M. Kenseth": 5,
                    "B. Keselowski": 21,
                    "T. Stewart": 7
                },
                {
                    "date": "2012-03-18",
                    "Kurt Busch": 27,
                    "Kyle Busch": 15,
                    "D. Earnhardt Jr.": 6,
                    "C. Edwards": 14,
                    "D. Hamlin": 5,
                    "K. Harvick": 2,
                    "J.  Johnson": 17,
                    "M. Kenseth": 3,
                    "B. Keselowski": 13,
                    "T. Stewart": 7
                },
                {
                    "date": "2012-03-25",
                    "Kurt Busch": 23,
                    "Kyle Busch": 14,
                    "D. Earnhardt Jr.": 3,
                    "C. Edwards": 12,
                    "D. Hamlin": 7,
                    "K. Harvick": 2,
                    "J.  Johnson": 8,
                    "M. Kenseth": 5,
                    "B. Keselowski": 16,
                    "T. Stewart": 4
                },
                {
                    "date": "2012-04-01",
                    "Kurt Busch": 26,
                    "Kyle Busch": 16,
                    "D. Earnhardt Jr.": 2,
                    "C. Edwards": 11,
                    "D. Hamlin": 7,
                    "K. Harvick": 5,
                    "J.  Johnson": 10,
                    "M. Kenseth": 4,
                    "B. Keselowski": 12,
                    "T. Stewart": 3
                }
            ];
            
            _.each(lineChartData, function(item, index){
                var dateArray = item.date.split("-");
                var date = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
                lineChartData[index].date = date;
            });
            chart = new AmCharts.AmSerialChart();

            chart.dataProvider = lineChartData;
            chart.categoryField = 'date';

            chart.categoryAxis.color = "#999999";
            chart.categoryAxis.gridAlpha = 0;
            chart.categoryAxis.axisColor = "#000";
            chart.categoryAxis.gridPosition = "middle";
            chart.categoryAxis.tickLength = 0;
            chart.categoryAxis.parseDates = true;
            chart.categoryAxis.equalSpacing = true;


            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.color = "#999999";
            valueAxis.showLastLabel = true;
            valueAxis.tickLength = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.gridPosition = "middle";
            valueAxis.axisColor = "#000";
            valueAxis.title = 'Rank';
            valueAxis.titleBold = false;
            valueAxis.titleColor = '#999999';
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
            chartCursor.cursorColor = "#000000"
            chart.addChartCursor(chartCursor);

            var legend = new AmCharts.AmLegend();
            legend.valueText = "";
            legend.position = 'top';
            chart.addLegend(legend);

            chart.write('line-chart-holder');

            chart = new AmCharts.AmSerialChart();

            chart.dataProvider = barChartData;
            chart.categoryField = 'year';

            chart.categoryAxis.color = "#999999";
            chart.categoryAxis.gridAlpha = 0;
            chart.categoryAxis.axisColor = "#000";
            chart.categoryAxis.gridPosition = "middle";
            chart.categoryAxis.tickLength = 0;
            chart.categoryAxis.showLastLabel = true;

            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.color = "#999999";
            valueAxis.showLastLabel = true;
            valueAxis.tickLength = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.gridPosition = "middle";
            valueAxis.axisColor = "#000";
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
            chartCursor.cursorColor = "#000000"
            chart.addChartCursor(chartCursor);

            var legend = new AmCharts.AmLegend();
            legend.valueText = "";
            legend.position = 'top';
            chart.addLegend(legend);

            chart.write('bar-chart-holder');


        });
    };
    
    initialize();