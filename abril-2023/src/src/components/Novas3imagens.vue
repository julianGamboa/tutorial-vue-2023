<script >

import { defineComponent, ref } from 'vue'

var indiceImagenFECTH=0; //ref(0);
var ImagenFECTH=[]; //ref([]);
var functionsetInterval=0;

export default defineComponent({
  beforeCreate() {
    indiceImagenFECTH=100;
    
    functionsetInterval = setInterval(() => {
      this.indiceImagenFECTH++;
//      console.log("increment     "+this.indiceImagenFECTH);   
   }, 3*1000)},
   methods: {
    increment()
    {
      this.functionsetInterval = setInterval(() => {
        this.indiceImagenFECTH++;
        //console.log("increment     "+this.indiceImagenFECTH);   

     }, 3*1000);
console.log("increment"+this.functionsetInterval);   
    }
   },   
   data() {
    let stop=false;
    let imagem;
    const source=      
    "https://ssd-2023-240gb----youtube.s3.us-west-2.amazonaws.com/ssd-2023-240gb.json"
    fetch(source)
    .then(response => response.json())
    .then(data => this.ImagenFECTH = data)
    

    return { 
      stop,
      functionsetInterval: functionsetInterval,
      indiceImagenFECTH : Math.floor(Math.random()*1000),
      ImagenFECTH: {},
    }
  }
})
</script>


<template>
<!-- Bootstrap CSS 
  <button @click="indiceImagenFECTH++">{{ indiceImagenFECTH }}</button>

-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


<!--<button @click="increment"> {{functionsetInterval}} </button>--------->
<header>
    <div class="bg-dark collapse" id="navbarHeader" >
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">Informações</h4>
            <p class="text-muted">
Certificados obtidos até o ano 2023<br>
</p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Julian Gamboa</h4>
            <ul class="list-unstyled">
              <li><a href="https://github.com/julian-gamboa-bahia" class="text-white">Github</a></li>
              <li><a href="https://github.com/julian-gamboa-ensino" class="text-white">Github Eduativo</a></li>
              <li><a href="https://www.linkedin.com/in/julian-gamboa-bahia/" class="text-white">Linkeind</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark box-shadow">
      <div class="container d-flex justify-content-between">
<a href="" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
</header>

<!--END Header do Boostrap--------->          
<main role="main">
<div class="album py-5 bg-light">
<div class="container">          
<!--ROW. Inicio---------> 
<div class="row">
<!--Elemento da Matriz---------> 
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->
<img :src="ImagenFECTH[indiceImagenFECTH]" id="imagem-3" class="card-img-top" alt="Image 3" style="height: 225px; width: 100%; display: block;"   >          
</div>
</div>
<!--COL------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->
<img :src="ImagenFECTH[indiceImagenFECTH+1]" id="imagem-3" class="card-img-top" alt="Image 3" style="height: 225px; width: 100%; display: block;"   >          
  
</div>
</div>
<!--END: COL. ------>      
<!--COL. ------>           
<div class="col-md-4">
<div class="card mb-4 box-shadow">
<!--Image--------->
<img :src="ImagenFECTH[indiceImagenFECTH+2]" id="imagem-3" class="card-img-top" alt="Image 3" style="height: 225px; width: 100%; display: block;"   >          
  </div>
</div>
</div>
<!--END: COL. ------>      
</div>  
<!--END: ROW. ------>


<!--ROW. Inicio---------> 


</div>
</main>

  <footer class="text-muted">
    <div class="container">

      <p>Colocado no meu <a href="https://github.com/julian-gamboa-ensino/julian-gamboa-ensino.github.io/tree/aws-lambda-sam-cli/abril-2023-fonte">Github de ensino</a> </p>                        
    </div>
  </footer>



</template>


<script>
</script>

