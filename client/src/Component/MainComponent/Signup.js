import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      name: "",
      email:"",
      password:"",
      reEnterPassword: ""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const Signup = () => {
      const { name, email, password, reEnterPassword } = user
      if( name && email && password && (password === reEnterPassword)){
          axios.post("http://localhost:9002/Signup", user)
          .then( res => {
              alert(res.data.message)
              navigate("/Login")
          })
      } else {
          alert("invlid input")
      }
      
  }
  return (
    <div>
     <div className="signup text-white">
  <div className="row">
    <div className="col-4" />
    <div className="col-4 signformbg">
      <h2>Sign Up Here</h2>
      <div>
  <div className="mb-3 mt-4">
   
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      name="name" value={user.name}
      aria-describedby="emailHelp" placeholder='Enter your Name'
      onChange={ handleChange }
    />
   
  </div>
  <div className="mb-3 mt-4">
   
    <input
      type="email"
      className="form-control"
      name="email" value={user.email}
      id="exampleInputEmail1"
      aria-describedby="emailHelp" placeholder='Enter your Email'
      onChange={ handleChange }
    />
   
  </div>
  <div className="mb-3">
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1" placeholder='Password'
      onChange={ handleChange }
      name="password" value={user.password}
    />
  </div>
  <div className="mb-3">
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1" placeholder='Confirm Password'
      name="reEnterPassword" value={user.reEnterPassword}
      onChange={ handleChange }
    />
  </div>
 
  <button type="submit" onClick={Signup} className="btn btn-primary">
    Submit
  </button>
</div>

      <br />
      <p style={{ color: "white" }}>
        Already have an account?<button onClick={() => navigate("/Login")} className='text-info btn1'>Login Here</button>
      </p>
      <br />
    </div>
    <div className="col-4" />
  </div>
</div>

    </div>
  )
}
export default Signup