import { createApp } from "vue";
import App from "./app.vue";
import * as timeline from "ivy-timeline";
import "ivy-timeline/dist/index.css";

console.log("timeline", Object.prototype.toString.call(timeline));

// const { default } = timeline;

const app = createApp(App);
app.use(timeline);
app.mount("#app");
