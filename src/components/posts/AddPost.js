import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addPost } from '../../redux/action';

class AddPost extends Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderTitleInput = ({ label, input: { onChange }, meta }) => {
    return (
      <div>
        <label htmlFor="title">{label}</label>
        <input className="ui input" onChange={onChange}></input>
        {this.renderError(meta)}
      </div>
    );
  };

  renderBodyInput = ({ input: { onChange }, label, meta }) => {
    return (
      <div>
        <label htmlFor="body">{label}</label>
        <textarea rows="3" onChange={onChange}></textarea>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.addPost(formValues);
  };

  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            label="Enter title: "
            component={this.renderTitleInput}
          />
          <Field
            name="body"
            label="Enter content: "
            component={this.renderBodyInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// The validate function is linked with
// reduxForm as shown in const formWrapped.

// The validate function updates error property
// inside of props which are based from Field
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.body) {
    errors.body = 'You must enter a content';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'postAdd',
  validate
})(AddPost);

export default connect(null, { addPost })(formWrapped);
