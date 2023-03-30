import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log('[GET BLOGS]', res.data)
        // AppState.blogs
    }
}

export const blogsService = new BlogsService()