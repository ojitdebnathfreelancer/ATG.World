import React, { useEffect, useState } from 'react';
import './MainPostSection.css';
import Post from './Post/Post';
import { FaCaretDown, FaUsers, FaPen, FaEye } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillLike, AiTwotoneCalendar } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const MainPostSection = () => {

    const [posts, setPosts] = useState([]);
    const [write, setWrite] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        fetch('post.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className='main-post-section mx-auto px-2'>
            <div className='col top-header d-flex justify-content-between'>
                <p className='min-btn1 d-lg-none'>Post(368)</p>
                <p className='min-btn2 d-lg-none'>Filter All: <FaCaretDown /></p>
                <ul className='list-unstyled d-none d-lg-flex'>
                    <li className='active'>All Post(32)</li>
                    <li>Artical</li>
                    <li>Event</li>
                    <li>Education</li>
                    <li>Job</li>
                </ul>
                <div className='post-btn d-none d-lg-block'>
                    <button className='btn-bg1'>Write a Post <FaCaretDown /></button>
                    <button className='btn-bg2'>Join Group <FaUsers /></button>
                </div>
            </div>
            <div className='col main-post'>
                <div className='row'>
                    <div className='col-lg-8 poster-left'>
                        {
                            posts.map(post => <Post key={post.id} post={post}></Post>)
                        }
                        <div className='post'>
                            <img className='w-100' src="https://i.ibb.co/yBTtKTb/post3.png" alt="post-img" />
                            <p className='type my-2'>🗓️ Meetup</p>
                            <div className='d-flex justify-content-between'>
                                <p className='title'>Finance & Investment Elite Social Mixer @Lujiazui</p>
                                <span onClick={() => setEdit(!edit)} className={`edit position-relative ${edit ? 'editbg' : ''}`}><BiDotsHorizontal />
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
                            <div className='visit-button'>
                                <p className='mb-0'><span> <AiTwotoneCalendar className='me-1' />Fri, 12 Oct, 2018</span> <span className='ms-5'><IoLocationOutline /> Ahmedabad, India</span></p>
                                <button className='my-4'>Visit Website</button>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src="https://i.ibb.co/cDH6TyS/user3.png" alt="user" />
                                    <div className='ms-3'>
                                        <p className='user-name mb-0'>Ronal Jones</p>
                                        <p className='view mb-0 d-lg-none'>1.4k view</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='view d-none d-lg-block'><FaEye /> 1.4k view</span>
                                    <span className='shear d-flex justify-content-center align-items-center'>
                                        <img src='https://i.ibb.co/QC4B3R0/shear.png' alt="shear" />
                                        <span className='ms-2 d-block d-lg-none'>Shear</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* number three post  */}
                        <div className='post'>
                            <p className='type my-2'>💼️ Job</p>
                            <div className='d-flex justify-content-between'>
                                <p className='title'>Software Developer</p>
                                <span onClick={() => setEdit(!edit)} className={`edit position-relative ${edit ? 'editbg' : ''}`}><BiDotsHorizontal />
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
                            <div className='visit-button'>
                                <p className='mb-0'><span> <AiTwotoneCalendar className='me-1' />Fri, 12 Oct, 2018</span> <span className='ms-5'><IoLocationOutline /> Ahmedabad, India</span></p>
                                <button className='my-4 text-info'>Visit Website</button>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src="https://i.ibb.co/MfzJpDj/user4.png" alt="user" />
                                    <div className='ms-3'>
                                        <p className='user-name mb-0'>Joseph Gray</p>
                                        <p className='view mb-0 d-lg-none'>1.4k view</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='view d-none d-lg-block'><FaEye /> 1.4k view</span>
                                    <span className='shear d-flex justify-content-center align-items-center'>
                                        <img src='https://i.ibb.co/QC4B3R0/shear.png' alt="shear" />
                                        <span className='ms-2 d-block d-lg-none'>Shear</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* number foure post  */}
                        <button className='phone-post d-lg-none'>
                            <FaPen />
                        </button>
                    </div>
                    <div className='poster-right col-lg-4 d-none d-lg-flex justify-content-center'>
                        <div className='center-dive'>
                            <div className='location'>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <span>
                                        <GrLocation />
                                        <input readOnly={write ? write : ''} type="text" defaultValue='Nodi, India' placeholder='Enter your location' />
                                    </span>
                                    <span onClick={() => setWrite(!write)}>
                                        {
                                            write ? <FaPen /> : <RxCross2 />
                                        }
                                    </span>
                                </label>
                                <p className='mb-0 d-flex mt-4'>
                                    <p className='mb-0 me-1'>
                                        <BiErrorCircle />
                                    </p>
                                    Your location will help us serve better and extend a personalised experience.
                                </p>
                            </div>
                            <div className='user-list mt-5'>
                                <p className='text-uppercase d-flex align-items-center'><span className='d-flex align-items-center me-1'><AiFillLike width={16} height={15} /></span> <span>REcommended Groups</span></p>
                                <div className='list'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <img height={36} src="https://i.ibb.co/MfzJpDj/user4.png" alt="user" />
                                            <span className='ms-2'>Leisure</span>
                                        </div>
                                        <button>Follow</button>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mt-4'>
                                        <div>
                                            <img height={36} src="https://i.ibb.co/MgT5pCX/user1.png" alt="user" />
                                            <span className='ms-2'>Activism</span>
                                        </div>
                                        <button>Follow</button>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mt-4'>
                                        <div>
                                            <img height={36} src="https://i.ibb.co/cDH6TyS/user3.png" alt="user" />
                                            <span className='ms-2'>MBA</span>
                                        </div>
                                        <button>Follow</button>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mt-4'>
                                        <div>
                                            <img height={36} src="https://i.ibb.co/jW3C71d/user2.png" alt="user" />
                                            <span className='ms-2'>Philosophy</span>
                                        </div>
                                        <button>Follow</button>
                                    </div>
                                    <p className='text-end mt-5 text-info'>See More...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPostSection;