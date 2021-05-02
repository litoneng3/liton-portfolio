import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className="mb-5">
            <nav style={{zIndex:'1.3'}} class="navbar navbar-expand-lg navbar-light bg-secondary text-info fixed-top mb-5">
                <div class="container-fluid ms-5">
                    <Link class="navbar-brand nav-hover text-white" to="/about">Liton Hossain</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active nav-hover text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-hover text-white" to="/about">About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-hover text-white" to="/allProjects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-hover text-white" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link nav-hover text-white" to="/contact">Contact Me</Link>
                            </li>
                            <li className="nav-link"><a href="https://drive.google.com/uc?export=download&id=1QYudP85u7LC_YCYUymQiEPwpXNHwtgUL" role="button" target="_blank">Resume <FontAwesomeIcon icon={faDownload} /></a></li>
                           

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;