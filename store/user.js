export const state=()=>({
  //采用接口返回数据结构
  userInfo:{
    tokenn:"",
    user:{ }
  }
})

export const mutations={
  //保存用户数据到state
  setUserInfo(state,data){
    state.userInfo=data
  },
  cleanUserInfo(state,info){
    if(process.browser){
      localStorage.removeItem("userInfo")
    }
    state.userInfo={}
  }
};



export const actions = { 
    // 登录
    login({commit}, data){
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data: data
        }).then(res => {
            const data = res.data;
            // 保存到state
            commit("setUserInfo", data);
            return data;
        })
    }
};