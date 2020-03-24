import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import '../signin/signin.css';
import {Link, Router} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
/*local storage of the  chrome*/
/*store redux*/
class Facebook extends Component {
  state = {
    islogin: false,
    tokenid: '',
    name: '',
  };

  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      islogin: true,
      tokenid: response.accessToken,
      name: response.name,
    });
  };

  componentClicked = () => console.log('clicked');

  render() {
    let FBcontant;

    if (this.state.islogin) {
      FBcontant = <Redirect to="/Facebookislogined"></Redirect>;
    } else {
      FBcontant = (
        <FacebookLogin
          render={(renderProps) => (
            <button disabled={renderProps.enable}>
              <img
                alt=""
                src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png"
                className="facebookicon"
              ></img>
              login with facebook
            </button>
          )}
          appId="202514100963607"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          // textButton="login with Facebook"
          size="medium"
        />
      );
    }

    return <div>{FBcontant}</div>;
  }
}

export default Facebook;
