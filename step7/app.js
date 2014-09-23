    var initialize = function() {
        $(function() {
            chartMaker.lineGraph('line-chart-holder', ['D. Earnhardt Jr.', 'Kurt Busch'], ['blue', 'green'], ['D. Earnhardt Jr.', 'Kurt Busch'])
            chartMaker.barGraph('bar-chart-holder', ['fires', 'acres'], ['red', 'orange'], ['Fires', 'Acres burned'])
        });
    };
    
    initialize();