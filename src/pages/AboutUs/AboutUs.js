import './AboutUs.scss';
import Showcase from './Showcase';
import BriefAboutSec from './BriefAboutSec';
import RoleThirdParty from './RoleThirdParty';

export default function AboutUs() {
  return (
    <>
      <Showcase />
      <main id="about-main">
        <BriefAboutSec />
        <RoleThirdParty />
      </main>
    </>
  );
}
