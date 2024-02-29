import React, { useState } from "react";

const SimpleForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    subPassword: "",
    registred: false,
    authorized: false
  });

  const [term, setTerm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegis = () => {
    if (data.password !== data.subPassword) {
        console.error("Error - password are not same, please enter correct passwords");
        return;
    }
    console.log('User registered', data);
    data.registred = true;
  }
  
  const handleAuth = () => {
    if (data.name === term.name && data.email === term.email && data.password === term.password) {
      console.log('succefully authorazed');
      data.authorized = true;
      return;
    }
    console.error("Error - couldn't find user");
  }

  return (
      <>
      <h1>Simple Form</h1>
        <div>
          <h2>Registration Form</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleRegis(); }}>
                <input onChange={(e) => setData({...data, name: e.target.value})} type="text" placeholder="Enter name"  min={3}/>
                <input onChange={(e) => setData({...data, email: e.target.value})} type="email" placeholder="Enter email"/>
                <input onChange={(e) => setData({...data, password: e.target.value})} type="text" placeholder="Enter Password" min={6} required/>
                <input onChange={(e) => setData({...data, subPassword: e.target.value})} type="text" placeholder="Enter again password" min={6} required/>
                <button type="submit">Register</button>
            </form>

          <h2>Authorization Form</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAuth(); }}>
              <input onChange={(e) => setTerm({...data, name: e.target.value})} type="text" placeholder="Enter name" min={3}/>
              <input onChange={(e) => setTerm({...data, email: e.target.value})} type="email" placeholder="Enter email"/>
              <input onChange={(e) => setTerm({...data, password: e.target.value})} type="password" placeholder="Enter Password" min={6}/>
              <button type="submit">Authoriz</button>
            </form>
        </div>
      </>
  );
};

export default SimpleForm;
