import './RoleGymProd.scss';
import { Link } from 'react-router-dom';

export default function RoleGymProd() {
  return (
    <div
      id="about--role-gym-prod"
      className="main--main-sec about--our-role-sec"
    >
      <div className="container flx">
        <div className="ver-sec img-sec"></div>

        <div className="ver-sec txt-sec">
          <h3>and, as a Gym Supplements Manufacturer</h3>

          <p>
            Being a third-party manufacturer, we are also the one of the best
            manufacturers of Gym Supplements. We manufacture various types of
            Protein Supplements for the betterment and maintainance of the
            health and body, specially for Gym Gooers. Our Gym Products are{' '}
            <strong>whey proteins</strong>, <strong>weight gainers</strong>,{' '}
            <strong>pre-workouts</strong>, <strong>immunity boosters</strong>,
            and much more.
          </p>

          <div className="btns-cont">
            <Link to="./shop" className="more-btn">
              Shop for Gym Supplements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
