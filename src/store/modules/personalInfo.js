
// 变量
const state = {
    name: '',
    tel: '',
    email: '',
    qq: '',
    majorAndClass: '',
    building: '',
    room: '',
    id: '',
    sex: '',
    age: '',
    post: ''
};


const mutations = {
    // 获得表单的数据
    update: (state, datas) => {
        Object.assign(state, datas);
    },
};

export default {
    state,
    mutations
};