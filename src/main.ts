import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/dist/index.css' // 引入element-plus样式
import './assets/all.css'
import './assets/common.css'
//文章编辑器开始
// @ts-ignore
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// @ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
VMdEditor.use(githubTheme, {
    Hljs: hljs,
});
//文章编辑器结束
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VMdEditor);
app.mount('#app')
