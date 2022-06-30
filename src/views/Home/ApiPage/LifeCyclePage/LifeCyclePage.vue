<script lang="ts">
import { getLifeCycleDataService } from "@/service/LifeCycleService";
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
    name: 'LifeCyclePage',

    setup() {
        // const lifecycleImg = ref()


        onMounted(() => {
            try {
                getLifeCycleDataService({}).then(res => {

                })
            } catch (error) {
                console.log('error', error)
            }
        })
    }
})
</script>

<template>
    <div class="page-container">
        <h1>生命周期图</h1>
        <img src="@/static/lifecycle.png" alt="" class="lifecycle-img">
    </div>
</template>

<style scoped>
@import './index.css';
</style>