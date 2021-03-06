export default [
    {
        path:":id",
        name:"Entry",
        component:()=> import("@/views/user/entry/EntryView.vue")
    },
    {
        path:"reviews/:id",
        name:"EntryReview",
        component:()=> import("@/views/user/entry/EntryReviews.vue"),
    },
    {
        path:"reviews/new/:id",
        name:"EntryReviewNew",
        meta:{requiresAuth:true},
        component:()=> import("@/views/user/entry/MakeReview.vue"),
    }
]
