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

function sortDate(a,b) {
  return new Date(b.date) - new Date(a.date);
}

export const state = () => ({
  blogPosts: [],
  PostsTimeline: []
});


export const getters = {
  getLastPostOrderedByDate: state =>  {
    return state.blogPosts.filter(post => post.date).sort(function(a, b) {
      new Date(a.date) - new Date(b.date);
    }).reverse();
  }
}

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  }
   /*
  setPostTimeline(state, list) {

    let a = list.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    })
    state.PostsTimeline = a
  }*/

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
    //await commit('setPostTimeline', blogPosts);
  }
};
