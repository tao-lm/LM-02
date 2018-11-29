<template>
  <div class="body">
    <header-component></header-component>
    <div class="title">D3</div>
    <div class="d3">
      <div class="stars"></div>
      <div class="rocket">
        <span class="fins"></span>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import HeaderComponent from '@/components/headercomponent'
  import FooterComponent from '@/components/footercomponent'
  import * as d3 from 'd3'

  export default {
    name: 'technology',
    data() {
      return {}
    },
    components: {
      HeaderComponent,
      FooterComponent
    },
    mounted: function () {
      const COUNT_OF_STARS = 30;

      d3.select('.stars')
        .selectAll('span')
        .data(d3.range(COUNT_OF_STARS))
        .enter()
        .append('span')
        .style('--left', () => Math.ceil(Math.random() * 100))
        .style('--size', () => Math.random() * 1.5 + 1)
        .style('--opacity', () => Math.random() * 0.3 + 0.5)
        .style('--duration', () => Math.random() * 2 + 1)
        .style('--delay', (d) => d * -0.05);
    }
  }
</script>
<style>
  body {
    margin: 0;
    height: 100vh;
    background: linear-gradient(black, midnightblue);
    overflow: hidden;
  }

  #app {
    height: 100vh;
  }

  #app > div {
    height: 100vh;
  }

  .title {
    color: #ffffff;
  }

  .d3 {
    height: calc(100% - 121px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rocket {
    width: 7em;
    height: 11em;
    font-size: 16px;
    background: radial-gradient(
      circle at 3.5em 5em,
      transparent 1.5em,
      lightslategray 1.5em, lightslategray 2em,
      transparent 2em
    ),
    radial-gradient(
      circle at 3.3em 5.2em,
      deepskyblue 1.4em,
      transparent 1.6em
    ),
    radial-gradient(
      circle at 3.5em 5em,
      white 1.5em,
      transparent 1.5em
    ),
    linear-gradient(whitesmoke, darkgray);
    border-radius: 50% / 70% 70% 5% 5%;
    position: relative;
  }

  .rocket::before {
    content: '';
    position: absolute;
    width: 6em;
    height: 2em;
    background-color: #444;
    border-radius: 20%;
    top: 10em;
    left: 0.5em;
    z-index: -1;
  }

  .rocket::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 4em;
    height: 4em;
    background: gold;
    top: 10em;
    left: 1.5em;
    border-radius: 80% 0 50% 45% / 50% 0 80% 45%;
    transform: rotate(135deg);
    border: 0.5em solid orange;
    z-index: -2;
    animation: flame-spout 0.3s infinite;
  }

  @keyframes flame-spout {
    0%, 100% {
      filter: opacity(0.1);
    }

    50% {
      filter: opacity(1);
    }
  }

  .fins::before,
  .fins::after {
    content: '';
    position: absolute;
    width: 2em;
    height: 6em;
    background: linear-gradient(tomato, darkred);
    top: 7em;
  }

  .fins::before {
    left: -2em;
    border-radius: 3em 0 50% 100%;
  }

  .fins::after {
    right: -2em;
    border-radius: 0 3em 100% 50%;
  }

  .stars span {
    position: absolute;
    width: calc(var(--size) * 1px);
    height: calc(var(--size) * 4px);
    border-radius: 50%;
    background-color: white;
    filter: opacity(var(--opacity));
    top: -5vh;
    left: calc(var(--left) * 1vw);
    animation: star-move linear infinite;
    animation-duration: calc(var(--duration) * 1s);
    animation-delay: calc(var(--delay) * 1s);
  }

  @keyframes star-move {
    to {
      top: 100vh;
    }
  }
</style>
