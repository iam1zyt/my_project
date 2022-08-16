const base = {
    namespaced:true,
    state:{
        showLoading:false,
        isUsedLoading:true
    },
    mutations:{
        // 加载状态
        changLoadingStatus(state,status = true){
            state.showLoading = status
        },
        changUsedLoading(state,status = true){
            state.isUsedLoading = status
        }
    }
}

export default base