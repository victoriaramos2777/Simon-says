import '../assets/styles/style.scss'
import javascriptLogo from '../assets/logos/JavaScript.svg'
import { setupCounter } from './modules/counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <p>Esta es un aplantilla de vanilla js editada con vite.</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
