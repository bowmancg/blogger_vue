<template>
<div class="container-fluid">
<section class="row">

 <div class="text-dark card elevation-4 my-3">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex pb-3">
            <img class="profile-img me-3" :src="blog?.creator?.picture" alt="" />
            <h4>{{ blog?.creator?.name }}</h4>
          </div>
          <h5 class="card-title">{{ blog?.title }}</h5>
          <p class="card-text">{{ blog?.body }}</p>
          <p class="card-text">
            <small class="text-body-secondary">{{ blog?.createdAt }}</small>
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <img :src="blog?.imgUrl" class="img-fluid rounded-end" alt="..." />
      </div>
    </div>
  </div>
</section>

</div>
</template>

<script>
import { Blog } from '../models/Blog.js';
import { computed, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js'
import { blogsService } from '../services/BlogsService.js';

export default {
    props: {
    blog: {
      type: Blog,
      required: true,
    },
    setup() {
const route = useRoute()

        // async function getProfileById() {
        //     try {
        //         const profileId = route.params.profileId
        //         await profilesService.getProfileById(profileId)
        //     } catch (error) {
        //         logger.log(error.message)
        //         Pop.toast(error.message, 'error')
        //     }
        // }

        async function getBlogById() {
            try {
                const blogId = route.params.blogId
                await blogsService.getBlogById(blogId)
            } catch (error) {
                logger.log(error.message)
                Pop.toast(error.message, 'error')
            }
        }
        onMounted(() => {
            // getProfileById()
            getBlogById()
        })
        return {
            route,
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.activeBlog)
        }
    }
}}
</script>

<style>

</style>