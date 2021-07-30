<template>
  <div id="teams">
    <div class="box team1">
      <div class="team-name">TEAM NAKED</div>
      <div class="team-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div class="team-members">
        <div class="member">@member1</div>
        <div class="member">@member2</div>
        <div class="member">@member3</div>
        <div class="member">@member4</div>
      </div>
    </div>
    <div class="box team2">
      <div class="team-name">EVIL TEAM NAKED</div>
      <div class="team-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <div class="team-members">
        <div class="member">@member1</div>
        <div class="member">@member2</div>
        <div class="member">@member3</div>
        <div class="member">@member4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teams'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #teams {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 0 auto;
    max-width: 1100px;
    padding: 60px 0;
    background: #000;
  }
  .box {
    width: calc(50% - 30px);
    padding: 0 0 10px 0;
  }
  .team-name {
    display: inline-block;
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    padding: 0 12px 5px 12px;
    background: #f0f;
    transform: rotateZ(5deg);
    margin: -10px 0 0 0;
  }
  .team-description {
    padding: 30px 40px;
    line-height: 1.4em;
    text-align: left;
    font-size: 17px;
    color: #fff;
  }
  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }
  .member {
    flex: 0 0 calc(25% - 5px);
    color: #fff;
    background: #222;
    padding: 30px 0;
    margin: 0px;
    box-sizing: border-box;
  }
</style>