import { defineCustomElement } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


export default {
}

const memoryDB = defineCustomElement({
  // normal Vue component options here
  props: {
    index: Number    ,
    nome_imagem:String,
    functionsetInterval:Number,
  },
  emits: {},
    
  
  methods:
  {
    increment(algo) {
      //console.log(algo+"       increment(algo) {")
      clearInterval(algo);
    }
  },
  template: `
  <button @click="increment(`
  +
  `functionsetInterval` //--------------------------
  +
  `)">
  {{index}} 
  </button>


    `,
  // defineCustomElement only: CSS to be injected into shadow root
  styles: [``]
})

customElements.define('memory-db', memoryDB)

document.body.appendChild(
  new memoryDB({
    // initial props (optional)
  })
)
