<template>
  <router-link tag="div" :to="{ name: 'list' }" class="cs-home">
    当前是主页面，点击进入列表页
  </router-link>
</template>

<script>
export default {};
</script>
<style lang="less">
.cs-home {
  width: 800px;
  height: 100vh;
  background: #d4ebd0;
  margin: auto;
  line-height: 100vh;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
}
</style>
