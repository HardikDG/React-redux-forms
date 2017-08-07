import React, { Component } from 'react';
import { Field,reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends Component {
    renderFormField(field) {
        const { meta : { touched,error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return(
            <div className={className}>
                <label> { field.label } </label>
                <input className="form-control" 
                type="text"
                { ...field.input }
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return(            
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Field name="title" label="Title" component= { this.renderFormField }/>
                <Field name="categories" label="Categories" component= { this.renderFormField }/>
                <Field name="content" label="Post content" component= { this.renderFormField }/>

                <button type="submit" className="btn btn-primary"> Submit </button>
                <Link className="btn btn-danger" to="/" style={{marginLeft: 20 + 'px'}}> Cancel </Link>
            </form>
        );
    }
}

function validate(values) {

    const errors = {};

    if(!values.title || values.title.length < 3) {
        errors.title = "Please enter a title that is atleast 3 characters!";
    }
    if(!values.categories) {
        errors.categories = "Please enter a categories!";
    }
    if(!values.content) {
        errors.content = "Please enter a content!";
    }
    //If error is empty form is fine to submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})
(
   connect(null, { createPost }) (PostsNew)
);