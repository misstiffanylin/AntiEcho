import * as types from '../constants/actionTypes';

export const searchArticles = (searchString) => ({
  type: types.SEARCH_ARTICLES,
  payload: searchString,
});

export const handleSearch = (value) => ({
  type: types.HANDLE_SEARCH,
  payload: value,
})