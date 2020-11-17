import { Component } from 'react';
import './Shop.scss';
import ProdList from './Shop/ProdList';

export default class Shop extends Component {
  render() {
    return (
      <div id="shop--prod-list" className="main-sec">
        <div className="container">
          <h1>
            <span>Shop for Gym Supplements</span>
          </h1>

          <ProdList />
        </div>
      </div>
    );
  }
}
