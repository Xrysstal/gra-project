<template>
  <div id="app"
  tabindex = 0>
  <music></music>
  <panel></panel>
  <bird></bird>
  <pipes></pipes>
  <land></land>
  <!--<yanxi></yanxi>-->
  </div>
</div>
</template>

<script>
// import yanxi from './components/yanxi.vue'
import land from './components/land.vue'
import panel from './components/panel.vue'
import bird from './components/bird.vue'
import pipes from './components/pipes'
import music from './components/music'
import game from './game'

export default {
  data () {
    return {
      width: 600,
      height: 800
    }
  },
  components: {
    // yanxi,
    music,
    bird,
    panel,
    land,
    pipes
  },
  attached () {
    let body = document.querySelector('body')
    body.onkeydown = (e) => {
      if (e.keyCode !== 32) return
      this.eventClick()
      return false
    }
    body.ontouchstart = () => {
      this.eventClick()
      return false
    }
  },
  methods: {
    eventClick () {
      if (game.state === 'ready') {
        game.setState(game.states.start)
      } else if (game.state === 'start') {
        game.jump()
      }
    }
  }
}
</script>

<style>
@import './assets/css/normalize.css';
/*@import './components/styles/main.css';*/
* {
  box-sizing: border-box;
}

ul {
  list-style: none;
}
html {
  height: 100%;
}

body {
  font-family: Helvetica, sans-serif;
  height: 100%;
}

#app {
  position: absolute;
  top: 50%;
  left: 50%;
  width:  600px;
  height: 800px;
  margin-top: -500px;
  margin-left: -300px;
  border: 5px solid black;
  background: url(./assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

</style>
