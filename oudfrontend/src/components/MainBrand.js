import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Oud from '../assets/images/Logo.png';
import '../components/signup/signup.css';
/** header class of the sign up */
class MainBrand extends Component {
  /**
   * here i render the logo and the name of my website
   * @function
   * @returns {JSX}
   */
  render() {
    return (
      <div className="NavBarStyle">
        <section className="main-brand mainBrand barsection">
          <Link className="navbar navbar-dark bg-dark" to="/signup">
            <img
              id="OudImage"
              data-testid="OudImage"
              src={Oud}
              className="d-inline-block align-top OudImage"
              alt="logo imag"
            />
          </Link>
        </section>
      </div>
    );
  }
}

export default MainBrand;
