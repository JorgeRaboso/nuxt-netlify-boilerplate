import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            key: 'vueeex',
            paths: ['postView.view'],
            storage: window.localStorage,
            reducer: state => ({ view: state.postView })
        }).plugin(store)
    })
}

/*
export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            key: '__vuex'
        }).plugin(store)
    })
}

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'vueeex',
        paths: ['view']

    })(store)
}
*/
