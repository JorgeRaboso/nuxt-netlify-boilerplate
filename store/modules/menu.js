const state = () => ({
    isActive: false
})

const getters = {
    getState: state => state.isActive
}

const mutations = {
    toggleMenu (state) {
        state.isActive = !state.isActive
    }
}

export default {
    state,
    getters,
    mutations
}
