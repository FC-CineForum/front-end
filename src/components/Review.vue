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
            <div v-if="user">
              <div v-if="!interactionGiven.value">
                  <i @click="submitInteraction(true)" class="far fa-thumbs-up fa-2x me-3 action pointer"></i>
                   <i @click="submitInteraction(false)" class="far fa-thumbs-down fa-2x reflection highlight me-3 pointer"></i>
              </div>
              <div v-else-if="interactionGiven.type === 'like' ">
                  <i @click="deleteInteraction" class="fas fa-thumbs-up fa-2x me-3 action pointer"></i>
              </div>
              <div v-else>
                   <i @click="deleteInteraction" class="fas fa-thumbs-down fa-2x me-3 reflection highlight pointer"></i>
              </div>
            </div> 
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
      <CustomTextArea @keypress="submitReply" :id="id" class="border-bottom border-dark px-3" v-model:value="reply"/>
    </div>
  </div>
</template>

<script setup>
import ClapperBoard from "@/components/icons/solids/ClapperBoard.vue";
import CustomTextArea from "@/components/forms/TextArea.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import { onBeforeMount, reactive, ref } from "vue";
import services from "@/services/user.js";

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

const interactionGiven = reactive({
  value: false,
  type: "",
});

onBeforeMount(async ()=>{
 if(auth.user){
    const data = await services.getLike(review.ratingId, auth.user.username);
    interactionGiven.value = data.message === 'missing interaction' ? false : true;
    if (interactionGiven.value) {
      interactionGiven.type = data.message.includes('true') ? "like" : "dislike";
    }
 }
});

const setCommentFocus = ()=>{
  const textarea = document.getElementById(id.value);
  textarea.focus();
}

const submitReply = async (event)=>{
  if(event.keyCode === 13 && reply.value.replaceAll(' ', '').replaceAll(/(\r\n|\n|\r)/gm, "").length>0){
    event.preventDefault();
    event.stopPropagation();
    const replyInfo = {
      message: reply.value,
      username: auth.user.username,
    }
    try {
      await services.addReply(review.ratingId, replyInfo);
      reply.value = "";
      review.replies.push(replyInfo);
    } catch (error) {
      alert(error.message);
    }

  }
}

const submitInteraction = async (type)=>{
  if(!interactionGiven.value){
    try {
      await services.addInteraction(review.ratingId,{username: auth.user.username, isLike: type});
      interactionGiven.value = true;
      interactionGiven.type = type? "like" : "dislike";
    } catch (error) {
      alert(error.message);
    }
  }
}


const deleteInteraction = async ()=>{
  if(interactionGiven.value){
    try {
      await services.deleteInteraction(review.ratingId,{username: auth.user.username});
      interactionGiven.value = false;
      interactionGiven.type = "";
    } catch (error) {
      alert(error.message);
    }
  }
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
