<script setup>
import { reactive } from "vue";
import Header from "@/components/Header.vue";
</script>

<template>
<Header/>
<div class="center">
    <h1>Administrador de Entradas</h1>

    <form action="/admin/entries/add">
        <input type="submit" class="opciones" value="Añadir una Película"/>
    </form>
    <form action="/admin/entries/delete">
        <input type="submit" class="opciones" value="Eliminar una Entrada"/>
    </form>
    <form action="/admin/entries/modify">
        <input type="submit" class="opciones" value="Modificar una Entrada"/>
    </form>
    <form action="/admin">
        <input type="submit" class="opciones" value="Menú Admin"/>
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

  h1 {
      font-size: 2cm;
      color : #083F6D;
      text-align: center;
      border-width: 1cm;
  }

  .opciones{
      background-color: #083F6D;
      color: white;
      width: 18cm;
      height: 5cm;
      font-size: 1cm;
      border-width: 1cm;
      border-color: black;
      text-align: center;
      align-items: center;
  }

  .center {
      border: 5px solid #083F6D;
      display: flexbox;
      justify-content: center;
      text-align: center;
      background-color: rgb(140, 190, 202)
  }
}
</style>