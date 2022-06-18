<script setup>
import Header from "@/components/Header.vue";
import { ref, computed, reactive } from "vue";
import useValidate from "@vuelidate/core";
import { required, integer } from "@vuelidate/validators";
import CustomInput from "../../components/forms/Input.vue";
import CustomButton from "../../components/forms/Button.vue";
import entryServices from "../../services/entry.js";

const state = reactive({
  id: ''
});

const rules = computed(() => {
  return {
    id: { required, integer }
  };
});

const v$ = useValidate(rules, state);

const deleteEntry = async() => {
  alert('Esto debería eliminar el entrada!')
  await v$.value.$validate();
  if (v$.value.$error) {
    alert('Debe ser un ID válido de entrada!');
    return;
  }
  try {
    entryServices.deleteEntryById(state.id);
    alert('Entrada eliminada!');
  } catch (err) {
    alert(err);
  }
}

</script>

<template>

<Header/>
<div class="fields">
<div>
  <h1>Eliminar una Entrada</h1>
  <br>
  <br>
  <label for="title" class="tag">ID Entrada</label>&nbsp
  <CustomInput
    class="campo"
    v-model:value="state.id"
    placeholder="ID de la entrada"
  />
  <p v-if="v$.id.$error" class="text-danger text-center">
    Asegúrate de que sea un ID válido.
  </p>
  <br>
  <br>
  <br>
  <br>
  <CustomButton class="rounded fw-bold fs-3" @click="deleteEntry">
    Eliminar
  </CustomButton>
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

  body {
    background-color: #a4c1dde4;
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
      background-color: #e6f3ffe4;
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
      text-align: center;
  }
}

</style>