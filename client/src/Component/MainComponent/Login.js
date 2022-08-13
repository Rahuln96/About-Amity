import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Login = () => {
      axios.post("http://localhost:9002/Login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/")
      })
  }

  return (
    <div>
        <div className="signup text-white">
  <div className="row">
    <div className="col-4" />
    <div className="col-4 signformbg">
      <h2>Login Here</h2>
      <div>

  <div className="mb-3 mt-4">
   
    <input
      type="email"
      name="email" value={user.email} onChange={handleChange}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp" placeholder='Enter your Email'
    />
   
  </div>
  <div className="mb-3">
    <input
      type="password"
      name="password" value={user.password} onChange={handleChange}
      className="form-control"
      id="exampleInputPassword1" placeholder='Password'
    />
  </div>
  
 
  <button type="submit" className="btn btn-primary " onClick={Login}>
    Submit
  </button>
</div>

      <br />
      <p style={{ color: "white" }}>
        Not have an account?<button  onClick={() => navigate("/Signup")} className='text-info btn1'>Signup</button>
      </p>
      <br />
    </div>
    <div className="col-4" />
  </div>
</div>

    </div>
  )
}

export default Login
