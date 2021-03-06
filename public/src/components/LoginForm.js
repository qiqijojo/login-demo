import React, {Component} from 'react';

import {login} from '../actions';

class LoginFrom extends Component {

  handleSubmit(e) {
    e.preventDefault();
    let {dispatch} = this.props;
    console.log(this.props);
    dispatch(login());
  }

  componentWillUpdate(nextProps) {
    console.log(nextProps);
    if(nextProps.loggedIn) {
      this.props.router.push('/data');
    };
  }

  render() {

    return (
        <div className="col-md-6 offset-md-3 m-t-1">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
              </div>
            </div>

            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
        </div>
    )
  }
}

export default LoginFrom;