<template>
  <div>
    <p>固定列表实现：</p>
    <div class="zoom" @scroll="handleScroll" ref="zoom">
      <div class="mask" :style="{ height: listHeight }"></div>
      <div class="list" :style="{ transform: transform }">
        <div
          class="li"
          :style="{ height: height + 'px' }"
          v-for="(item, i) of now"
          :key="i"
        >
          {{ item }}
        </div>
      </div>
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
    listHeight() {
      return this.list.length * this.height + "px";
    },
    now() {
      return this.list.slice(this.start, this.end);
    },
    transform() {
      return `translate3d(0px,${this.start * this.height}px,0px)`;
    }
  },
  mounted() {
    this.upScroll();
  },
  methods: {
    upScroll(top = 0) {
      // 计算总列数，可视宽度 / 每列宽度
      const clientHeight = this.$refs.zoom.clientHeight;
      const zoom = Math.ceil(clientHeight / this.height);
      // 开始
      const start = Math.floor(top / this.height);
      // 结束
      const end = start + zoom;
      this.start = start;
      this.end = end;
    },
    handleScroll() {
      const top = this.$refs.zoom.scrollTop;
      this.upScroll(top);
    }
  }
};
</script>
<style lang="less" scoped>
.zoom {
  height: 400px;
  overflow: auto;
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .list {
    .mask();
    z-index: 1;
  }
}
</style>
