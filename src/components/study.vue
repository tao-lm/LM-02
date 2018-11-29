<template>
  <div>
    <header-component></header-component>
    <!-- <div>学习</div> -->

    <div id="demo">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
    <div id="demo1">

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
  p{
    color: #fff;
  }
  #demo{
    background:red;
  }
   #demo1{
    background:green;
  }
</style>
<script>
  import HeaderComponent from '@/components/headercomponent'
  import FooterComponent from '@/components/footercomponent'
  import * as d3 from "d3";

  export default {
    name: 'study',
    data() {
      return {}
    },
    components: {
      HeaderComponent,
      FooterComponent
    },
    mounted:function(){
      const arr0 = ['a','b','c','d','e'];

      let demo = d3.select('#demo');
      //console.log(demo);
      let p = d3.select('p');
      //console.log(p);
      let p1 = d3.selectAll('p');
      //console.log(p1);

        let str = "d3";
      // p.datum(str);
      // p.text(function(d, i){
      //   return "第 "+ i + " 个元素绑定的数据是 " + d;
      // });

      // p1.datum(str);
      // p1.text(function(d, i){
      //   return "第 "+ i + " 个元素绑定的数据是 " + d;
      // });

      p1.data(arr0);
      p1.text(function(d){
        return d;
      });

      /*********************************************************************************/
      // let demo1 = d3.select('#demo1');
      // demo1.data(arr0).append('p').text(
      //   function(d){
      //     return d;
      //   }
      // )
  
      let demo1 = d3.select('#demo1 p');
      demo1.data(arr0).enter().append('p').text(
        function(d){
          return d;
        }
      )
//console.log(demo1);
    }
  }
</script>
