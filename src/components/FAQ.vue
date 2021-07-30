<template>
  <div id="FAQ">
    <div class="title">FAQ</div>
    <div class="accordion">
      <div class="question">How to participate?</div>
      <div class="content">Mollitia harum sed voluptatem modi. Vel facilis repudiandae nam. Minima reiciendis qui et maiores quia atque delectus libero.Itaque nihil facere vitae suscipit sit optio incidunt. Neque dolor eos non aut. Atque fugit laborum omnis et et. Dolores natus hic quia quibusdam quos dolore qui.</div>
      <div class="question">When do the battles start?</div>
      <div class="question">Some other question that is confusing?</div>
      <div class="question">What is the square root of pi?</div>
      <div class="question">What is the absolute best pokemon in your opinion?</div>
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
  #FAQ {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0 80px 0;
    background: #0ff;
  }
  .title {
    flex: 0 0 100%;
    font-weight: 900;
    color: #000;
    font-size: 50px;
    margin: 20px 0;
  }
  .accordion {
    flex: 0 0 100%;
    max-width: 700px;
  }
  .question {
    font-size: 22px;
    padding: 10px 0;
    background: #000;
    color: #fff;
    margin: 0 0 5px 0;
  }
  .content {
    text-align: left;
    margin: 5px;
    padding: 20px;
    color: #000;
    font-size: 18px;
    background: #0ff;
    line-height: 1.5em;
  }
</style>