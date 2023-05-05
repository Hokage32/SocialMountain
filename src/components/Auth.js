import {useState} from 'react'
import axios from 'axios'
import { useContext } from 'react'
import AuthContext from '../store/authContext'
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(true)

   const authCtx = useContext(AuthContext)
 
   const submitHandler = e => {
       e.preventDefault()
       

       

    const myBod = {
        username: username,
        password: password
    }


        if(register){
            axios
            .post("http://localhost:4005/register", myBod)
            .then((res) => {
                console.log(res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
            })
            .catch((err) => {
                console.log(err)
            })

        }else {
            axios
            .post("http://localhost:4005/login",myBod)
            .then((res) => {
                console.log(res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
            })
            .catch((err) => {
                console.log(err)
            })
        }


 
       console.log('submitHandler called')
   }


 
   return (
       <main>
           <h1>Welcome!</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
               <input
                   className='form-input'
                   type='text'
                   placeholder='Username'
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   
                   />
                   
               <input
                   className='form-input'
                   type='text'
                   placeholder='Password'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   
                   
                   
                   />
               <button className='form-btn'>
                   {register ? 'Sign Up' : 'Login'}
               </button>
           </form>
           <button onClick={() => {setRegister(!register)}} className='form-btn'>Need to {register ? 'Login' : 'Sign Up'}?</button>
       </main>
   )
}
 
export default Auth