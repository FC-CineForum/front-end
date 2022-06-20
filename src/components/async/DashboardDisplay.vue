<template>
    <div>
        <div class="my-3 container-fluid d-flex justify-content-end">
            <div class="p-2 border border-dark rounded-pill d-flex justify-between">
                <div>
                    <i class="fas fa-search"></i>
                    <Input type="text" v-model:value="search" />
                </div>
                <div class="pointer" v-if="search">
                    <i  @click="search = '' " class="fas fa-times"></i>
                </div>
            </div>
        </div>
        <h1>Nuevas Entradas</h1>
        <div class="mt-5 mb-5  overflow-auto" style="white-space: nowrap;">
            <Entry class="me-3 d-inline-block" v-for="entry in entries" :entry="entry" />
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import Entry from "@/components/Entry.vue";
import Input from "@/components/forms/Input.vue";
import { useDashboardStore } from "@/stores/dashboard.js";
import entryServices from "@/services/entry.js";

const search = ref("");

const dashboard = useDashboardStore();

const entries = reactive([])

watch(search,async (newQuestion) => {
    entries.splice(0,entries.length)
    if(newQuestion.length  === 0){
        await fetchDashboard();
    }else{
        const data = await entryServices.findEntryByTitle({name:newQuestion});
        data.forEach(entry => {
            entries.push(entry);
        });
    }
} )

const fetchDashboard = async () => {
    entries.splice(0, entries.length);
    let data;
    if(dashboard.entries.length >= 1){
       data = dashboard.entries;
    }else{
        try {
        data = await dashboard.fetchDashboard();
        }catch (e) {
            alert(e);
        }
    }
    data.forEach(entry => {
            entries.push(entry);
        });
};

 await fetchDashboard();

</script>
