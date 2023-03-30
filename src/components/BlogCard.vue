<template>
  <router-link :to="{name: 'Blog', params: {blogId: blog.id}}">
  <div @click="setActive(blog?.id)" class="text-dark card elevation-4 my-3">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex pb-3">
            <img class="profile-img me-3" :src="blog.creator.picture" alt="" />
            <h4>{{ blog?.creator?.name }}</h4>
          </div>
          <h5 class="card-title">{{ blog?.title }}</h5>
          <!-- <p class="card-text">{{ blog?.body }}</p> -->
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
  </router-link>
</template>

<script>
import { Blog } from "../models/Blog.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";

export default {
  props: {
    blog: {
      type: Blog,
      required: true,
    },
  },
  setup() {
    return {
      setActive(blogId) {
        try {
          blogsService.setActive(blogId);
        } catch (error) {
          logger.log(error.message);
          Pop.error(error.message);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-img {
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
}
.card:hover {
  transform: scale(1.02);
}
</style>
