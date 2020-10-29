/* eslint-disable no-underscore-dangle */
import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { FiDatabase, FiDollarSign, FiEdit, FiXCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { deleteProduct, editProduct } from '../../logic/redux/slices/products';
import { IProduct } from '../../logic/redux/slices/products/types';
import formatValue from '../../utils/formatValue';
import Input from '../Input';
import {
  Container,
  SubTitle,
  Title,
  Price,
  Description,
  Options,
  EditableContainer,
} from './styles';

interface ProductProps {
  product: IProduct;
}
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

const Product: React.FC<ProductProps> = ({ product }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [editableVisible, setEditableVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <Container>
      <main>
        <Options>
          <FiEdit
            size={20}
            color="green"
            onClick={() => setEditableVisible(!editableVisible)}
          />
          <FiXCircle
            onClick={() => dispatch(deleteProduct(product._id))}
            color="red"
            size={20}
          />
        </Options>
        <Title>{product.nome}</Title>
        <SubTitle>{product.modelo}</SubTitle>
        <img src={product.link_foto} alt={product.nome} />
        <Price>{formatValue(parseFloat(product.preco))}</Price>
        <Description visible={toggle}>
          {product.marca}

          <div>{product.descricao}</div>
          <button type="button" onClick={() => setToggle(!toggle)}>
            {!toggle ? 'Ver Detalhes' : 'Ocultar Detalhes'}
          </button>
        </Description>
      </main>
      <EditableContainer visible={editableVisible}>
        <Formik
          initialValues={{
            nome: product.nome,
            modelo: product.modelo,
            link_foto: product.link_foto,
            preco: product.preco,
            marca: product.marca,
            descricao: product.descricao,
          }}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(editProduct({ _id: product._id, ...values }));
            setSubmitting(false);
            setEditableVisible(false);
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
                Editar Dados
              </button>
            </form>
          )}
        </Formik>
      </EditableContainer>
    </Container>
  );
};

export default Product;
