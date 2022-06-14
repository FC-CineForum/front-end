export default [
    {
        path:"",
        name:"Admin",
        component: ()=> import("@/views/admin/Dashboard.vue")
    },
    {
        path:"entries",
        name:"Entries",
        component: ()=> import("@/views/admin/Entries.vue")
    },
    {
        path:"users",
        name:"Users",
        component: ()=> import("@/views/admin/UsersAdmin.vue")
    },
    {
        path:"posts",
        name:"Posts",
        component: ()=> import("@/views/admin/PostAdmin.vue")
    },
    {
        path:"entries/add",
        name:"Add-entry",
        component: ()=> import("@/views/admin/AddEntry.vue")
    },
    {
        path:"entries/delete",
        name:"Delete-entry",
        component: ()=> import("@/views/admin/DeleteEntry.vue")
    },
    {
        path:"entries/modify",
        name:"Modify-entry",
        component: ()=> import("@/views/admin/AlterEntry.vue")
    }
]