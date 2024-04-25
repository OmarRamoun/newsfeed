/* eslint-disable no-param-reassign */
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {Article} from '@types';

const initialValue: Article[] = [];

const articlesSlice = createSlice({
  name: 'feed',
  initialState: {
    value: initialValue,
  },
  reducers: {
    syncArticles: (state, action: PayloadAction<Article[]>) => {
      state.value = action.payload;
    },
  },
});

const {syncArticles} = articlesSlice.actions;
export {articlesSlice, syncArticles};

export default articlesSlice.reducer;
