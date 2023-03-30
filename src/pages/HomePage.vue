<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-10"></div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js'
import { blogsService } from '../services/BlogsService';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getBlogs() {
      // logger.log('getting blogs')
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error.message)
        logger.log(error.message)
      }
    }
    onMounted(() => getBlogs())
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
  
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
