/**
 * 获取方式
 * this.$store.state.user.x;
 *
 * 设置方式
 * this.$store.dispatch("user/changeState", { key: "key", value: data });
 * this.$store.dispatch("user/changeState", [ { key: "key", value: data } ]);
 * this.$store.commit("user/CHANGE_STATE", { key: "key", value: data });
 * this.$store.commit("user/CHANGE_STATE", [ { key: "key", value: data } ]);
 */
export default {
  key: "user",
  namespaced: true,
  state: {
    name: "lee",
    age: 100,
    city: "ShangHai",
  },
  mutations: {
    CHANGE_STATE(state: any, context: any): void {
      context.length
        ? context.forEach((item: any) => (state[item.key] = item.value))
        : (state[context.key] = context.value);
    },
  },
  actions: {
    changeState({ commit }: any, context: any): void {
      commit("CHANGE_STATE", context);
    },
  },
};
