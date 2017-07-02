function draw(data){


     var margin =25,
         width = 900,
         height = 500



     var svg=d3.select("body")
                .append("svg") 
                .attr("width", width)
                .attr("height",height)
                .append("g")
                .attr("class", "chart");

               
     var mychart = new dimple.chart(svg,data);
     var x = mychart.addMeasureAxis("x","avg");
     var y = mychart.addMeasureAxis("y","HR");
     x.ticks = 20;
     x.tickFormat = ',.2f';
     mychart.addSeries(["name","handedness","HR","avg"],dimple.plot.bubble);
     mychart.draw();
     
     svg.append("rect")
         .attr("x",180)
         .attr("y", 83)
         .attr("width",84)
         .attr("height",80)
         .style("fill","#D0D3D4");

     svg.append("circle")        
	    .attr("cx", 200)           
	    .attr("cy", 115)           
	    .attr("r", 6)             
	    .style("stroke", "yellow")    
	    .style("fill", "yellow");

	  svg.append("text")        
		  .style("fill", "black")    
	      .attr("x", 210)      
	   	  .attr("y", 120)     
	      .text("Left");

	 svg.append("circle")        
	    .attr("cx", 200)           
	    .attr("cy", 130)           
	    .attr("r", 6)               
	    .style("stroke", "#259286")    
	    .style("fill", "#259286");
	 
	 svg.append("text")        
		  .style("fill", "black")    
	      .attr("x", 210)      
	   	  .attr("y", 135)     
	      .text("Right");

	 svg.append("circle")        
	    .attr("cx", 200)           
	    .attr("cy", 145)           
	    .attr("r", 6)                
	    .style("stroke", "#C61C6F")    
	    .style("fill", "#C61C6F"); 

	 svg.append("text")        
		  .style("fill", "black")    
	      .attr("x", 210)      
	   	  .attr("y", 150)     
	      .text("Both");

     svg.append("text")        
		  .style("fill", "black")    
	      .attr("x", 184)      
	   	  .attr("y", 99)     
	      .text("Handedness");

     svg.append("line")
	              .attr("x1", 667)
	              .attr("x2", 667)
	              .attr("y1", 450)
	              .attr("y2", 50)
	              .attr('class', 'olineLine1');

	 svg.append("line")
	             .attr("x1", 95)
	             .attr("x2", 812)
	             .attr("y1", 316)
	             .attr("y2", 316)
	             .attr('class', 'olineLine2'); 
     
     svg.append("text")
	             .attr("dx", 95)
	             .attr("dy", 312)
	             .text("Top 5% high Home Run Scores")
	             .attr('class', 'olineText1');

	 svg.append("text")
	             .attr("dx", 668)
	             .attr("dy", 70)
	             .text("Top 5% high avg")
	             .attr('class', 'olineText2');
            

     var avg_scale = d3.scale.linear()
 					.range([margin,width])
 					.domain([0,0.39]);


     d3.select("#full").on("click", function(d) {

     	     d3.select("line.lineLine1").remove();
        	 d3.select("text.lineText1").remove();
        	 d3.select("line.lineLine2").remove();
        	 d3.select("text.lineText2").remove();

			 data_select = d;
             mychart.data = data;
             mychart.draw(1000);

             svg.append("line")
	              .attr("x1", 667)
	              .attr("x2", 667)
	              .attr("y1", 450)
	              .attr("y2", 50)
	              .attr('class', 'olineLine1');
             
	         svg.append("line")
	             .attr("x1", 95)
	             .attr("x2", 812)
	             .attr("y1", 316)
	             .attr("y2", 316)
	             .attr('class', 'olineLine2'); 
             
             svg.append("text")
	             .attr("dx", 95)
	             .attr("dy", 312)
	             .text("Top 5% high Home Run Scores")
	             .attr('class', 'olineText1');

	         svg.append("text")
	             .attr("dx", 668)
	             .attr("dy", 70)
	             .text("Top 5% high avg")
	             .attr('class', 'olineText2');
          });

     d3.select("#lefty").on("click", function(d) {

         	 d3.select("line.olineLine1").remove();
        	 d3.select("text.olineText1").remove();
        	 d3.select("line.olineLine2").remove();
        	 d3.select("text.olineText2").remove();
        	 d3.select("line.lineLine1").remove();
        	 d3.select("text.lineText1").remove();
        	 d3.select("line.lineLine2").remove();
        	 d3.select("text.lineText2").remove();

             data_select = d;
             mychart.data = dimple.filterData(data, "handedness", 'L');
             mychart.draw(1000);
     
             svg.append("line")
	              .attr("x1", 662)
	              .attr("x2", 662)
	              .attr("y1", 450)
	              .attr("y2", 50)
	              .attr('class', 'lineLine1');

	         svg.append("line")
	             .attr("x1", 95)
	             .attr("x2", 812)
	             .attr("y1", 349)
	             .attr("y2", 349)
	             .attr('class', 'lineLine2'); 
     
             svg.append("text")
	             .attr("dx", 95)
	             .attr("dy", 342)
	             .text("Top 10% high Home Run Scorers")
	             .attr('class', 'lineText1');

             svg.append("text")
	             .attr("dx", 668)
	             .attr("dy", 70)
	             .text("Top 10% high avg")
	             .attr('class', 'lineText2');
                         
             });

     d3.select("#righty").on("click", function(d) {
           
             d3.select("line.olineLine1").remove();
        	 d3.select("text.olineText1").remove();
        	 d3.select("line.olineLine2").remove();
        	 d3.select("text.olineText2").remove();
        	 d3.select("line.lineLine1").remove();
        	 d3.select("text.lineText1").remove();
        	 d3.select("line.lineLine2").remove();
        	 d3.select("text.lineText2").remove();


             data_select = d;
             mychart.data = dimple.filterData(data, "handedness", 'R');
             mychart.draw(1000);

             svg.append("line")
	              .attr("x1", 662)
	              .attr("x2", 662)
	              .attr("y1", 450)
	              .attr("y2", 50)
	              .attr('class', 'lineLine1');

	         svg.append("line")
	             .attr("x1", 95)
	             .attr("x2", 812)
	             .attr("y1", 305)
	             .attr("y2", 305)
	             .attr('class', 'lineLine2'); 
     
             svg.append("text")
	             .attr("dx", 95)
	             .attr("dy", 298)
	             .text("Top 5% high Home Run Scorers")
	             .attr('class', 'lineText1');

             svg.append("text")
	             .attr("dx", 668)
	             .attr("dy", 70)
	             .text("Top 5% high avg")
	             .attr('class', 'lineText2');
                    
            });

    d3.select("#bothHand").on("click", function(d) {
            
            
        	 d3.select("line.olineLine1").remove();
        	 d3.select("text.olineText1").remove();
        	 d3.select("line.olineLine2").remove();
        	 d3.select("text.olineText2").remove();
        	 d3.select("line.lineLine1").remove();
        	 d3.select("text.lineText1").remove();
        	 d3.select("line.lineLine2").remove();
        	 d3.select("text.lineText2").remove();

             data_select = d;
             mychart.data = dimple.filterData(data, "handedness", 'B');
             mychart.draw(1000);
             
             svg.append("line")
	              .attr("x1", 647)
	              .attr("x2", 647)
	              .attr("y1", 450)
	              .attr("y2", 50)
	              .attr('class', 'lineLine1');

	         svg.append("line")
	             .attr("x1", 95)
	             .attr("x2", 812)
	             .attr("y1", 356)
	             .attr("y2", 356)
	             .attr('class', 'lineLine2'); 
     
             svg.append("text")
	             .attr("dx", 95)
	             .attr("dy", 350)
	             .text("Top 10% high Home Run Scorers")
	             .attr('class', 'lineText1');

             svg.append("text")
	             .attr("dx", 660)
	             .attr("dy", 70)
	             .text("Top 10% high avg")
	             .attr('class', 'lineText2');
            });
        
                  
};
