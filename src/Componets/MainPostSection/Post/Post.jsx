import React, { useState } from 'react';
import './Post.css';
import { FaEye } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";

const Post = ({ post }) => {

    const [edit, setEdit] = useState(false);

    return (
        <div className='post'>
            <img className='w-100' src={post.img} alt="post-img" />
            <p className='type my-1 lg-my-2'>{post.type}</p>
            <div className='d-flex justify-content-between'>
                <p className='title mb-2'>{post.title}</p>
                <span onClick={()=> setEdit(!edit)} className={`edit position-relative ${edit? 'editbg' : ''}`}><BiDotsHorizontal />
                    {
                        edit &&
                        <ul className='list-unstyled position-absolute'>
                            <li>Eidit</li>
                            <li>Report</li>
                            <li>Option 3</li>
                        </ul>
                    }
                </span>
            </div>
            <p className='discription'>{post.discription}</p>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={post.userImg} alt="" />
                    <div className='ms-3'>
                        <p className='user-name mb-0'>{post.userName}</p>
                        <p className='view mb-0 d-lg-none'>{post.views} view</p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <span className='view d-none d-lg-block'><FaEye /> {post.views} view</span>
                    <span className='shear d-flex justify-content-center align-items-center'>
                        <img src='https://i.ibb.co/QC4B3R0/shear.png' alt="shear" />
                        <span className='ms-2 d-block d-lg-none'>Shear</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Post;