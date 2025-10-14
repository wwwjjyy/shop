import AppBanner from './AppBanner.vue'
import AppMore from './AppMore.vue'
import { createApp } from 'vue'

const app = createApp({})

app.component(AppBanner.nam, AppBanner)
app.component(AppMore.nam, AppMore)