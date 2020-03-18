import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addPost } from '../../redux/action';

export class AddPost extends Component {
  renderTitleInput(formProps) {
    // console.log(formProps);
    return (
      <div>
        <label htmlFor="title">{formProps.label}</label>
        <input className="ui input" onChange={formProps.input.onChange}></input>
      </div>
    );
  }

  renderBodyInput({ input, meta, label }) {
    // console.log(input);
    return (
      <div>
        <label htmlFor="body">{label}</label>
        <textarea rows="3" onChange={input.onChange}></textarea>
      </div>
    );
  }

  onSubmit = formValues => {
    console.log(formValues);
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

const formWrapped = reduxForm({
  form: 'postAdd'
})(AddPost);

export default connect(null, { addPost })(formWrapped);
