<template>
  <div class="d-flex flex-column border border-dark">
    <div class="px-3 py-2 flex-grow-1 border-bottom border-dark">
      <p class="text-end"><i class="fas fa-ellipsis-h fa-lg"></i></p>
      <p>{{ comment.content }}</p>
    </div>
    <div class="actions px-3 py-2 d-flex flex-row justify-content-between">
      <div class="d-flex flex-row align-items-center">
          <div class="me-2">
              <img v-if="comment.avatar" :src="img" :alt="name" />
                <i
                 v-else
                class="p-2 fas fa-user fa-2x bg-secondary text-white rounded-circle"
                 ></i>
          </div>
        <p class="fw-bold user mb-0 action">{{comment.user}}</p>
        </div>
        <div class="d-flex flex-row align-items-center">
            <i class="fas fa-comment-alt fa-2x me-2"></i>
            <p class="mb-0 action">Comentar</p>
        </div>
        <div class="d-flex flex-row align-items-center">
            <i class="far fa-thumbs-up fa-2x me-3 action pointer"></i>
            <i class="far fa-thumbs-down fa-2x reflection highlight me-3 pointer"></i>
            <ClapperBoard class="me-2" />
            <p class="fw-bold mb-0 fs-5">{{comment.rate}}/5</p>
        </div>
    </div>
    <div v-if="user" class="px-3 py-2 d-flex flex-row  border-top border-dark">
      <div>
        <i class="p-2 fas fa-user fa-2x bg-secondary text-white rounded-circle"></i>
      </div>
      <CustomTextArea class="border-bottom border-dark px-3" :value="message" placeholder="" />
    </div>
  </div>
</template>

<script setup>
import ClapperBoard from "@/components/icons/solids/ClapperBoard.vue";
import CustomTextArea from "@/components/forms/TextArea.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import { ref } from "vue";
defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

const auth = useAuthStore();

const { user } = storeToRefs(auth);

const reply = ref("")

</script>

<style scoped>
svg{
  width: 32px;
  height: 32px;
}

.action{
    color:var(--cf-main);
}
.highlight{
  color: var(--cf-highlight)
}

</style>
