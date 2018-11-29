<template>
  <div>
    <header-component></header-component>
    <div id="chart">
       <svg width="960" height="600"></svg>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<style>
body {
  background: #555555;
  margin: 0;
  padding: 0;
}
svg{
  background: #fff;
}
</style>
<script>
import HeaderComponent from "@/components/headercomponent";
import FooterComponent from "@/components/footercomponent";
import * as d3 from "d3";

export default {
  name: "entertainment",
  data() {
    return {};
  },
  components: {
    HeaderComponent,
    FooterComponent
  },

  mounted: function() {
     var marge = {top:60,bottom:60,left:60,right:60}
    	var svg = d3.select("svg");//得到SVG画布
    	var width = svg.attr("width");//得到画布的宽
    	var height = svg.attr("height");//得到画布的长
    	var g = svg.append("g")
    		.attr("transform","translate("+marge.top+","+marge.left+")");
    	
    	var dataset = [10,20,30,23,13,40,27,35,20];
   
      //d3.scaleBand()：这也是一个坐标轴，可以根据输入的domain的长度，等分rangeRound域（类比range域）
    	var xScale = d3.scaleBand()
    		.domain(d3.range(dataset.length))
    		.rangeRound([0,width-marge.left-marge.right]);
    	var xAxis = d3.axisBottom(xScale);
    		
    	var yScale = d3.scaleLinear()
    		.domain([0,d3.max(dataset)])
    		.range([height-marge.top-marge.bottom,0]);
    	var yAxis = d3.axisLeft(yScale);
    	
    	g.append("g")
    		.attr("transform","translate("+0+","+(height-marge.top-marge.bottom)+")")
    		.call(xAxis);
    	g.append("g")
    		.attr("transform","translate(0,0)")
    		.call(yAxis);
    		
    	//绘制矩形和文字
    	var gs = g.selectAll(".rect")
    		.data(dataset)
    		.enter()
    		.append("g");
    	
    	//绘制矩形
    	var rectPadding = 20;//矩形之间的间隙
    	gs.append("rect")
    		.attr("x",function(d,i){
    			return xScale(i)+rectPadding/2;
    		})	
    		.attr("y",function(d){
    			return yScale(d);
    		})
    		.attr("width",function(){
    			return xScale.step()-rectPadding;
    		})
    		.attr("height",function(d){
    			return height-marge.top-marge.bottom-yScale(d);
    		})
    		.attr("fill","blue");
    	//绘制文字
    	gs.append("text")
    		.attr("x",function(d,i){
    			return xScale(i)+rectPadding/2;
    		})
    		.attr("y",function(d){
            return yScale(d);
        	})
        	.attr("dx",function(){
        		(xScale.step()-rectPadding)/2;
        	})
        	.attr("dy",20)
        	.text(function(d){
        		return d;
        	})
  }
};
</script>
