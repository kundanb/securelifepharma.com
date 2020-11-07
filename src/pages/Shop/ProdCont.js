import './ProdCont.scss';
import ProdImage from '../../img/prods/thumb-bcaa-diamond-4-1-1.png';

export default function ProdCont(props) {
  return (
    <div className="prod-cont">
      <div className="prod-wrpr">
        <div className="thumb flx flx-jc-c">
          <img src={ProdImage} alt="prod" />
        </div>
        <h2 className="name">BCAA Diamond 4:1:1</h2>
      </div>
    </div>
  );
}
