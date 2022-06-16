<template>
    <div>
        <h1>Nuevas Entradas</h1>
        <div class="mt-5 mb-5  overflow-auto" style="white-space: nowrap;">
            <Entry class="me-3 d-inline-block" v-for="entry in entries" :entry="entry" />
        </div>
    </div>
</template>

<script setup>
import Entry from "@/components/Entry.vue";
import { useDashboardStore } from "@/stores/dashboard.js";

const dashboard = useDashboardStore();

const fetchDashboard = async () => {
    if(dashboard.entries.length >= 1){
        return dashboard.entries;
    }
    try {
        const data = await dashboard.fetchDashboard();
        return data;
    } catch (e) {
        alert("Parece que algo ha salido mal, por favor visitenos más tarde");
    }
};

const entries = await fetchDashboard();

</script>
