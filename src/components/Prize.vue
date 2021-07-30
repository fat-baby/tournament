<template>
  <div id="prize">
    <div class="container">
      <div class="box prize">
        <video autoplay loop>
          <source src="https://storage.opensea.io/files/47dfea8142bbec4c10be4db0fe8fcd60.mp4" type="video/mp4">
        </video>
      </div>
      <div class="box text">
        <div class="title">Prize</div>
        Distinctio non dolorem ratione provident quod dicta distinctio. Repudiandae nesciunt molestiae dolor. Rerum fuga soluta laudantium quia corrupti iste. Officia aut amet necessitatibus sed nihil. Earum non exercitationem blanditiis. Et nesciunt aut rem.
        Mollitia harum sed voluptatem modi. Vel facilis repudiandae nam. Minima reiciendis qui et maiores quia atque delectus libero.
        Corporis optio saepe nulla. Nostrum natus autem quibusdam laborum. Beatae est quae molestias laborum.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prize'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #prize {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 30px 0 80px 0;
    background: #000;
  }
  .container {
    max-width: 1100px;
    flex: 0 0 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    margin: 20px 0;
    flex: 0 0 40%;
    text-align: left;
  }
  video {
    height: 100%;
    width: 100%;
  }
  .prize {
    background: #fff;
    padding: 10px;
  }
  .title {
    font-size: 42px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.6em;
  }
  .text {
    padding: 30px;
    line-height: 1.6em;
    color: #fff;
  }
</style>