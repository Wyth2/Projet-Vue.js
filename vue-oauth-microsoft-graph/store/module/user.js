export const user = {
    namespaced: true,
    state: () => ({
      name: null,
    }),
    mutations: {
      setName(state, name) {
        state.name = name;
      },
    },
  };