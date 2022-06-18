<script setup>
import Header from "@/components/Header.vue";
import { ref, computed, reactive } from "vue";
import useValidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import CustomInput from "../../components/forms/Input.vue";
import CustomButton from "../../components/forms/Button.vue";

const deleteUser = async () => {
  alert('Esto debería eliminar al usuario!')
  await v$.value.$validate();
  if (v$.value.$error) {
    alert("Debe ser un usuario válido!");
    return;
  }
  try {
    alert('Usuario eliminado!')
  } catch (err) {
    alert(err);
  }
};

const makeAdmin = async () => {
  alert('Esto debe hacer admin al usuario')
  await v$.value.$validate();
  if (v$.value.$error)
    alert('Debe ser un usuario válido!');
  else
    try {
      alert('El usuario ahora es admin!');
    } catch (err) {
      alert(err)
    }
};

const removeAdmin = async () => {
  alert('Esto debe quitar la administración a un usuario')
  await v$.value.$validate();
  if (v$.value.$error)
    alert('Debe ser un usuario válido!');
  else
    try {
      alert('El usuario ya no es admin!');
    } catch (err) {
      alert(err)
    }
};

const state = reactive({
  user: ''
});

const rules = computed(() => {
  return {
    user: { required, minLength: minLength(8), maxLength: maxLength(25)}
  };
});

const v$ = useValidate(rules, state);

</script>

<template>
<Header/>
<div class="fields">
<div>
  <h1>Administrador de Usuarios</h1>
  <br>
  <br>
  <label for="title" class="tag">Usuario</label>&nbsp
  <CustomInput
    class="campo"
    v-model:value="state.user"
    placeholder="Nombre de Usuario"
  />
  <p v-if="v$.user.$error" class="text-danger text-center">
    Asegúrate de que sea un usuario válido.
  </p>
  <br>
  <br>
  <br>
  <br>
  <CustomButton class="rounded fw-bold fs-3" @click="deleteUser">
    Eliminar
  </CustomButton>
  &nbsp  
  <CustomButton class="rounded fw-bold fs-3" @click="makeAdmin">
    Hacer Admin
  </CustomButton>
  &nbsp  
  <CustomButton class="rounded fw-bold fs-3" @click="removeAdmin">
    Quitar Admin
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