import {
	createSSRApp
} from "vue";
import DiyTabbar from "@/components/diy-tabbar.vue";
import App from "./App.vue";
import store from './store';
export function createApp() {
  const app = createSSRApp(App);
  app.component('diy-tabbar', DiyTabbar)
  app.use(store)
	return {
		app,
	};
}
