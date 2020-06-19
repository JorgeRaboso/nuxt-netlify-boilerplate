const state = () => ({
    blogPosts: [],
    categories: []
})

const getters = {
    getPostByCategory: state => category => state.blogPosts.filter(post => post.category === category)
}

const mutations = {
    setBlogPosts (state, list) {
        state.blogPosts = list
    },
    setBlogCategories (state, list) {
        state.categories = list
    }
}

const actions = {
    async nuxtServerInit ({ commit }) {
        const files = await require.context('~/assets/content/blog/', false, /\.json$/)
        const blogPosts = files.keys().map(key => {
            const res = files(key)
            res.slug = key.slice(2, -5)
            return res
        })
        const categories = await require.context('~/assets/content/categories/', false, /\.json$/)
        const blogCategories = categories.keys().map(key => {
            const res = categories(key)
            res.slug = key.slice(2, -5)
            return res
        })

        await commit('setBlogPosts', blogPosts)
        await commit('setBlogCategories', blogCategories)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
