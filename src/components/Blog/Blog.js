import React from 'react';

const Blog = ({ blog }) => {

    const { title, description, image, readmore, subheading, publishDate } = blog;

    return (
        <div className="container d-flex my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>{title}</h2>
                    <p className="text-secondary">{subheading}</p>
                    <p className="text-secondary" style={{ fontSize: '12px' }}>{publishDate}</p>
                    <a href={readmore} target="_blank"><button className="btn btn-outline-dark mr-3 font-weight-bold">Read More</button></a>
                </div>

                <div className="col-md-6 projectImg">
                    <img src={image} className=" img-fluid mt-3" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;