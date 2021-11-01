/**
 * 获取方式
 * this.$store.state.common.x;
 *
 * 设置方式
 * this.$store.dispatch("common/changeState", { key: "key", value: data });
 * this.$store.dispatch("common/changeState", [ { key: "key", value: data } ]);
 * this.$store.commit("common/CHANGE_STATE", { key: "key", value: data });
 * this.$store.commit("common/CHANGE_STATE", [ { key: "key", value: data } ]);
 */
export default {
  key: "common",
  namespaced: true,
  state: {
    version: "1.0.0",
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
