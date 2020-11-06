import './RoleThirdParty.scss';
import RoleThirdPartyImage from '../../img/role-third-party.png';

export default function RoleThirdParty() {
  return (
    <div id="role-third-party" className="main-sec our-role-sec">
      <div className="container">
        <div className="secs-container flx">
          <div className="vertical-sec txt-sec">
            <h3>Our role as a Third-Party Manufacturer</h3>
            <p>
              We are one of the largest manufacturers of Sachets in North India.
              We deal in the production of almost every type of Dietary
              Supplements in the form of tablets, capsules, sachets, syrups etc.
              We are also responsible for exporting products to any corner of
              India. We goal not to delay our manufacturing process so that our
              relationships with the client develop a long-term handshake.
            </p>
          </div>

          <div className="vertical-sec img-sec">
            <img
              src={RoleThirdPartyImage}
              alt="Manufacturer & exporter of Sachets, Tablets, Capsules, Syrups."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
