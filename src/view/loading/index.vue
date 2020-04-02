<template>
  <div>
    <loading v-model="show" />
    <router-view class="router"></router-view>
  </div>
</template>

<script>
import loading from "./loading";
import { state } from "@/utils/server";
export default {
  components: {
    loading
  },
  data: () => ({ state }),
  computed: {
    show() {
      return this.state.content > 0;
    }
  }
};
</script>
