import './Shop.scss';
import Feather from '../components/Feather';
import { Filter } from 'react-feather';
import ProdList from './Shop/ProdList';

export default function Shop() {
  return (
    <>
      <div id="shop--prod-list" className="main--main-sec">
        <div className="container">
          <h1>
            <span>Shop for Gym Supplements</span>
          </h1>

          <div className="prod-list-sec-cont flx">
            <aside className="sidebar filters-sec">
              <div className="filters-sec-title flx flx-ai-c">
                <Feather icon={Filter} />
                <span className="txt fw-b">Filters</span>
              </div>
            </aside>

            <article className="prod-list-sec">
              <ProdList />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
