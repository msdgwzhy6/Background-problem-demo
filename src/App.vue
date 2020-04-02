<template>
  <div class="cs-app">
    <aside class="cs-aside">
      <nav class="cs-nav">
        <p><router-link :to="{ name: 'roll' }">虚拟列表</router-link></p>
        <p><router-link :to="{ name: 'loading' }">全局loading</router-link></p>
        <p>
          <router-link :to="{ name: 'keepAlive' }">路由组件自定义缓存</router-link>
        </p>
      </nav>
    </aside>
    <main class="cs-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.cs-app {
  display: flex;
  p {
    margin: 1em 25px;
  }
  height: 100vh;
}
.cs-aside {
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  border-right: 1px #ddd;
  overflow: auto;
  width: 256px;
  border-right: 1px #ddd solid;
}
.cs-main {
  margin-left: 256px;
  flex: 1;
}
</style>
