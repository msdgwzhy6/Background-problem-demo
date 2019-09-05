<template>
  <div>
    <p>任意高度列表（10000）演示：</p>
    <div class="root" ref="root" @scroll="scroll">
      <div class="container" :style="{ height: totalHeight }"></div>
      <ul class="content" :style="{ transform: getTransform }">
        <li
          class="item"
          v-for="item of nowList"
          :style="{
            height: item.height + 'px',
            lineHeight: item.height + 'px'
          }"
          :key="item.value"
        >
          {{ item.value }}
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
        .map((f, i) => {
          return {
            value: i,
            height: this.getRandom(10, 100)
          };
        }),
      start: 0,
      end: 0,
      // 指针
      pointer: -1,
      // 缓存
      cache: {},
      // 初始总数
      initialHeight: 50
    };
  },
  computed: {
    totalHeight() {
      if (this.initialtotal >= 0) {
        const { top, height } =
          this.pointer >= 0
            ? this.getIndexOffset(this.pointer)
            : { top: 0, height: 0 };
        return `${top +
          height +
          (this.list.length - 1 - this.pointer) * this.initialHeight}px`;
      }
      const { height } = this.list.reduce(function(x, y) {
        return {
          height: x.height + y.height
        };
      });
      return height + "px";
    },
    nowList() {
      return this.list.slice(
        this.start,
        Math.min(this.end + 1, this.list.length)
      );
    },
    getTransform() {
      return `translate3d(0,${this.getIndexOffset(this.start).top}px,0)`;
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      const dom = this.$refs.root;
      const start = this.getIndex(dom.scrollTop);
      const end = this.getIndex(dom.scrollTop + dom.clientHeight);
      this.start = start;
      this.end = end;
    },
    // 取出指定范围随机数
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    // 根据滚动条y获取指定坐标
    getIndex(scrollTop) {
      let total = 0;
      for (let i = 0, j = this.list.length; i < j; i++) {
        if (total >= scrollTop || j - 1 === i) {
          return i;
        }
        total += this.getIndexOffset(i).height;
      }
      return 0;
    },
    // 获取指定坐标的位置和高度
    getIndexOffset(index) {
      if (this.pointer >= index) {
        return this.cache[index];
      }
      let total = 0;
      if (this.pointer >= 0) {
        const li = this.cache[this.pointer];
        total = li.top + li.height;
      }
      for (let i = this.pointer + 1; i <= index; i++) {
        const size = this.list[i].height;
        this.cache[i] = {
          top: total,
          height: size
        };
        total += size;
      }
      if (index > this.pointer) {
        this.pointer = index;
      }

      return this.cache[index];
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
