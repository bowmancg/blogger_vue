<template>
    <div class="container-fluid">
        <section class="row pt-3">
            <div class="col-9 text-center">
                <img :src="profile?.coverImg" :alt="profile?.name">
            </div>
        </section>

    </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { computed, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import { profilesService } from '../services/ProfilesService.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';

export default {
    setup(){
        const route = useRoute()

        async function getProfileById() {
            try {
                const profileId = route.params.profileId
                await profilesService.getProfileById(profileId)
            } catch (error) {
                logger.log(error.message)
                Pop.error(error.message)
            }
        }
        onMounted(() => {
            getProfileById()
        })
    return {
        route,
        profile: computed(() => AppState.activeProfile)
    }
    }
};
</script>


<style lang="scss" scoped>

</style>