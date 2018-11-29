<template>
  <div class="footer">
    <!-- <button @click="putData">点击发送数据给父组件</button> -->
    <!-- <p>{{tit}}</p> -->
  </div>
</template>
<style scoped>
  .footer {
    display: none;
    background: #000000;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #ffffff;
  }
  p{
    margin: 0;
  }
</style>
<script>
  export default {
    name: 'footercomponent',
    data() {
      return {
        message: '来自子组件的问候！'
      }
    },
    //props: ['tit'],
    methods: {
      // putData() {
      //   this.$emit('receiveData', this.message)
      // }
    }
  }
</script>
