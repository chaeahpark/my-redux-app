import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/action';

// Q) What is the difference between arrow function and function declaration

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client: auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '899802115899-o7m7t8j23amlbc827lumjh8bsis0loul.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.googleAuth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.googleAuth.isSignedIn.get());
          this.googleAuth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.googleAuth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInBtnClick = () => {
    console.log(this.googleAuth);
    this.googleAuth.signIn();
  };

  onSignOutBtnClick = () => {
    console.log(this.googleAuth);
    this.googleAuth.signOut();
  };

  renderButtons() {
    const isSignedIn = this.props.isSignedIn;
    // three cases
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={this.onSignOutBtnClick}
        >
          <i className="google icon" /> Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={this.onSignInBtnClick}
        >
          <i className="google icon" /> Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
