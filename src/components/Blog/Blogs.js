import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Blog from './Blog';

const Blogs = () => {

    const fakeData = [
        {
            title: '⚠️ npm ERR! Unexpected end of JSON input while parsing near [Solved]',
            subheading: 'npm cache data occupy some disk space. When this disk space is full, you have to clear the npm cache.',
            publishDate: 'Oct 21 . 1 min read',
            image: 'https://miro.medium.com/max/700/1*vKLm7my1uw8r54p_ttIMzg.png',
            readmore: 'https://taibislamdipu.medium.com/npm-err-unexpected-end-of-json-input-while-parsing-near-solved-8848117dfbc4',
        },
        {
            title: '✔️ 5 Best Practice Every Programmer Should Know',
            subheading: 'Those 5 things will improve your code architecture and easily understandable to other programmers.',
            publishDate: 'Oct 7 . 2 min read',
            image: 'https://miro.medium.com/max/700/0*mAWpcR33Q6JIdmnh',
            readmore: 'https://taibislamdipu.medium.com/5-best-practice-every-programmer-should-know-f7da84405ce4',
        },


    ]

    return (
        <div>
            {/* <Navbar></Navbar> */}

            <div className="container mt-5">
                <h1 className="text-center">Blogs</h1>
                <hr />
            </div>

            <div>
                {
                    fakeData.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;