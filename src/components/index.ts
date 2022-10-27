import { App, Directive } from "vue";
import PointTag from "./point-tag/index.vue";
// import * as directives from '@/directives/index'
export type DirectiveType = { [key: string]: Directive };
const components = [PointTag];

const install: any = function (app: App) {
  // 防止已经注册过的组件重复注册
  if (install.installed) return (install.installed = true);
  
  components.forEach((res) => {
    app.component(res.name, res);
  }); // 注册指令
  // Object.keys(directives).forEach(res => { app.directive(res, (directives as DirectiveType)[res]) })
};
// 导出一个install的函数或者一个对象里面有一个install的方法export default { install}
