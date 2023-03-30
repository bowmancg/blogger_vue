import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "../models/Blog.js"

class BlogsService {

    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log('[GET BLOGS]', res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
        logger.log('appstate blog', AppState.blogs)
    }

    setActive(blogId) {
        const blog = AppState.blogs.find(b => b.id == blogId)
        AppState.blog = blog
        logger.log(AppState.blog)
    }

    async getBlogById(blogId) {
        const res = await api.get(`api/blogs/${blogId}`)
        logger.log('[GET ID]', res.data)
        AppState.blog = new Blog(res.data)
    }
}

export const blogsService = new BlogsService()