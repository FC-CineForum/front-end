<script setup>
import Header from "@/components/Header.vue";
import { ref, computed, reactive } from "vue";
import useValidate from "@vuelidate/core";
import { required, url, minLength, maxLength, integer } from "@vuelidate/validators";
import CustomInput from "../../components/forms/Input.vue";
import CustomButton from "../../components/forms/Button.vue";

const mine = async () => {
  alert('Esto debería minar!')
  await vMine$.value.$validate();
  if (vMine$.value.$error) {
    alert("Debe ser un url de IMDB!");
    return;
  }
  try {
    alert('Está minando!')
  } catch (err) {
    alert(err);
  }
};

const add = async () => {
  alert('Esto debería agregar una película!')
  await vAdd$.value.$validate();
  if (vAdd$.value.$error) {
    alert("Deben ser válidos todos los campos!");
    return;
  }
  try {
    alert('Se agregó la película!')
  } catch (err) {
    alert(err);
  }
};

const mineState = reactive({
  url: '',
});

const addState = reactive({
  title: '',
  synopsis: '',
  image: '',
  releaseDate: '',
  classification: '',
  trailer: '',
  duration: ''
});

const mineRules = computed(() => {
  return {
    url: { required , url }
  };
});

const addRules = computed(() => {
  return {
    title: { required },
    synopsis: { required },
    image: { required , url },
    releaseDate: { required , integer, minLength: minLength(4), maxLength: maxLength(4) },
    classification: { required },
    trailer: { required , url },
    duration: { required , integer , maxLength: maxLength(10)}
  };
});

const vMine$ = useValidate(mineRules, mineState);
const vAdd$ = useValidate(addRules, addState);

</script>

<template>
<Header/>
<div class="fields">
<div>
    <h1>Minar de IMDB</h1>
    <br>
    <br>
    <label for="title" class="tag">Minar de IMDB</label>&nbsp
    <CustomInput 
      v-model:value="mineState.url"
      placeholder="URL de IMDB"
    />
    <p v-if="vMine$.url.$error" class="text-danger text-center">
      Asegúrate de que el URL sea válido.
    </p>
    <br>
    <br>
    <CustomButton class="rounded fw-bold fs-3" @click="mine">
        Minar
    </CustomButton>
    <br>
    <br>
    <br>
    <br>
</div>
<div>
  <h1>Agregar Manualmente</h1>
  <br>
  <br>
  <label for="title" class="tag">Título</label>&nbsp
  <CustomInput 
    v-model:value="addState.title"
    placeholder="Título de la Película"
  />
  <p v-if="vAdd$.title.$error" class="text-danger text-center">
    La película debe tener un título.
  </p>
  <br>
  <br>
  <label for="title" class="tag">Sinopsis</label>&nbsp
  <CustomInput 
    v-model:value="addState.synopsis"
    placeholder="Sinopsis"
  />
  <p v-if="vAdd$.synopsis.$error" class="text-danger text-center">
    La película debe tener una sinopsis.
  </p>
  <br>
  <br>
  <label for="title" class="tag">Imagen</label>&nbsp
  <CustomInput 
    v-model:value="addState.image"
    placeholder="Imagen"
  />
  <p v-if="vAdd$.image.$error" class="text-danger text-center">
    Debe ser un url de imagen válido.
  </p>
  <br>
  <br>
  <label for="title" class="tag">Año Lanzamiento</label>&nbsp
  <CustomInput 
    v-model:value="addState.releaseDate"
    placeholder="Año de Lanzamiento"
  />
  <p v-if="vAdd$.releaseDate.$error" class="text-danger text-center">
    Debe ser un año de cuatro dígitos.
  </p>
  <br>
  <br>
  <label for="title" class="tag">Clasificación</label>&nbsp
  <CustomInput 
    v-model:value="addState.classification"
    placeholder="Classificación"
  />
  <p v-if="vAdd$.classification.$error" class="text-danger text-center">
    Debe ser una clasificación válida.
  </p>
  <br>
  <br>
  <label for="title" class="tag">Tráiler</label>&nbsp
  <CustomInput 
    v-model:value="addState.trailer"
    placeholder="Tráiler"
  />
  <p v-if="vAdd$.trailer.$error" class="text-danger text-center">
    Debe ser un url del tráiler válido.
  </p>
  <br>
  <br>
  <label for="title" class="tag">Duración</label>&nbsp
  <CustomInput 
    v-model:value="addState.duration"
    placeholder="Duración"
  />
  <p v-if="vAdd$.duration.$error" class="text-danger text-center">
    Debe ser un entero con el total de minutos.
  </p>
  <br>
  <br>
  <CustomButton class="rounded fw-bold fs-3" @click="add">
      Agregar
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
      text-align: center;
  }
}
</style>