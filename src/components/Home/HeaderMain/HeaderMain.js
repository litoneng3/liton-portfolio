import React from 'react';
import liton from '../../../image/liton.jpg';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import profile1 from '../../../image/profile1.png';
import profile2 from '../../../image/profile2.png';
import Typical from 'react-typical';

const HeaderMain = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row d-flex align-item-center">
                <div className="col-md-6">
                    <h2 style={{ color: '#1CC7C1' }}>Md. Liton Hossain</h2>
                    <h5>I'm a <span>
                    <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[' Front End Wev Developer', 1000,
                                ' Javascript Developer', 1000,
                                ' React Developer', 1000

                            ]}

                        />
                        </span>
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet et rerum neque, officia blanditiis maiores perspiciatis saepe obcaecati dolore quisquam tempore est repudiandae assumenda quia sapiente accusamus quasi nulla.</p>

                    <a class="btn btn-primary" href="https://drive.google.com/uc?export=download&id=1QYudP85u7LC_YCYUymQiEPwpXNHwtgUL" role="button" target="_blank">Download Resume <FontAwesomeIcon icon={faDownload} /></a>
                    <a href="https://www.linkedin.com/in/md-liton-hossain-750510203/" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-warning ms-3">Hire Me</button></a>

                </div>
                <div className="col-md-6 pt-3">
                    <img src={profile1} alt="" />
                </div>
            </div>
        </div>

    );
};

export default HeaderMain;