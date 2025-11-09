import React,{useState, useEffect} from 'react'
import {RxCross2} from 'react-icons/rx'
import './LoginModal.css'
import axios from 'axios'
 import { ToastContainer, toast } from 'react-toastify';

const LoginModal = ({isOpen, setIsOpen}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginType, setLoginType] = useState(true)
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  // const dispatch = useDispatch()
const successNotify = (msg) => toast.success(msg,{position: "bottom-right",});
const errorNotify = (msg) => toast.error(msg,{position: "bottom-right",});
  const signup = async() =>{

    

    let payload = {user_email:email,user_password:password} 
   try{
        const response = await axios.post(API_URL+'user/register',payload);
        
          if (response.status === 201 || response.status === 200) {
            
            successNotify(response.data.message || 'Registration successful!');
            setTimeout(()=>{
                setIsOpen(false)
                setEmail("");
                setPassword("");
                setLoginType(true);
            },6000)
          } else {
            errorNotify('An unexpected status was returned.'); 
          }
          }
          catch(err){
            if (err.response) {
            errorNotify(err.response.data.message || 'Registration failed.');
            
          } else {
            errorNotify('Network error or server unavailable.');
          }
    }
   
  }

  const login = async() =>{
    // const {data, error} = await supabase.auth.signInWithPassword({
    //   email,
    //   password
    // })
    // if(error){
    //   alert(error.message);
    //   return
    // }
  }

  return (
    isOpen ? (<div className="overlay">
       <ToastContainer />
      <div className="loginModel">
      
      <div className="left">
        <div className="left-container">
          <div className="login-title">
            <p className="login-des">
              Get Access to your Orders, whishlist and Recomantation
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <input 
        type="email" 
        className='login-input'
        placeholder='Email'
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />    

        <input 
        type="password" 
        className='login-input'
        placeholder='Password'
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />    
        <p className="termsandcon">
          By Continue, you agree to flipkart's {" "}
          <span style={{color:'blue'}}>Terms of use</span>
          <span style={{color:'blue'}}>Privacy policy</span>
        </p>
        {loginType?(
          <button className='login-btn'onClick={login}>Login</button>
        ):(
          <button className='login-btn' onClick={signup}>Signup</button>
        )}

        {loginType?(
          <p className="login-signup" onClick={()=>setLoginType(false)}>New to Flipkart? create an accont</p>
        ):(
          <p className="login-signup" onClick={()=>setLoginType(true)}>Already an User? Login to an account</p>
        )}
      </div>
          <div className="close" onClick={()=>setIsOpen(false)}>
              <RxCross2 />
          </div>
      </div>
    </div>):(<></>)
  )
}

export default LoginModal