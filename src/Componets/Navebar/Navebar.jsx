import { FaCaretDown } from "react-icons/fa";
import { BsPlayFill, BsFillCircleFill, BsSearch } from "react-icons/bs";
import './Navebar.css';
import world from '../../Assets/users/world.png';
import SignupModal from "../CreateModal/SignupModal";
import { useState } from "react";
import SignupModal2 from "../SignupModal/SignupModal2";

function Navebar() {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <nav className='px-2 lg-px-5 d-flex justify-content-end d-lg-block my-2'>
            <SignupModal setOpen={setOpen} open={open} setOpen2={setOpen2}></SignupModal>
            <SignupModal2 open2={open2} setOpen2={setOpen2} setOpen={setOpen}></SignupModal2>
            <div className='d-none d-lg-flex justify-content-between align-items-center'>
                <p className='fs-3 text-uppercase logo-color2 mb-0'><span className='log-color'>ATG.</span>W
                    <img height={24} src={world} alt="world" className='mb-1' />
                    RLD</p>
                <label className='search d-flex align-items-center'>
                    <BsSearch />
                    <input type="text" placeholder='Search for your favorit groups in ATG' />
                </label>
                <div className="menu-div">
                    <p onClick={()=> setOpen(true)} className='mb-0'>Create account. <span className='sign-color'>It's free!</span> <FaCaretDown /></p>
                </div>
            </div>
            <div className='min-menu d-lg-none d-flex'>
                <span className='dot1'>
                    <BsFillCircleFill />
                </span>
                <span className='dot2 ms-2'>
                    <BsFillCircleFill />
                </span>
                <span onClick={()=> setOpen(true)} className='dot3 ms-2'>
                    <BsPlayFill size={25} />
                </span>
            </div>
        </nav>
    );
}

export default Navebar;