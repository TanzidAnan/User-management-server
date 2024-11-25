import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  const hendleAddUser =(e) =>{
    e.preventDefault();
    const form =e.target;
    const name =form.name.value;
    const email =form.email.value;
    const password =form.password.value;
    const user ={name,email,password}
    console.log(user);
    fetch('http://localhost:5000/users',{
      method:'pOST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
  }

  return (
    <>
      <h1>User management system {users.length}</h1>
      <form onSubmit={hendleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="text" name="email" id="" />
        <br />
        <input type="text" name="password" id="" />
        <br />
        <input type="submit" value="User Add" />
      </form>
      <div>
        {
          users.map((user,idx) =><li key={idx}>{user.name} : {user.email}</li>)
        }
      </div>
    </>
  )
}

export default App
