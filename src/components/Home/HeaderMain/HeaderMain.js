import React from 'react';
import liton from '../../../image/liton.jpg';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const HeaderMain = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h2 style={{ color: '#1CC7C1' }}>Md. Liton Hossain</h2>
                    <h5>Front End Wev Developer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet et rerum neque, officia blanditiis maiores perspiciatis saepe obcaecati dolore quisquam tempore est repudiandae assumenda quia sapiente accusamus quasi nulla.</p>

                    <a class="btn btn-primary" href="https://drive.google.com/uc?export=download&id=1QYudP85u7LC_YCYUymQiEPwpXNHwtgUL" role="button" target="_blank">Download Resume <FontAwesomeIcon icon={faDownload} /></a>
                    <a href="https://www.linkedin.com/in/md-liton-hossain-750510203/" target="_blank" rel="noopener noreferrer"><button className="btn btn-success ms-3">Hire Me</button></a>

                </div>
                <div className="col-md-6">
                    <img src={liton} alt="" />
                </div>
            </div>
        </div>

    );
};

export default HeaderMain;