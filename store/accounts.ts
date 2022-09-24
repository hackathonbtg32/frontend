import { GetterTree, ActionTree, MutationTree } from "vuex";
import { Account } from "~/entities/Account";

interface IState {
  list: Account[];
  date: Date | null;
}

export const state = (): IState => ({
  list: [
    {
      id: 1,
      main: true,
      name: "BTG Pactual",
      label: "Conta Principal",
      value: 170,
    },
    {
      id: 2,
      main: false,
      name: "Nu Bank",
      label: "Conta de Investimento",
      value: 47,
    },
  ],
  date: null,
});

export const getters: GetterTree<IState, IState> = {
  main(state) {
    return state.list.find((item) => item.main === true);
  },
};

export const mutations: MutationTree<IState> = {
  set(state, list: Account[]) {
    state.list = list;
    state.date = new Date();
  },
  add(state, item: Account) {
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
  async create({ commit }, data: Account) {
    const item = await this.$axios.post("/teste", data);
    commit("add", item);
  },
  async delete({ state, commit }, id: number) {
    //await this.$axios.delete("/teste" + id);
    const index = state.list.findIndex((item) => item.id === id);
    commit("remove", index);
  },
};
