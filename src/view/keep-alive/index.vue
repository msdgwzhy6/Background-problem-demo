<template>
  <!-- 定义两个出口，一个可以被缓存，一个普通路由 -->

  <div>
    <keep-alive :include="include">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({ include: [] }),
  watch: {
    $route(to, from) {
      // 判断进入的情况
      const { keepAlive, name, depth } = to.meta;
      if (keepAlive && !this.include.includes(name)) {
        this.include.push(name);
      }
      // 判断回退的情况
      if (from.meta.keepAlive && from.meta.depth > depth) {
        // 删除
        const index = this.include.indexOf(from.meta.name);
        if (index !== -1) {
          this.include.splice(index, 1);
        }
      }
    }
  }
};
</script>
