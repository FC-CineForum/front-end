<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
<Header/>
<div class="fields">
<div>
    <form action="">
<!--        <label for="link-imdb">Minar de iMdb &nbsp</label> -->
        <br>
        <label for="title" class="tag">Minar de IMDB</label>&nbsp
        <input class="campo" placeholder="URL de IMDB"/>
        <br>
        <input type="submit" class="sbmt" value="Minar"/>
    </form>
</div>
<div>
    <form action="">
        <label for="title" class="tag">Título</label>&nbsp
        <input class="campo" placeholder="Título de la película"/>
        <br>
        <br>
        <label for="title" class="tag">Sinopsis</label>&nbsp
        <input class="campo" placeholder="Sinópsis" type='text-area'/>
        <br>
        <br>
        <label for="title" class="tag">Imagen</label>&nbsp
        <input class="campo" placeholder="Imágen"/>
        <br>
        <br>
        <label for="title" class="tag">Año Lanzamiento</label>&nbsp
        <input class="campo" placeholder="Release"/>
        <br>
        <br>
        <label for="title" class="tag">Clasificación</label>&nbsp
        <input class="campo" placeholder="Classificación"/>
        <br>
        <br>
        <label for="title" class="tag">Tráiler</label>&nbsp
        <input class="campo" placeholder="Trailer"/>
        <br>
        <br>
        <label for="title" class="tag">Duración</label>&nbsp
        <input class="campo" placeholder="Duración"/>
        <br>
        <br>
        <input type="submit" class="sbmt" value="Añadir">
    </form>
</div>
</div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .sbmt {
      background-color: #083F6D;
      color: white;
      width: 4cm;
      height: 2cm;
      font-size: 0.7cm;
      border-width: 0.3cm;
      border-color: #083F6D;
      position: relative;
      left: 10cm;
  }

  h1 {
      font-size: 1.5cm;
      color : #083F6D;
      text-align: center;
  }

  .opciones{
      background-color: #083F6D;
      color: white;
      width: 6cm;
      height: 2cm;
      font-size: 0.7cm;
      border-width: 0.3cm;
      border-color: black;
      text-align: center;
  }

  .campo{
      background-color: #a4c1dde4;
      color: rgb(2, 1, 1);
      width: 8cm;
      height: 2cm;
      font-size: 0.7cm;
      border-width: 0.3cm;
      border-color: #083F6D;
      text-align: center;
  }

  .tag {
      background-color: #083F6D;
      color: rgb(255, 255, 255);
      width: 6cm;
      height: 1cm;
      font-size: 0.6cm;
      border-width: 0.3cm;
      border-color: #083F6D;
      text-align: center;
  }

  .fields {
      text-align: center;
  }
}
</style>