<script setup>
import Header from "@/components/Header.vue";
import { ref, computed, reactive } from "vue";
import useValidate from "@vuelidate/core";
import { required, integer } from "@vuelidate/validators";
import CustomInput from "../../components/forms/Input.vue";
import CustomButton from "../../components/forms/Button.vue";
import userServices from '@/services/user.js'

const deleteValoration = async () => {
  alert('Esto debería eliminar la valoración!')
  await v$.value.$validate();
  if (v$.value.$error) {
    alert("Debe ser un usuario válido!");
    return;
  }
  try {
//    userServices.deleteValoration(state.id);
    alert('Usuario eliminado!')
  } catch (err) {
    alert(err);
  }
};

const deleteComment = async () => {
  alert('Esto debe hacer admin al usuario')
  await v$.value.$validate();
  if (v$.value.$error)
    alert('Debe ser un usuario válido!');
  else
    try {
      //userServices.deleteComment(state.id);
      alert('El usuario ahora es admin!');
    } catch (err) {
      alert(err)
    }
};

const valorationState = reactive({
  id: ''
});

const commentState = reactive({
  id: ''
});

const valorationRules = computed(() => {
  return {
    id: { required, integer }
  };
});

const commentRules = computed(() => {
  return {
    id: { required, integer }
  };
});

const vValoration$ = useValidate(valorationRules, valorationState);
const vComment$ = useValidate(commentRules, commentState);

</script>

<template>
<Header/>
<div class="fields">
<div>
  <h1>Eliminar Valoración</h1>
  <br>
  <br>
  <label for="title" class="tag">ID de Valoración</label>&nbsp
  <CustomInput
    class="campo"
    v-model:value="valorationState.id"
    placeholder="ID de la Valoración"
  />
  <p v-if="vValoration$.id.$error" class="text-danger text-center">
    Asegúrate de que sea un ID válido.
  </p>
  <br>
  <br>
  <CustomButton class="rounded fw-bold fs-3" @click="deleteValoration">
    Eliminar
  </CustomButton>
  <br>
  <br>
  <br>
  <br>
  <h1>Eliminar Comentario</h1>
  <br>
  <br>
  <label for="title" class="tag">ID de Comentario</label>&nbsp
  <CustomInput
    class="campo"
    v-model:value="commentState.id"
    placeholder="ID de el Comentario"
  />
  <p v-if="vComment$.id.$error" class="text-danger text-center">
    Asegúrate de que sea un ID válido.
  </p>
  <br>
  <br>
  <CustomButton class="rounded fw-bold fs-3" @click="deleteComment">
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