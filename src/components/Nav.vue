<template>
  <div id="nav">
    <div class="name">
      <span class="nft">NFT</span>rainers
    </div>
    <div class="container navigation">
      <a href="#versus"><div class="link">Versus</div></a>
      <a href="#teams"><div class="link">Teams</div></a>
      <a href="#tournament"><div class="link">Tournament</div></a>
      <a href="#prize"><div class="link">Prize</div></a>
      <a href="#FAQ"><div class="link">FAQ</div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #nav {
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0px 0;
    background: #000;
  }
  .nft {
    color: red;
  }
  .name {
    font-size: 36px;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
  }
  .navigation {
    display: flex;
    flex-wrap: wrap;
    width: 100;
  }
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
  }
  .link {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .link:hover {
    background: #fff;
    color: #000;
  }
</style>