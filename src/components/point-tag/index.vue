<template>
  <div
    class="point-tag"
    :style="{
      width: size,
      height: size,
      backgroundColor: bgColor,
    }"
    :class="{
      'point-tag-circle': type === 'circle',
      'point-tag-square': type === 'square',
      'point-tag-round': type === 'round',
      'point-tag-shadow': shadow,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineProps, defineComponent } from "vue-demi";
import { setColor } from "../../utils";

export default defineComponent({
  props: {
    size: {
      type: String,
      default: "6px",
    },
    color: {
      type: String,
      default: "#bbb",
    },
    textColor: {
      type: String,
      default: "#333",
    },
    type: {
      type: String,
      default: "circle",
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bgColor() {
      return setColor(this.color || "ddd");
    },
  },
});
</script>

<style lang="scss">
.point-tag {
  text-shadow: 0 1px 2px #000;
  color: #fff;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  //   display: inline-block;
  padding: 0;
  margin-right: 1px;

  &-circle {
    border-radius: 100px;
  }

  &-round {
    border-radius: 8px;
  }

  &-shadow {
    box-shadow: 1px 1px 2px #333;
  }
}
</style>
