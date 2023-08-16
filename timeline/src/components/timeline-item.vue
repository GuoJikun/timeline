<script setup>
defineOptions({
  name: "IvyTimelineItem",
});

const props = defineProps({
  hollow: Boolean,
  hideTimestamp: Boolean,
  timestamp: String,
});
</script>

<template>
  <div class="ivy-timeline-item">
    <div class="ivy-timeline-item__left">
      <div class="ivy-timeline-item__icon">
        <slot name="icon">
          <span
            class="ivy-timeline-item-icon"
            :class="{ 'is-hollow': props.hollow }"
          ></span>
        </slot>
      </div>
      <div class="ivy-timeline-line"></div>
    </div>
    <div>
      <div class="ivy-timeline-item-timestamp" v-if="!props.hideTimestamp">
        {{ props.timestamp }}
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
