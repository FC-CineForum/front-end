<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
<Header/>
<div class="fields">
    <form action="">
        <br>
        <label for="title" class="tag">id valoración</label>&nbsp
        <input class="campo" placeholder="id valoracion"/>
        <br>
        <br>
        <input type="submit" class="sbmt" value="Eliminar"/>&nbsp
        <br>
        <br>
    </form>
    <form action="">
        <br>
        <label for="title" class="tag">id comentario</label>&nbsp
        <input class="campo" placeholder="id comentario"/>
        <br>
        <br>
        <input type="submit" class="sbmt" value="Eliminar"/>&nbsp
        <br>
        <br>
    </form>
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
      width: 5cm;
      height: 1cm;
      font-size: 0.6cm;
      border-width: 0.3cm;
      border-color: #083F6D;
      text-align: center;
  }

  .fields {
      background-color: #a4c1dde4;
      text-align: center;
  }
}
</style>