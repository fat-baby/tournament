<template>
  <div id="tournament">
    <div class="container">
      <div class="title">Tournament</div>
      <div class="standing">
        <img src="https://i.imgur.com/7ydSQiJ.png" alt="">
        <div class="explainer">
          Shows upcoming fights and the dates.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tournament'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #tournament {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    padding: 0 0 50px 0;
    // background: #ff33ee;
    background: #af0faf;
  }
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .title {
    flex: 0 0 100%;
    color: #fff;
    font-weight: 900;
    font-size: 50px;
    text-transform: uppercase;
    margin: 30px 0 20px 0;
  }
  .standing {
    flex: 0 0 100%;
  }
  .standing img {
    height: 400px;
  }
  .explainer {
    
    color: #fff;
    padding: 10px;
  }
</style>