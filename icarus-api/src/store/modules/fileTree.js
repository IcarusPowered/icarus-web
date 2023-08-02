// fileTree模块
const state = {
  tree: [
    {
      id: '1',
      label: '一级foder1',
      isLeaf: false,
      children: [
        {
          id: '1-1',
          label: '二级foder1',
          isLeaf: false,
          children: [
            {
              id: '1-1-1',
              label: 'GetProject',
              method: 'GET',
              isLeaf: true
            },
            {
              id: '1-1-2',
              label: 'PatchProject',
              method: 'PATCH',
              isLeaf: true
            },
            {
              id: '1-1-3',
              label: 'HeadProject',
              method: 'HEAD',
              isLeaf: true
            },
          ]
        },
        {
          id: '1-2',
          label: 'PutProject',
          method: 'PUT',
          isLeaf: true,
        }
      ]
    },
    {
      id: '2',
      label: '一级foder2',
      isLeaf: false,
      children: [
        {
          id: '2-1',
          label: 'PostProject',
          method: 'POST',
          isLeaf: true,
        },
        {
          id: '2-2',
          label: 'DeletProject',
          method: 'Delet',
          isLeaf: true,
        },
        {
          id: '2-3',
          label: 'OptionProject',
          method: 'OPTION',
          isLeaf: true,
        },
      ]
    }
  ],
}
const mutations = {

}
const actions = {

}
const getters = {
  // 分模块后，state指代子模块的state
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
