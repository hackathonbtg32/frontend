import { GetterTree, ActionTree, MutationTree } from "vuex";
import { Debits } from "../entities/Debits";

export interface IState {
  list: Debits[];
  date: Date | null;
}

export const getters: GetterTree<IState, any> = {
  orderByPercent(state, _, root) {
    let totalAccounts = root.accounts.total;

    const list = state.list.map((item) => {
      const after = totalAccounts - item.paymentValue;

      if (after > 0) {
        item.percent = 100;
        totalAccounts -= item.paymentValue;
        return item;
      }

      item.percent = 100 - (100 * (after * -1)) / item.paymentValue;
      totalAccounts = 0;

      return item;
    });

    return list.sort((previous, current) => {
      return current.percent - previous.percent;
    });
  },
};

export const state = (): IState => ({
  list: [],
  date: null,
});

export const mutations: MutationTree<IState> = {
  set(state, list: Debits[]) {
    state.list = list.map((item) => {
      item.paymentData = JSON.parse(item.paymentData);
      return item;
    });
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
    const list = await this.$axios.get("/debits/1");
    commit("set", list.data.data);
  },
  async create({ commit }, data: Debits) {
    const item = await this.$axios.post("/teste", data);
    commit("add", item);
  },
  async delete({ state, commit }, id: number) {
    await this.$axios.put("/debits/" + id);
    const index = state.list.findIndex((item) => item.id === id);
    commit("remove", index);
  },
};
