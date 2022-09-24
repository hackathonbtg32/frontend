import { GetterTree, ActionTree, MutationTree } from "vuex";
import { Debits } from "~/entities/Debits";

interface IState {
  list: Debits[];
  date: Date | null;
}

export const getters: GetterTree<IState, IState> = {
  orderByPercent(state) {
    const list = [...state.list];
    return list.sort((previous, current) => {
      return current.percent - previous.percent;
    });
  },
};

export const state = (): IState => ({
  list: [
    {
      id: 1,
      description: "Viagem",
      value: 2000,
      expiration: new Date(),
      name: "Trivago",
      percent: 50,
    },
    {
      id: 2,
      description: "Faculdade",
      value: 500,
      expiration: new Date(),
      name: "Univem",
      percent: 100,
    },
  ],
  date: null,
});

export const mutations: MutationTree<IState> = {
  set(state, list: Debits[]) {
    state.list = list;
    state.date = new Date();
  },
  add(state, item: Debits) {
    state.list.unshift(item);
  },
  remove(state, index: number) {
    state.list.splice(index, 1);
  },
  clear(state) {
    state.list = [];
    state.date = new Date();
  },
};

export const actions: ActionTree<IState, IState> = {
  async select({ commit }) {
    //const list = await this.$axios.get("/teste");
    //commit("set", list);
  },
  async create({ commit }, data: Debits) {
    const item = await this.$axios.post("/teste", data);
    commit("add", item);
  },
  async delete({ state, commit }, id: number) {
    //await this.$axios.delete("/teste" + id);
    const index = state.list.findIndex((item) => item.id === id);
    commit("remove", index);
  },
};
