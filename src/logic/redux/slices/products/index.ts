/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../services/api';
import { AppState } from '../../store';
import { IProduct, ProductsState } from './types';

const initialState: ProductsState = {
  value: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const { data } = await api.get('/products/list');
      return data;
    } catch (err) {
      if (err instanceof Error) throw err;
      else throw err;
    }
  },
);

export const editProduct = createAsyncThunk(
  'products/editProduct',
  async ({ _id: id, ...product }: IProduct) => {
    try {
      await api.put(`/products/${id}/update`, {
        ...product,
      });

      return { _id: id, ...product };
    } catch (err) {
      if (err instanceof Error) throw err;
      else throw err;
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: string) => {
    try {
      await api.delete(`/products/${id}/delete`);

      return id;
    } catch (err) {
      if (err instanceof Error) throw err;
      else throw err;
    }
  },
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product: Omit<IProduct, '_id'>) => {
    try {
      const { data } = await api.post(`/products/create`, { ...product });
    } catch (err) {
      if (err instanceof Error) throw err;
      else throw err;
    }
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    create: state => {
      state.value.push({
        _id: 'asd',
        descricao: 'sd',
        nome: 'Nome Aqui',
      } as IProduct);
      return state;
    },
  },
  extraReducers: {
    [fetchProducts.pending.type]: state => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled.type]: (
      state,
      { payload }: PayloadAction<IProduct[]>,
    ) => {
      state.status = 'loaded';
      state.value = payload;
    },
    [fetchProducts.rejected.type]: state => {
      state.status = 'failed';
    },
    [editProduct.fulfilled.type]: (
      state,
      { payload }: PayloadAction<IProduct>,
    ) => {
      state.status = 'loaded';
      state.value.splice(
        state.value.findIndex(find => find._id === payload._id),
        1,
        payload,
      );
    },
    [editProduct.rejected.type]: state => {
      state.status = 'failed';
    },
    [deleteProduct.pending.type]: state => {
      state.status = 'loading';
    },
    [deleteProduct.fulfilled.type]: (
      state,
      { payload }: PayloadAction<string>,
    ) => {
      state.status = 'loaded';
      state.value = state.value.filter(find => find._id !== payload);
    },
    [deleteProduct.rejected.type]: state => {
      state.status = 'failed';
    },
  },
});

const productsReducer = productsSlice.reducer;
export const selectProducts = (state: AppState): ProductsState =>
  state.products;

export const { create } = productsSlice.actions;
export default productsReducer;
