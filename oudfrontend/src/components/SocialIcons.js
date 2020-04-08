import React, {Component} from 'react';
import Facebook from './signin/Facebook';
import axios from 'axios';
import '../components/signup/signup.css';

/**the social button section */
class SocialIcons extends Component {
  /**
   * the request sender function
   * @function
   * @returns {void}
   */
  handelClickFace() {
    axios
      .post(
        'http://oud-zerobase.me/api/v1/usersfacebook',
        this.state.Facebook_token
      )
      .then((response) => {
        /**redirect to home  * ****************************************************************************************************/
        const authToken = this.state.Facebook_token;
        localStorage.setItem('accessToken', authToken);
        console.log('token', authToken);
        console.log(response);
        /**redirect to home */
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /**
   * render and call the buttons
   * @function
   * @returns {void}
   */
  render() {
    return (
      <React.Fragment>
        <div className="SocialIconsPage">
          <h6 className="hint-text hint">
            Sign Up with your social media account
          </h6>
          <section className="icons container">
            <button className="google_button" href="#">
              <img
                alt=""
                src="http://pngimg.com/uploads/google/google_PNG19630.png"
                className="googlepic"
              ></img>{' '}
              continue with Google
            </button>
            <Facebook
              data-testid="FacebookButton"
              onClick={this.handelClickFace}
            />
          </section>
          <section className="or-seperator OR">
            <i>OR</i>
            <h6 className="hint-text hint">Sign up with your email address</h6>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default SocialIcons;
