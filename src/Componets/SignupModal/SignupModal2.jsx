import React from 'react';
import { RxCross1 } from "react-icons/rx";
import singbanner from '../../Assets/post/signinbanner.png';
import { BsFacebook, BsGoogle } from "react-icons/bs";

const SignupModal2 = ({ setOpen2, open2, setOpen }) => {
    return (
        <div className={`main-container ${open2 ? 'd-block' : 'd-none'}`}>
            <div className={`signup-modal`}>
                <p onClick={() => setOpen2(false)} className='text-end'>
                    <RxCross1 size={25} className='close' />
                </p>
                <div className='modalbody'>
                    <p className='title'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <div className='form-div d-flex justify-content-between'>
                        <div className='w-100 w-lg-50 main-form'>
                            <p>Sign In</p>
                            <input className='w-100 p-2' type='text' placeholder='Email'></input>
                            <input className='w-100 p-2' type='text' placeholder='Password'></input>
                            <input className='w-100 p-2' type='text' placeholder='Confirm Password'></input>

                            <div className='d-flex justify-content-between align-items-center'>
                                <button className='submit'>Sign In</button>
                                <p className='fp text-end d-block d-lg-none mb-0'><span className='fs-6' onClick={() => {
                                    setOpen2(false)
                                    setOpen(true)
                                }}>Or,Create account</span></p>
                            </div>
                            <button className='facebook w-100'><BsFacebook className='me-2' />Sign Up with Facebook</button>
                            <button className='google w-100'><BsGoogle className='me-2' />Sign Up with Google</button>

                        </div>
                        <div className='w-lg-50 img-div d-none d-lg-block'>
                            <p className='fp text-end'>Don’t have an account yet?<span className='sing-color' onClick={() => {
                                setOpen2(false)
                                setOpen(true)
                            }}>Create new for free!</span></p>
                            <img className='w-100' src={singbanner} alt="" />
                            <p className='last-p text-center'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupModal2;