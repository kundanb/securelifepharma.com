import RoleThirdPartyImage from '../../img/about--role-third-party.png';
import { Link } from 'react-router-dom';

export default function RoleThirdParty() {
  return (
    <div
      id="about--role-third-party"
      className="main--main-sec about--our-role-sec"
    >
      <div className="container flx">
        <div className="ver-sec txt-sec">
          <h3>Our role as a Third-Party Manufacturer</h3>

          <p>
            We are one of the largest manufacturers of Sachets in North India.
            We deal in the production of almost every type of Dietary
            Supplements in the form of <strong>tablets</strong>,{' '}
            <strong>capsules</strong>, <strong>sachets</strong>,{' '}
            <strong>syrups</strong> and <strong>proteins</strong>. We are also
            responsible for exporting products to any corner of India. We goal
            not to delay our manufacturing process so that our relationships
            with the client develop a long-term handshake.
          </p>

          <div className="btns-cont">
            <Link to="/products" className="more-btn">
              See Complete Catalouge
            </Link>
          </div>
        </div>

        <div className="ver-sec img-sec">
          <img
            src={RoleThirdPartyImage}
            alt="Manufacturer & exporter of Sachets, Tablets, Capsules, Syrups."
          />
        </div>
      </div>
    </div>
  );
}
