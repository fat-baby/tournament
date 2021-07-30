<template>
  <div id="footer">
    <div class="container">
      <div class="socials">Twitter</div>
      <div class="socials">Discord</div>
      <div class="socials">Instagram</div>
      <div class="socials">Other thing</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    height: 110px;
    margin: 0px 0 0 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 30px 0;
    box-sizing: border-box;
    max-width: 1100px;
  }
  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    background: #000;
    width: calc(25% - 20px);
    height: 100%;
  }
</style>