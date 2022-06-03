export default [
    {
        path:":id",
        name:"Entry",
        component:()=> import("@/views/user/entry/EntryView.vue")
    },
    {
        path:"reviews",
        name:"EntryReview",
        component:()=> import("@/views/user/entry/EntryReviews.vue"),
    },
    {
        path:"reviews/new",
        name:"EntryReviewNew",
        meta:{requiresAuth:true},
        component:()=> import("@/views/user/entry/MakeReview.vue"),
    }
]
