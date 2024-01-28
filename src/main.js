import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync, faPlus, faEdit, faTrashAlt, faChartSimple, faFileImport, faFileExport, faSun, faMoon, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import FaIcon from './components/FaIcon.vue'

import './assets/main.css'

library.add(faSync, faPlus, faEdit, faTrashAlt, faChartSimple, faFileImport, faFileExport, faSun, faMoon, faCaretRight)

const app = createApp(App)

app.component("FaIcon", FaIcon)
app.mount('#app')