import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Blog = ({ blog }) => {

    const { title, image, readmore, subheading, publishDate } = blog;

    return (
        <div className="container d-flex my-5">
            <div className="row">
                <div className="col-md-6 animate__animated animate__fadeInLeft animate__slow">
                    <a href={readmore} target="_blank"><h2>{title}</h2></a>
                    <p className="text-secondary">{subheading}</p>
                    <p className="text-secondary" style={{ fontSize: '12px' }}>{publishDate}</p>
                    <a href={readmore} target="_blank" className="btn btn-outline-dark mr-3 font-weight-bold">
                        <span className="mr-2">Read More</span><FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>

                <div className="col-md-6 projectImg animate__animated animate__fadeInRight animate__slow">
                    <a href={readmore} target="_blank"><img src={image} className="img-fluid mt-3 card " alt="card image" /></a>
                </div>
            </div>
        </div>
    );
};

export default Blog;