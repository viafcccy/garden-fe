import { createApp } from 'vue'
import { createPinia } from 'pinia'

// vue
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

// css
import './assets/main.css'

// elemen-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// highlightjs
import hljs from 'highlight.js'

// v-md-editor
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
// emoji 表情
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
// mermaid 流程图
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
// 代码行数
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 快速复制代码
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// 使用主题
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
// 插件
VMdPreview.use(createEmojiPlugin());
VMdPreview.use(createMermaidPlugin());
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createCopyCodePlugin());



// APP
const app = createApp(App)

// import all element-plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(VMdPreview);

app.config.globalProperties.cookies = VueCookies

app.mount('#app')
