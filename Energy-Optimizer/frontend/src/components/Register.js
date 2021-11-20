import React, { Component } from "react";

export default class Register extends Component {
    render() {
        return (
            <form>
                <h3> Register </h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
        );
    }
}