import { GetterTree, ActionTree, MutationTree } from "vuex";
import { Account } from "~/entities/Account";

interface IState {
  list: Account[];
  total: number | null;
  date: Date | null;
}

export const state = (): IState => ({
  list: [],
  total: null,
  date: null,
});

export const getters: GetterTree<IState, IState> = {
  main(state) {
    return state.list.find((item) => item.main === true);
  },
};

export const mutations: MutationTree<IState> = {
  total(state, value: number) {
    state.total = value;
  },
  set(state, list: Account[]) {
    state.list = list;
    state.date = new Date();
  },
  add(state, item: Account) {
    state.list.unshift(item);
  },
  remove(state, id: number) {
    const index = state.list.findIndex((item) => item.id === id);
    state.list.splice(index, 1);
  },
  clear(state) {
    state.list = [];
    state.date = new Date();
  },
  main(state, id: number) {
    state.list = state.list.map((item) => {
      if (item.id === id) item.main = true;
      else item.main = false;

      return item;
    });
  },
};

export const actions: ActionTree<IState, IState> = {
  async main({ commit }, id: number) {
    //await this.$axios.get("/brokers/1");
    commit("main", id);
  },
  async select({ commit }) {
    const list = await this.$axios.get("/brokers/1");
    commit("set", list.data.data);
  },
  async create({ commit }, data: Account) {
    const item = await this.$axios.post("/teste", data);
    commit("add", item);
  },
  async delete({ commit }, id: number) {
    await this.$axios.put("/broker/" + id);
    commit("remove", id);
  },
};
