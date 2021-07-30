<template>
  <div id="versus">
    <div class="bg">
      <video autoplay loop>
        <source src="https://storage.opensea.io/files/8b0966b8416256dcb1d108c3da355b43.mp4" type="video/mp4">
      </video>
    </div>
    <div class="container">
      <div class="box team">
        <div class="team-name">TEAM NAKED</div>
        <div class="team-img">
          <video autoplay loop>
            <source src="https://storage.opensea.io/files/24266851c4c0e67ff0813062a7424a5d.mp4" type="video/mp4">
          </video>
        </div>
        <div class="team-vote">VOTE</div>
      </div>
      <div class="box versus-graphic">
        VERSUS
      </div>
      <div class="box team">
        <div class="team-name">EVIL TEAM NAKED</div>
        <div class="team-img">
          <video autoplay loop>
            <source src="https://storage.opensea.io/files/24266851c4c0e67ff0813062a7424a5d.mp4" type="video/mp4">
          </video>
        </div>
        <div class="team-vote">VOTE</div>
      </div>
    </div>
    <div class="container">
      <div class="hp">
        <div class="hp-1">70%</div>
        <div class="hp-2">30%</div>
      </div>
    </div>
    <div class="container timer">
      <div class="display">{{timeLeft}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Versus',
  data() {
    return {
      timer: 50000
    }
  },
  mounted() {
    setInterval(() => {
      this.timer--
    }, 1000)
  },
  computed: {
    timeLeft() {
      const h =  Math.floor(this.timer / 60 / 60);
      const m = Math.floor(this.timer / 60) - (h * 60);
      const s = this.timer % 60;
      return `${h}h ${m}m ${s}s`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #versus {
    position: relative;
    display: inline-block;
    margin: 0;
    width: 100vw;
    padding: 60px 0 70px 0;
    background: #3e25ee;
    white-space: nowrap;
    overflow: hidden;
  }
  .bg video {
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .container {
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  }
  .box {
    background: #000;
    padding: 10px;
    z-index: 11;
  }
  .team {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    width: 500px;
    height: 333px;
    margin: 30px 0 30px 0;
    z-index: 11;
  }
  .team-name {
    margin: -40px 0 0 0;
    z-index: 100;
    background: #000;
    color: #fff;
    padding: 10px 20px;
  }
  .team-img {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    background: #333;
  }
  .team-img video {
    height: 100%;
    width: 100%;
  }
  .team-vote {
    padding: 10px 20px;
    margin: -30px 0 0 0;
    font-size: 30px;
    color: #fff;
    font-weight: 900;
    background: #f00;
    z-index: 1000;
    box-shadow: 0 0 20px #000;
  }
  .versus-graphic {
    transform: rotateZ(-4deg);
    background: #cf0080;
    width: 130px;
    margin: 0 -80px;
    font-weight: 900;
    padding: 10px;
    z-index: 100;
    box-shadow: 0 0 20px #000;
    font-size: 30px;
    color: #fff;
  }
  .hp {
    display: flex;
    z-index: 11;
    justify-content: space-between;
    position: relative;
    height: 50px;
    margin: 0 0px;
    padding: 6px;
    box-sizing: border-box;
    width: 100%;
    max-width: 1100px;
    background:#000;
    box-shadow: 0px 0px 20px #000;
  }
  .hp div {
    display: flex;
    justify-content: center;
    line-height: 0;
    align-items: center;
    font-size: 34px;
    color: #000;
    height: 100%;
  }
  .hp-1 {
    width: calc(70% - 3px);
    background:#ff00a0;
  }
  .hp-2 {
    width: calc(30% - 3px);
    background: #00f0f0;
  }
  .timer {
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .display {
    z-index: 11;
    color: #fff;
    background: #000;
    padding: 2px 20px 10px 20px;
    font-size: 30px;
  }
</style>