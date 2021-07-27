export default {
  changeLinkState({ commit }: { commit: any }, data: String) {
    commit("SET_SELECTED_TYPE", data);
  }
};
