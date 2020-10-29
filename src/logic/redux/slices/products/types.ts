/* eslint-disable camelcase */
export interface IProduct {
  _id: string;
  nome: string;
  marca: string;
  modelo: string;
  preco: string;
  link_foto: string;
  descricao: string;
}

export interface ProductsState {
  value: IProduct[];
  status: 'idle' | 'loading' | 'loaded' | 'failed';
  error: string | null;
}

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload: IProduct;
}

export type ProductsActionTypes = FetchProductsAction;
