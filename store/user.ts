import { MutationTree } from "vuex";

interface IState {
  tab: number;
}

export const state = (): IState => ({
  tab: 0,
});

export const mutations: MutationTree<IState> = {
  set(state, tab: number) {
    state.tab = tab;
  },
};
