<template>
  <div class="top">
    <ul class="nav">
      <li v-for="com in path" :key="com.id">
        <router-link :to="com.url">{{com.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .top {
    width: 100%;
    background: #000000;
  }

  .nav {
    width: 60vw;
    /* height: 60px; */
    height: 5vh;
    list-style: none;
    margin: 0;
    padding: 0;
    background: #000000;
  }

  .nav li a {
    box-sizing: border-box;
    width: 10vw;
    text-align: center;
    float: left;
    line-height: 5vh;
    font-size: 3vh;
    color: #ffffff;
    text-decoration: none;
    border-right: 1px solid #ffffff;
  }

  .nav li:last-child a {
    border-right: none;
  }
</style>
<script>
  export default {
    name: 'headercomponent',
    data() {
      return {
        path: [
          // {name: "首页", url: "/"},
          // {name: "成员", url: "/02"},
          // {name: "技术", url: "/03"},
          // {name: "学习", url: "/04"},
          // {name: "娱乐", url: "/05"},
          {name: "hello", url: "/"},
          {name: "svg", url: "/02"},
          {name: "技术", url: "/03"},
          {name: "选择集", url: "/04"},
          {name: "绘制", url: "/05"},
          {name: "坐标轴", url: "/06"},
        ]
      }
    }
  }
</script>
