import { Component } from 'react';
import './ProdList.scss';
import ProdCont from './ProdCont';

export default class ProductList extends Component {
  state = {
    prods: [],
  };

  render() {
    return (
      <div className="prod-list-cont flx flx-wrap">
        <ProdCont />
      </div>
    );
  }
}
