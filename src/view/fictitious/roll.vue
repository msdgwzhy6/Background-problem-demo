<template>
  <div>
    <p>无限滚动示例：</p>
    <ul class="root" @scroll="scroll">
      <li v-for="item of list" :key="item" class="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: Array(20)
        .fill(0)
        .map((f, i) => i)
    };
  },
  methods: {
    scroll({ target }) {
      // 计算公式: 总高度 - 可见高度 - 滚动条高度
      const DISTANCE = 40;
      const h = target.scrollHeight - (target.clientHeight + target.scrollTop);
      if (h < DISTANCE) {
        for (let i = 0, j = this.list.length, l = this.list.length; i < l; i++) {
          this.list.push(j + i);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.root {
  border: 1px solid #999;
  list-style: none;
  overflow: auto;
  height: 400px;
  margin: 0;
  padding: 0;
  .item {
    line-height: 25px;
    border-bottom: 1px solid #ccc;
    padding-left: 40px;
  }
}
</style>
