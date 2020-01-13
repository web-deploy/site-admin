import React from 'react';
import createStore from './createStore';
import {useLocalStore} from 'mobx-react-lite';

const storeContext = React.createContext(null);

export const StoreProvider = ({children}) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

const getStoreByPath = (paths, store) => {
  return paths.reduce((memo, key) => {
    return memo[key];
  }, store.pageStoreMap);
};

export const useRegisterStore = (paths, rowStore) => {
  const store = useStore();

  React.useMemo(() => {
    const parent = getStoreByPath(paths.slice(0, -1), store);
    const last = paths[paths.length - 1];
    parent[last] = rowStore;
  }, [store, paths, rowStore]);
};

export const usePageStore = paths => {
  const store = useStore();
  const pageStore = getStoreByPath(paths, store);
  return pageStore;
};
