import {usePageStore} from '../store';

export const useHomeStore = () => {
  return usePageStore(['recommend']);
};

export const useArticleStore = () => {
  return usePageStore(['article']);
};

