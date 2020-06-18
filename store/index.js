export const state = () => ({
    blogPosts: [],
    PostsTimeline: [],
    activeTheme: false,
    postsLayoutTheme: false
})

export const getters = {
    getLastPostOrderedByDate: state => {
        return state.blogPosts.filter(post => post.date).sort(function (a, b) {
            return new Date(a.date) - new Date(b.date)
        }).reverse()
    }
}

export const mutations = {
    setBlogPosts (state, list) {
        state.blogPosts = list
    },
    setPostsLayout (state) {

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
        await commit('setBlogPosts', blogPosts)
    // await commit('setPostTimeline', blogPosts);
    }
}
