import Timeline from "./components/timeline.vue";
import TimelineItem from "./components/timeline-item.vue";

const install = (app) => {
  app.component(Timeline.name, Timeline);
  app.component(TimelineItem.name, TimelineItem);
};

export { Timeline, TimelineItem, install };

export default install;
