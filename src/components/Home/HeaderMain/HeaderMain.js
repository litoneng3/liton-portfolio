import React from 'react';
import liton from '../../../image/liton.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="container row">
            <div className="col-md-6">
                <h2>Md. Liton Hossain</h2>
                <h5>Front End Wev Developer</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet et rerum neque, officia blanditiis maiores perspiciatis saepe obcaecati dolore quisquam tempore est repudiandae assumenda quia sapiente accusamus quasi nulla.</p>

                <a class="btn btn-primary" href="https://drive.google.com/uc?export=download&id=1QYudP85u7LC_YCYUymQiEPwpXNHwtgUL" role="button" target="_blank">Download Resume</a>

            </div>
            <div className="col-md-6">
                <img src={liton} alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;