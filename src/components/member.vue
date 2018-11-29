<template>
  <div>
    <header-component></header-component>
    <!-- <div>成员</div> -->

    <div id="canvas">
      <canvas id="chart1" width="550" height="250">
        你的浏览器不支持canvas,请升级你的浏览器
      </canvas>
    </div>
    <div id="svg">
      <svg width="550" height="250">
        <circle cx="55" cy="55" r="50" fill="blue" stroke="gray" stroke-width="2"/>
        <rect x="20" y="120" rx="20" ry="20" width="200" height="100" style="fill:red;stroke:black;"/>
      </svg>
      <svg width="550" height="250">
        <path d="M50 50 L140 50 L60 130 L90 20 L110 130 Z" style="fill:white;stroke:red;stroke-width:2"/>
      </svg>
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
canvas {
  background: #ffffff;
}
svg {
  background: #ddffff;
}
</style>
<script>
import HeaderComponent from "@/components/headercomponent";
import FooterComponent from "@/components/footercomponent";

export default {
  name: "member",
  data() {
    return {};
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  mounted: function() {
    var canvas = document.getElementById("chart1");
    if (!canvas.getContext) return;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    //绘制矩形 (x,y,width,heigth)
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);

    //绘制直线
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }
};
</script>
