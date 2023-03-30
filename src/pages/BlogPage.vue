<template>
<div class="container-fluid">
<section class="row justify-content-center">
<div class="col-7">
<div class="text-dark card elevation-4 my-3">
    <div class="row g-0">
      <div class="col">
        <div class="card-body">
          <div class="d-flex pb-3 align-items-center">
            <!-- <router-link> -->
            <img class="profile-img me-3" :src="blog?.creator?.picture" alt="" />
            <h4>{{ blog?.creator?.name }}</h4>
            <!-- </router-link> -->
          </div>
<img :src="blog?.imgUrl" class="img-card rounded mb-3" alt="..." />
          
          <h5 class="card-title">{{ blog?.title }}</h5>
          <p class="card-text">{{ blog?.body }}</p>
          <p class="card-text">Created: 
            <small class="text-body-secondary">{{ blog?.createdAt }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

</div>
</template>

<script>
import { Blog } from '../models/Blog.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';

export default {
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
          blog: computed(() => AppState.blog)
        }
    }
}
</script>

<style lang="scss" scoped> 
.profile-img {
  height: 7vh;
  width: 7vh;
  border-radius: 50%;
}
.img-card {
  height: 30vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

</style>