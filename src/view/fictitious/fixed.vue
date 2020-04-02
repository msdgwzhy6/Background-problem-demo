<template>
  <div>
    <p>固定列表（10000）演示：</p>
    <div class="root" ref="root" @scroll="scroll">
      <div class="container" :style="{ height: totalHeight }"></div>
      <ul class="content" :style="{ transform: getTransform }">
        <li
          class="item"
          :style="{ height: height + 'px', lineHeight: height + 'px' }"
          v-for="(item, i) of nowList"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: Array(10000)
        .fill(1)
        .map((f, i) => i),
      height: 30,
      start: 0,
      end: 0
    };
  },
  computed: {
    totalHeight() {
      return this.height * this.list.length + "px";
    },
    nowList() {
      return this.list.slice(this.start, this.end);
    },
    getTransform() {
      return `translate3d(0,${this.start * this.height}px,0)`;
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      const dom = this.$refs.root;
      const total = Math.ceil(dom.clientHeight / this.height);
      const start = Math.floor(dom.scrollTop / this.height);
      const end = start + total;
      this.start = start;
      this.end = end;
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
  position: relative;
  .container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .content {
    .container();
    z-index: 1;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .item {
    border-bottom: 1px solid #ccc;
    padding-left: 40px;
  }
}
</style>
