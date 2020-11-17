import './BriefAboutSec.scss';
import { Link } from 'react-router-dom';

export default function BriefAboutSec() {
  return (
    <div id="about--brief-about-sec" className="main-sec">
      <div className="container">
        <h2>About The Industry</h2>

        <p>
          If you are looking for a product in a reasonable price bracket,
          without compromising on the quality, then Secure Life Pharmaceuticals
          is the right destination for you. Our products are appreciated for
          their accurate composition and efficiency.
        </p>

        <div className="btns-cont flx flx-jc-c">
          <Link to="/contact" className="btn ui-btn">
            Contact with us
          </Link>
        </div>
      </div>
    </div>
  );
}
