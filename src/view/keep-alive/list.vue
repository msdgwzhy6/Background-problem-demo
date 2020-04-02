<template>
  <router-link tag="div" :to="{ name: 'details' }" class="cs-list">
    <h4 class="cs-h4">当前是字列表，点击进入详情页面</h4>
    <ul class="cs-content">
      <li v-for="item of 100" :key="item">子列表值{{ item }}</li>
    </ul>
  </router-link>
</template>

<script>
export default {
  name: "list"
};
</script>
<style lang="less">
.cs-list {
  width: 800px;
  background: #a4c5c6;
  margin: auto;
  text-align: center;
}
.cs-content {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin: 0.4em 0;
  }
}
.cs-h4 {
  height: 200px;

  line-height: 200px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
