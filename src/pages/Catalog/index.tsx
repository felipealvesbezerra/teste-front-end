import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { FiDatabase, FiDollarSign, FiPlus, FiPlusSquare } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Product from '../../components/Product';
import {
  addProduct,
  fetchProducts,
  selectProducts,
} from '../../logic/redux/slices/products';
import { AppDispatch } from '../../logic/redux/store';
import {
  Container,
  ProductsCatalog,
  Title,
  NewProduct,
  NovoProdutoForm,
} from './styles';

const schema = Yup.object({
  nome: Yup.string().required('Este campo e obrigatorio'),
  modelo: Yup.string().required('Este campo é obrigatório'),
  link_foto: Yup.string()
    .url('Deve inserir um link')
    .required('Este campo é obrigatório'),
  preco: Yup.number()
    .typeError('O preco deve ser um numero valido')
    .required('Este campo é obrigatório'),
  marca: Yup.string().required('Este campo é obrigatório'),
  descricao: Yup.string().required('Este campo é obrigatório'),
});

const Catalog: React.FC = () => {
  const { status: productsState, value: products } = useSelector(
    selectProducts,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isNewProductVisible, setIsNewProductVisible] = useState<boolean>(
    false,
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Produtos</Title>
      <ProductsCatalog>
        {products.map(product => (
          // eslint-disable-next-line no-underscore-dangle
          <Product key={product._id} product={product} />
        ))}
      </ProductsCatalog>

      <NewProduct onClick={() => setIsNewProductVisible(!isNewProductVisible)}>
        <FiPlusSquare size={30} color="green" />
        Novo Produto
      </NewProduct>
      <NovoProdutoForm visible={isNewProductVisible}>
        <Formik
          initialValues={{
            nome: '',
            modelo: '',
            link_foto: '',
            preco: '',
            marca: '',
            descricao: '',
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(addProduct(values));
            setTimeout(() => {
              dispatch(fetchProducts());
            }, 1000);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Nome do Produto"
                icon={FiDatabase}
                error={errors.nome}
                type="text"
                name="nome"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nome}
                touched={touched.nome || false}
              />
              <Input
                placeholder="Descrição do Produto"
                icon={FiDatabase}
                error={errors.descricao}
                type="text"
                name="descricao"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.descricao}
                touched={touched.descricao || false}
              />

              <Input
                placeholder="Link da Foto do Produto"
                icon={FiDatabase}
                error={errors.link_foto}
                type="text"
                name="link_foto"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.link_foto}
                touched={touched.link_foto || false}
              />

              <Input
                placeholder="Marca do Produto"
                icon={FiDatabase}
                error={errors.marca}
                type="text"
                name="marca"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.marca}
                touched={touched.marca || false}
              />

              <Input
                placeholder="Modelo do Produto"
                icon={FiDatabase}
                error={errors.modelo}
                type="text"
                name="modelo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.modelo}
                touched={touched.modelo || false}
              />

              <Input
                placeholder="Preco do Produto"
                icon={FiDollarSign}
                error={errors.preco}
                type="text"
                name="preco"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.preco}
                touched={touched.preco || false}
              />
              <button type="submit" disabled={isSubmitting}>
                Enviar Dados
              </button>
            </form>
          )}
        </Formik>
      </NovoProdutoForm>
    </Container>
  );
};

export default Catalog;
