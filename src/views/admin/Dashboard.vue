<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <div class="admin">
    <h1>Menú de Administrador</h1>

    <form action="/admin/entries">
        <input type="submit" class="opciones" value="Administrador de Entrada"/>
    </form>
    <form action="/admin/users">
      <input type="submit" class="opciones" value="Administrador de Usuarios"/>
    </form>
    <form action="/admin/posts">
      <input type="submit" class="opciones" value="Administrador de Publicaciones"/>
    </form>
    <form action="/.">
      <input type="submit" class="opciones" value="Menú principal"/>
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

  body {
    background-color: #a4c1dde4;
  }

  h1 {
      font-size: 1.5cm;
      color : #083F6D;
      text-align: center;
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
  }

  .admin {
    text-align: center;
  }
  
  .column {
      float:left;
      width: 50%
  }

  .row:after{
    display: table;
    clear: both;
    content: "";
  }
}
</style>
