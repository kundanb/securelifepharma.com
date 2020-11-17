import { Component } from 'react';
import Showcase from './AboutUs/Showcase';
import BriefAboutSec from './AboutUs/BriefAboutSec';
import OurRole from './AboutUs/OurRole';
import Mission from './AboutUs/Mission';

export default class AboutUs extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <>
        <Showcase />
        <BriefAboutSec />
        <OurRole />
        <Mission />
      </>
    );
  }
}
