function draw(data){

     var margin =25,
         width = 900,
         height = 500

     var svg=d3.select('body')
               .append('svg') 
               .attr('width', width)
               .attr('height',height)
               .append('g')
               .attr('class', 'chart');

/*  Creating chart with dimple */         
     var mychart = new dimple.chart(svg,data);      
    	 mychart.setMargins('10%', '2%', '2%', '10%');
     var x = mychart.addMeasureAxis('x','avg');
         x.ticks = 20;
         x.tickFormat = ',.2f';                   // changing ticks format
     var y = mychart.addMeasureAxis('y','HR');
         y.overrideMax = 600;   
                           //fixing y axix
	     mychart.addSeries(['name','handedness','HR','avg'],dimple.plot.bubble);
	     mychart.draw();

/* Creating legend */
     svg.append('rect')
        .attr('x',180)
        .attr('y', 46)
        .attr('width',91)
        .attr('height',90)
        .style('fill','#D0D3D4');

     svg.append('circle')        
	    .attr('cx', 200)           
	    .attr('cy', 85)           
	    .attr('r', 6)             
	    .style('stroke', 'yellow')    
	    .style('fill', 'yellow');

	 svg.append('text')        
       	.style('fill', 'black')    
	    .attr('x', 210)      
	    .attr('y', 90)     
	    .text('Left');

	 svg.append('circle')        
	    .attr('cx', 200)           
	    .attr('cy', 100)           
	    .attr('r', 6)               
	    .style('stroke', '#259286')    
	    .style('fill', '#259286');
	 
	 svg.append('text')        
		.style('fill', 'black')    
	    .attr('x', 210)      
	    .attr('y', 105)     
	    .text('Right');

	 svg.append('circle')        
	    .attr('cx', 200)           
	    .attr('cy', 115)           
	    .attr('r', 6)                
	    .style('stroke', '#C61C6F')    
	    .style('fill', '#C61C6F'); 

	 svg.append('text')        
		.style('fill', 'black')    
	    .attr('x', 210)      
	 	.attr('y', 120)     
	    .text('Both');

     svg.append('text')        
		.style('fill', 'black')    
	    .attr('x', 188)      
	   	.attr('y', 68)     
	    .text('Handedness');

/* Adding 5% marker lines */
     svg.append('line')
	    .attr('x1', 724)
	    .attr('x2', 724)
	    .attr('y1', 450)
	    .attr('y2', 10)
	    .attr('class', 'olineLine1');

	 svg.append('line')
	    .attr('x1', 95)
	    .attr('x2', 882)
	    .attr('y1', 303)
	    .attr('y2', 303)
	    .attr('class', 'olineLine2'); 
     
     svg.append('text')
	    .attr('dx', 95)
	    .attr('dy', 299)
	    .text('Top 5% high Home Run Scorers')
	    .attr('class', 'olineText1');

	 svg.append('text')
	    .attr('dx', 727)
	    .attr('dy', 44)
	    .text('Top 5% high avg')
	    .attr('class', 'olineText2');
            
     var avg_scale = d3.scale.linear()
 					         .range([margin,width])
 					         .domain([0,0.39]);

/* Adding action to buttons on click*/
     d3.select('#full').on('click', function(d) {

     	     d3.select('line.lineLine1').remove();
        	 d3.select('text.lineText1').remove();
        	 d3.select('line.lineLine2').remove();
        	 d3.select('text.lineText2').remove();

			 data_select = d;
             mychart.data = data;
             mychart.draw(1000);

             svg.append('line')
	            .attr('x1', 724)
	            .attr('x2', 724)
	            .attr('y1', 450)
	            .attr('y2', 10)
	            .attr('class', 'olineLine1');
             
	         svg.append('line')
	            .attr('x1', 95)
	            .attr('x2', 882)
	            .attr('y1', 303)
	            .attr('y2', 303)
	            .attr('class', 'olineLine2'); 
             
             svg.append('text')
	            .attr('dx', 95)
	            .attr('dy', 299)
	            .text('Top 5% high Home Run Scorers')
	            .attr('class', 'olineText1');

	         svg.append('text')
	            .attr('dx', 727)
	            .attr('dy', 44)
	            .text('Top 5% high avg')
	            .attr('class', 'olineText2');
          });

     d3.select('#lefty').on('click', function(d) {

         	 d3.select('line.olineLine1').remove();
        	 d3.select('text.olineText1').remove();
        	 d3.select('line.olineLine2').remove();
        	 d3.select('text.olineText2').remove();
        	 d3.select('line.lineLine1').remove();
        	 d3.select('text.lineText1').remove();
        	 d3.select('line.lineLine2').remove();
        	 d3.select('text.lineText2').remove();

             data_select = d;
             mychart.data = dimple.filterData(data, 'handedness', 'L');  //filtering data
             mychart.draw(1000);
     
             svg.append('line')
	            .attr('x1', 742)
	            .attr('x2', 742)
	            .attr('y1', 450)
	            .attr('y2', 10)
	            .attr('class', 'lineLine1');

	         svg.append('line')
	            .attr('x1', 95)
	            .attr('x2', 882)
	            .attr('y1', 290)
	            .attr('y2', 290)
	            .attr('class', 'lineLine2'); 
     
             svg.append('text')
	            .attr('dx', 95)
	            .attr('dy', 285)
	            .text('Top 5% Home Run Scorers')
	            .attr('class', 'lineText1');

             svg.append('text')
	            .attr('dx', 748)
	            .attr('dy', 44)
	            .text('Top 5% high avg')
	            .attr('class', 'lineText2');
                         
             });

     d3.select('#righty').on('click', function(d) {
           
             d3.select('line.olineLine1').remove();
        	 d3.select('text.olineText1').remove();
        	 d3.select('line.olineLine2').remove();
        	 d3.select('text.olineText2').remove();
        	 d3.select('line.lineLine1').remove();
        	 d3.select('text.lineText1').remove();
        	 d3.select('line.lineLine2').remove();
        	 d3.select('text.lineText2').remove();


             data_select = d;
             mychart.data = dimple.filterData(data, 'handedness', 'R');
             mychart.draw(1000);

             svg.append('line')
	            .attr('x1', 719)
	            .attr('x2', 719)
	            .attr('y1', 450)
	            .attr('y2', 10)
	            .attr('class', 'lineLine1');

	         svg.append('line')
	            .attr('x1', 95)
	            .attr('x2', 882)
	            .attr('y1', 303)
	            .attr('y2', 303)
	            .attr('class', 'lineLine2'); 
     
             svg.append('text')
	            .attr('dx', 95)
	            .attr('dy', 297)
	            .text('Top 5% high Home Run Scorers')
	            .attr('class', 'lineText1');

             svg.append('text')
	            .attr('dx', 726)
	            .attr('dy', 44)
	            .text('Top 5% high avg')
	            .attr('class', 'lineText2');
                    
             });

     d3.select('#bothHand').on('click', function(d) {
            
        	 d3.select('line.olineLine1').remove();
        	 d3.select('text.olineText1').remove();
        	 d3.select('line.olineLine2').remove();
        	 d3.select('text.olineText2').remove();
        	 d3.select('line.lineLine1').remove();
        	 d3.select('text.lineText1').remove();
        	 d3.select('line.lineLine2').remove();
        	 d3.select('text.lineText2').remove();

             data_select = d;
             mychart.data = dimple.filterData(data, 'handedness', 'B');
             mychart.draw(1000);
             
             svg.append('line')
	            .attr('x1', 724)
	            .attr('x2', 724)
	            .attr('y1', 450)
	            .attr('y2', 10)
	            .attr('class', 'lineLine1');

	         svg.append('line')
	            .attr('x1', 95)
	            .attr('x2', 882)
	            .attr('y1', 336)
	            .attr('y2', 336)
	            .attr('class', 'lineLine2'); 
     
             svg.append('text')
	            .attr('dx', 95)
	            .attr('dy', 330)
	            .text('Top 5% high Home Run Scorers')
	            .attr('class', 'lineText1');

             svg.append('text')
	            .attr('dx', 730)
	            .attr('dy', 44)
	            .text('Top 5% high avg')
	            .attr('class', 'lineText2');
             });
                  
};
