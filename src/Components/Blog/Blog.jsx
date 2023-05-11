import React from 'react';

const Blog = (props) => {
    const { id, img, author, time, title } = props.blog;
    console.log(author);
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>author name: <br />15 April (few days ago) </p>
                </div>
                <p>read time: </p>
            </div>
        </div>
    );
};

export default Blog;