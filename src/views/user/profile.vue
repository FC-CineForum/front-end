<template>
    <Header />
    <Modal v-model:show="showModal">
        <div>
            <h1>Titulo de la lista</h1>
            <CustomInput class="border rounded container p-2" type="text" v-model:value="listName" />
            <h1>Descripción</h1>
            <CustomTextArea class="border rounded container p-2" type="text" v-model:value="listDescription" />
            <div>
                <CustomInput v-model:value="isPublic" type="checkbox" /> <span>Lista pública</span>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <button class="border rounded-pill px-4 py-2 text-white">Crear</button>
            </div>
        </div>
    </Modal>
    <div class="p-5">
        <div class="d-flex justify-content-around align-items-center">
            <div class="text-white user">
                <i class="fas fa-user fa-6x"></i>
            </div>
            <h1>{{user.username}}</h1>
        </div>
        <div class="pt-4">
            <div class="d-flex justify-content-between align-items">
                <h1>Listas</h1>
                <i  @click="showModal=true" class="fas fa-plus-circle fa-2x pointer"></i>
            </div> 
        </div>

    </div>
    
</template>

<script setup>
import Header from "@/components/Header.vue";
import Modal from "@/components/utilities/Modal.vue";
import CustomInput from "../../components/forms/Input.vue";
import CustomTextArea from "../../components/forms/TextArea.vue";
import { ref } from "vue"
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";

const auth = useAuthStore();

const { user } = storeToRefs(auth);

const showModal = ref(false);

const listName = ref("");

const isPublic = ref(false);

const listDescription = ref("");


</script>

<style scoped>

div{
    color: var(--cf-main);
}

button{
    background-color: var(--cf-main);
}

.user {
  padding: 50px;
  border-radius: 50%;
  background-color: grey;
}

</style>