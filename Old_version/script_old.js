function draw(data){


     var margin =75,
         width = 900,
         height = 400



      var svg=d3.select("body")
                .append("svg") 
                .attr("width", width)
                .attr("height",height)
                .append("g")
                .attr("class", "chart");


      var mychart = new dimple.chart(svg,data);
       var x = mychart.addMeasureAxis("y", "HR");
       mychart.addMeasureAxis("x","avg");
       mychart.addSeries(["name","handedness","HR","avg","height","weight"],dimple.plot.bubble);
       mychart.draw();

       
        var buttonNames = ["ALL", "Left", "Right", "Between"]

        d3.select("#Bttn")
            .selectAll("input")
            .data(buttonNames)
            .enter()
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("id", function(d) {
                return d;
            })
            .attr("value", function(d) {
                return d;
            })

         d3.select("#ALL").on("click", function(d) {
            data_select = d;
            mychart.data = data
            mychart.draw(1000);

             });

         d3.select("#Left").on("click", function(d) {
            data_select = d;
            mychart.data = dimple.filterData(data, "handedness", 'L');
            mychart.draw(1000);

             });

         d3.select("#Right").on("click", function(d) {
            data_select = d;
            mychart.data = dimple.filterData(data, "handedness", 'R');
            mychart.draw(1000);

             });

         d3.select("#Between").on("click", function(d) {
            data_select = d;
            mychart.data = dimple.filterData(data, "handedness", 'B');
            mychart.draw(1000);

             });


      
};
