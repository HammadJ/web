import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';

const Login = () => {
    // State to store email, password, and converted username
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle the login action
    const handleLogin = () => {
        const expectedUsername = "hammad";
        const expectedPassword = "ham";

        if (username === expectedUsername && password === expectedPassword) {
            // Username and password match, show a success alert
            Router.push('ProjectForm');
        } else {
            // Username and/or password do not match, show an error message
            alert("Login failed. Please check your username and password.");
        }
    };

    // Function to handle "Enter" key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin(); // Trigger login action when "Enter" key is pressed
        }
    };

    return (
        <>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="px-5 ms-xl-4 mt-5">
                                <span className="h1 fw-bold mb-0">InterioArch</span>
                            </div>

                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: "23rem" }}>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Log in</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example18">User Name</label>
                                        <input
                                            type="text"
                                            id="form2Example18"
                                            className="form-control form-control-lg"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            onKeyPress={handleKeyPress} // Handle "Enter" key press
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example28">Password</label>
                                        <input
                                            type="password"
                                            id="form2Example28"
                                            className="form-control form-control-lg"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyPress={handleKeyPress} // Handle "Enter" key press
                                        />
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button
                                            className="btn btn-info btn-lg btn-block"
                                            type="button"
                                            onClick={handleLogin}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                alt="Login image"
                                className="w-100 vh-100"
                                style={{ objectFit: "cover", objectPosition: "left" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
