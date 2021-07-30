<template>
  <Nav />
  <Versus />
  <Teams />
  <Tournament />
  <Prize />
  
  <FAQ />
  <Footer />
</template>

<script>
import Nav from './components/Nav.vue'
import Versus from './components/Versus.vue'
import Teams from './components/Teams.vue'
import Tournament from './components/Tournament.vue'
import Prize from './components/Prize.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav, Versus, Teams, Tournament, Prize, FAQ, Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;500;900&display=swap');

hmtl, body {
  background: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
}

#app {
  font-family: Barlow, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
