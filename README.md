# D3.js Visulalization Project
## Summary
Compare the performance of Baseball players based on their home runs and average scores. The visualization is created using D3.js and Dimple.js. The chart categorises players based on their handedness and clearly shows that left-handed players are top performers.
## Design
### Initial design choices:
A scatter plot is used to represent every baseball player on the chart. The scatter plot is suitable for plotting players on continuous axes (Home runs and average score). Color encoding is used to differentiate players based on their handedness. Additional option to view players according to their playing style(left right or both handedness) separately.
### Changes in Design after feedback:
* Restricted the movement of axes
* Added marker line to distinctively see top players 
* Added context and message for the visualization
* Made comparisons uniform (5% only)
* Improved ticks of x-axis 
* Improved Buttons
* Added a legend and title 
* Changed stroke color same as the fill of the circles
## Feedback
* Technically it is a wonderful visualization (with excellent choice of colors), which displays the information clearly (although the choice of the word between instead of both is a little confusing.
* The fact that the axes move makes it harder to compare (it looks good and it is not impossible to compare, just more difficult).
* For some of your charts you use 5% and others 10%, to be able to compare you should use just one measure.
* It is difficult to see a story in this visualization (unless the story is that there is little noticeable difference between Handedness and Home Runs)
* You will have to add a commentary to your chart (a few short statements about the source of the data, describing the data, and the key findings).
* Your X Axis looks odd and a legend for the graph will help.
## Resources
* [Dimple Documentation](https://github.com/PMSI-AlignAlytics/dimple/wiki)
* [D3.js Documentaion](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md)
* [StackOverflow](https://stackoverflow.com/questions/27387250/dimple-filter-for-x-value)
* [D3noob](http://www.d3noob.org/2014/02/styles-in-d3js.html)
* [DashingD3js](https://www.dashingd3js.com/svg-basic-shapes-and-d3js)
