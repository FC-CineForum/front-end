<template>
    <div>
        <div class="m-0 mt-4 container-fluid row d-flex justify-content-center">
            <div class="col-8 col-md-7  col-lg-3">
                <img :src="info.poster" alt="poster">
            </div>
            <div class="col-8 col-md-7 col-lg-7 d-flex flex-column">
                <div class="d-flex flex-row justify-content-between">
                    <h1 class="h1"><span class="fw-bold">{{info.title}}</span> <span class="fw-light">({{info.year}})</span></h1>
                    <div class="pointer">
                         <router-link to="/entry/reviews/new"><i class="fas fa-plus fa-2x text-white rounded-circle p-2" style="background:var(--color-background-main)"></i></router-link>
                    </div>
                </div>
                <h2 class="fw-normal">{{info.reviewsQuantity}} Reseñas</h2>
            </div>
        </div>
        <div class="container-fluid mt-4">
            <Review v-for="review in info.reviews" :review="review" class="mb-4"/>
        </div>
    </div>
</template>

<script setup>
import Review from "@/components/Review.vue"

const getEntryInfo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    title: "The batman",
    year:2002,
    poster:
      "https://static.posters.cz/image/1300/posters/the-batman-2022-i122127.jpg",
    trailer: "https://www.youtube.com/embed/fWQrd6cwJ0A",
    rating: "4.2",
    reviewsQuantity:532,
    reviews:[
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user:'Lorem Ipsum',rate:3},
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user:'Lorem Ipsum',rate:3},
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user:'Lorem Ipsum',rate:3},
        {content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user:'Lorem Ipsum',rate:3},
    ]
  };
};

const info = await getEntryInfo();
</script>

<style scoped>
h1 {
  font-size: 3rem;
}

img {
  width: 100%;
  height: auto;
}


</style>