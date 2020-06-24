const state = () => ({
    view: 'list'
})

const getters = {
    getView: state => state.view
}

const mutations = {
    setView (state, newView) {
        console.log(state.view)
        state.view = newView
    }
}

export default {
    state,
    getters,
    mutations
}
