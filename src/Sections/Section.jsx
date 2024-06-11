import React from 'react';
import { Link } from 'react-router-dom';
import style from './section.module.css';

class Section extends React.Component {
  render() {
    const { openContainerProduct } = this.props;

    return (
      <div className={style.container}>
        <div className={style.section}>
          <div>
            Enjoy Your <span>Coffee</span> before your activity
          </div>
          <div>
            Boost your productivity and build your mood with a glass of
            coffee in the morning
          </div>
          <div>
            <Link to="/order" className={style.orderLink}>
              Open Menu
            </Link>
            <br />
            <br />
            <br />
            
            <Link to="/feedback" className={style.feedbackLink}>
              Feedback
            </Link>
          </div>
        </div>
        <div className={style.sectionPhoto}>
          <img
            src="https://image.similarpng.com/very-thumbnail/2020/08/Coffee-shop-logo-on-transparent-background-PNG.png"
            alt="imgReklam"
            width={350}
          />
        </div>
      </div>
    );
  }
}

export default Section;
