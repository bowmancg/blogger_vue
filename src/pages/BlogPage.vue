<template>
<div class="container-fluid">
<section class="row">
    <div class="col-12">
        <h2 class="p-2">Blogs: {{ blogs.title }}</h2>
    </div>
    <div class="col-12 col-md-3 my-3" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
    </div>
</section>
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


        return {

        }
    }
}
</script>

<style>

</style>