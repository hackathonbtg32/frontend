import { GetterTree, ActionTree, MutationTree } from "vuex";
import { Account } from "~/entities/Account";

interface IState {
  list: Account[];
  date: Date | null;
}

export const state = (): IState => ({
  list: [],
  date: null,
});

export const getters: GetterTree<IState, IState> = {
  main(state) {
    return state.list.find((item) => item.main === true);
  },
  byId(state, id: number) {
    return state.list.find((item) => item.id === id);
  },
  indexById(state, id: number) {
    return state.list.findIndex((item) => item.id === id);
  },
};

export const mutations: MutationTree<IState> = {
  set(state, list: Account[]) {
    state.list = list;
  },
  add(state, item: Account) {
    state.list.unshift(item);
  },
  remove(state, index: number) {
    state.list.slice(index);
  },
  clear(state) {
    state.list = [];
  },
};

export const actions: ActionTree<IState, IState> = {
  async select({ commit }) {
    const list = await this.$axios.get("/teste");
    commit("set", list);
  },
  async create({ commit }, data: Account) {
    const item = await this.$axios.post("/teste", data);
    commit("add", item);
  },
  async delete({ getters, commit }, id: number) {
    await this.$axios.delete("/teste" + id);
    const index = getters.indexById(id);
    commit("remove", index);
  },
};
