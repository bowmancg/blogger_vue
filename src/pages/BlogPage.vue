<template>
    <header>
        <Navbar />
    </header>
<div class="container-fluid">

</div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';

export default {
    setup() {
const route = useRoute()

// async function getBlogsById() {
//     try {
//         const blogId = route.params.blogId
//         await blogsService.getBlogById(blogId)
//     } catch (error) {
//         logger.error(error.message)
//         Pop.error(error.message)
//     }
// }
        return {

        }
    }
}
</script>

<style>

</style>