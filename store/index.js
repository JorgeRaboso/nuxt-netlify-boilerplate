function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }
  }
}

export const state = () => ({
  blogPosts: [],
  PostsTimeline: []
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setPostTimeline(state, list) {
    console.log('set post timeline')
    let a = list.sort(dynamicSort("title"));
    console.log(a)
    let filtered = list.filter(post => {

    })
    state.PostsTimeline = list
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context('~/assets/content/blog/', false, /\.json$/);
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setBlogPosts', blogPosts);
    commit('setPostTimeline', blogPosts)
  },
};
