<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import serve from "@/utils/server";
import { user, other } from "@/api";
export default {
  data: () => ({ content: "", title: "" }),
  created() {
    // 模拟请求数据
    serve.get(user).then(user => {
      this.content = user.data.content;
      this.title = user.data.title;
    });
    // 一些其他操作不会影响到loading的
    Promise.all([serve.get(other)]).then(all => {
      console.log(all);
    });
  }
};
</script>
