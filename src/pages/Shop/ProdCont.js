import { Link } from 'react-router-dom';
import './ProdCont.scss';

export default function ProdCont({ details }) {
  return (
    <div className="prod-cont">
      <div className="prod-wrpr">
        <div className="thumb">
          <img src={details.thumb} alt="prod" />
        </div>

        <h2 className="name">
          {details.name}{' '}
          <span className="details">
            ({details.weight}, {details.flavor})
          </span>
        </h2>

        <p className="price">
          <sup>&#x20B9;</sup>
          {details.price}/-
        </p>

        <ul className="details-list">
          <li>
            <strong>Weight: </strong> {details.weight}
          </li>
          <li>
            <strong>Flavor: </strong> {details.flavor}
          </li>
        </ul>

        <div className="btns-cont flx ta-c">
          <Link to="/" className="btn details-btn">
            Details
          </Link>
          <a
            href="https://www.amazon.in"
            className="btn buy-btn"
            target="_blank"
            rel="noreferrer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
