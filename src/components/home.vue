<template>
  <div>
    <header-component></header-component>
    <div>this is template body{{msg}}</div>

    
    <div class="hw"></div>


    {{message}}
    <router-view></router-view>
    <footer-component :tit="msg" @receiveData="showData"></footer-component>
  </div>
</template>
<style>
body {
  background: #555555;
  margin: 0;
  padding: 0;
}
</style>
<script>
import HeaderComponent from "@/components/headercomponent";
import FooterComponent from "@/components/footercomponent";
import * as d3 from "d3";

export default {
  name: "home",
  data() {
    return {
      msg: "hello vue",
      message: ""
    };
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    showData(data) {
      console.log(data); //获取子组件数据
      this.message = data;
    }
  },

  mounted: function() {
    
    let hw = d3.select(".hw").text("hello world!").style("color", "#fff");
    
  }
};
</script>
