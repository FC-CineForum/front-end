<template>
  <div class="d-flex flex-column border border-dark">
    <div class="px-3 py-2 flex-grow-1 border-bottom border-dark">
      <p class="text-end"><i class="fas fa-ellipsis-h fa-lg"></i></p>
      <p>{{ review.message }}</p>
    </div>
    <div class="actions px-3 py-2 d-flex flex-row justify-content-between border-bottom border-dark">
      <div class="d-flex flex-row align-items-center">
          <div class="me-2">
              <img v-if="review.avatar" :src="review.avatar" :alt="review.username" />
                <i
                 v-else
                class="p-2 fas fa-user fa-2x bg-secondary text-white rounded-circle"
                 ></i>
          </div>
        <p class="fw-bold user mb-0 action">{{review.username}}</p>
        </div>
        <div class="d-flex flex-row align-items-center">
            <i class="fas fa-review-alt fa-2x me-2"></i>
            <p v-if="user" class="mb-0 action pointer" @click="setCommentFocus">Comentar</p>
        </div>
        <div class="d-flex flex-row align-items-center">
            <div v-if="user" >
              <i class="far fa-thumbs-up fa-2x me-3 action pointer"></i>
              <i class="far fa-thumbs-down fa-2x reflection highlight me-3 pointer"></i></div> 
            <ClapperBoard class="me-2" />
            <p class="fw-bold mb-0 fs-5">{{review.stars}}/5</p>
        </div>
    </div>
    <div v-if="review.replies.length>0" class="p-4 reply-container">
      <div v-for="reply in review.replies" class="d-flex flex-row mb-4">
        <div class="me-2">
          <img v-if="reply.avatar" :src="reply.avatar" :alt="reply.username" />
          <i
            v-else
            class="p-2 fas fa-user fa-2x bg-secondary text-white rounded-circle"
          ></i>
          </div>
          <div class="container-fluid border rounded p-2 d-flex flex-column">
            <i class="action">{{reply.username}}</i>
            <p>{{reply.message}}</p>
          </div>
      </div>
    </div>
    <div v-if="user" class="px-3 py-2 d-flex flex-row  border-top border-dark">
      <div>
        <i class="p-2 fas fa-user fa-2x bg-secondary text-white rounded-circle"></i>
      </div>
      <CustomTextArea :id="id" class="border-bottom border-dark px-3" :value="reply" placeholder="" />
    </div>
  </div>
</template>

<script setup>
import ClapperBoard from "@/components/icons/solids/ClapperBoard.vue";
import CustomTextArea from "@/components/forms/TextArea.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import { ref } from "vue";
const { review } = defineProps({
  review: {
    type: Object,
    required: true,
  },
});

const id = ref(`review-comment-${review.ratingId}`);

const auth = useAuthStore();

const { user } = storeToRefs(auth);

const reply = ref("")

const setCommentFocus = ()=>{
  const textarea = document.getElementById(id);
  textarea.focus();
}



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

.reply-container{
  height: 200px;
  overflow: scroll;
}

</style>
