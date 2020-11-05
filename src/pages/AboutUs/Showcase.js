import { Component } from 'react';
import './Showcase.scss';
import { NavLink } from 'react-router-dom';

export default class Showcase extends Component {
  titles = [
    'Manufacturer of Nutritional Supplements',
    'Exporter to every corner of India',
    'Manufacturer of Gym Products',
  ];

  state = {
    title: this.titles[0],
  };

  componentDidMount() {
    setTimeout(this.startTypingEffect, 3000);
  }

  render() {
    return (
      <div id="about-showcase">
        <div className="container">
          <h1>Welcome to Secure Life Pharmaceuticals</h1>

          <h2 className="flx flx-ai-fe">
            <span>
              {this.state.title} <span className="cursor-bar">|</span>
            </span>
          </h2>
          <p>
            We are third-party manufacturer of Dietary Supplements and Gym
            Products. Our goal is to produce best quality and healthy products
            for healthy India.
          </p>
          <div className="btns-cont">
            <NavLink to="/products" className="btn">
              See Catalogue
            </NavLink>
            <NavLink to="/shop" className="btn">
              Buy Protein
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  startTypingEffect = () => {
    const maxTitleIndex = this.titles.length - 1;
    let activeTitleIndex = 0;
    let maxLastCharIndex = this.titles[activeTitleIndex].length - 1;
    let activeLastCharIndex = maxLastCharIndex;
    let charIndexStep = -1;

    const typeSpeed = 50;
    const nextTitleBreak = 3000;

    const updateTitle = () => {
      const title = this.titles[activeTitleIndex];
      const subL = 0;
      const subR = activeLastCharIndex + 1;

      this.setState({
        title: title.substring(subL, subR),
      });
    };

    const typeTitle = () => {
      activeLastCharIndex += charIndexStep;

      if (activeLastCharIndex < 0) {
        let nextTitleIndex = activeTitleIndex + 1;
        activeTitleIndex = nextTitleIndex > maxTitleIndex ? 0 : nextTitleIndex;

        maxLastCharIndex = this.titles[activeTitleIndex].length - 1;
        activeLastCharIndex++;
        charIndexStep = 1;

        setTimeout(typeTitle, 1000 / typeSpeed);
      } else if (activeLastCharIndex > maxLastCharIndex) {
        activeLastCharIndex--;
        charIndexStep = -1;

        setTimeout(typeTitle, nextTitleBreak);
      } else {
        updateTitle();
        setTimeout(typeTitle, 1000 / typeSpeed);
      }
    };

    typeTitle();
  };
}
