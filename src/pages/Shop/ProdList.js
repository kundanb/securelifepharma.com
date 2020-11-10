import { Component } from 'react';
import './ProdList.scss';
import ProductsAPI from './ProductsAPI';
import ProdCont from './ProdCont';

export default class ProductList extends Component {
  state = {
    products: [],
  };

  constructor() {
    super();

    this.state.products = ProductsAPI.products.map(product => (
      <ProdCont key={product.key} details={product} />
    ));
  }

  render() {
    return (
      <div className="prod-list-cont flx flx-wrp">{this.state.products}</div>
    );
  }
}
