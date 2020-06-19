export const state = () => ({
    blogPosts: [],
    filters: [],
    categories: [],
    PostsTimeline: [],
    activeTheme: false,
    postsLayoutTheme: false
})

export const getters = {
    getLastPostOrderedByDate: state => {
        return state.blogPosts.filter(post => post.date).sort(function (a, b) {
            return new Date(a.date) - new Date(b.date)
        }).reverse()
    },
    getAllCategory: state => {
        const uniqueCategorys = Array.from(new Set(state.blogPosts.map(post => post.category)))
        return uniqueCategorys
    },
    getPostByCategory: (state, getters) => (category) => {
        return state.blogPosts.filter(post => post.category === category)
    }
}

export const mutations = {
    setBlogPosts (state, list) {
        state.blogPosts = list
    },
    setBlogCategories (state, list) {
        console.log(list)
        state.categories = list
    },
    setTypeOfFilters (list) {
        console.log(list)
        state.filters = list.filter(post => {
            return post.category
        })
        return state.filters
    },

    setTheme (state) {
        state.activeTheme = !state.activeTheme
        document.body.classList.toggle('dark-mode', state.activeTheme)
    }
    /*
  setPostTimeline(state, list) {

    let a = list.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    })
    state.PostsTimeline = a
  } */

}

export const actions = {
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
