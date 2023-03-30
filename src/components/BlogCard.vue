<template>
  <div class="card elevation-4 my-3">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ blog?.title }}</h5>
        <p class="card-text">{{ blog.body }}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-end" alt="...">
    </div>
  </div>
</div>

</template>


<script>
import { Blog } from "../models/Blog.js";


export default {
  props: {
    blog: {
      type: Blog, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>