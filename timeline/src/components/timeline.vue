<script setup>
import { toRef, provide } from "vue";
defineOptions({
  name: "IvyTimeline",
});

const props = defineProps({
  direction: {
    type: String,
    default: "vertical",
    validator: (val) => {
      return ["vertical", "horizontal"].includes(val);
    },
  },
  alignCenter: Boolean,
});

provide("timelineHollow", toRef(props.hollow));
provide("timelineDirection", toRef(props.direction));
</script>

<template>
  <div
    :class="[
      'ivy-timeline',
      `ivy-timeline-${props.direction}`,
      {
        'is-align-center': props.alignCenter,
      },
    ]"
  >
    <slot />
  </div>
</template>
