import React, {useState} from 'react'
  
const UserForm = () => { 

const [fullName, setFullName] = useState({
    fname : '',
    lname : '',
    email : '',
    phone : '',
    qua : ''
})

const inputEvent = (event) => {
  console.log(event.target.value);
  console.log(event.target.name);

  const {name, value} = event.target

  setFullName((preValue) => {
  
    return {
        ...preValue,
        [name] : value
    }

    //  if(name === 'fName')
    //  {
    //      return {
    //        fname : value,
    //        lname : preValue.lname,
    //        email : preValue.email,
    //        phone : preValue.phone
    //      }
    //  }
    //  else if(name === 'lName')
    //  {
    //      return {
    //        fname : preValue.fname,
    //        lname : value,
    //        email : preValue.email,
    //        phone : preValue.phone
    //   }
    //  }
    //  else if(name === 'email')
    //  {
    //      return {
    //        fname : preValue.fname,
    //        lname : preValue.lname,
    //        email : value,
    //        phone : preValue.phone
    //   }
    //  }
    //  else if(name === 'phone')
    //  {
    //      return {
    //        fname : preValue.fname,
    //        lname : preValue.lname,
    //        email : preValue.email,
    //        phone : value
    //   }
    //  }
  })
}

const onSubmit = (event) => {
   event.preventDefault();
}

   return (
      <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <small> {fullName.phone}</small>
            <small> {fullName.qua}</small>
            <input 
              type="text"
              name="fname"
              placeholder="Enter Your First Name"
              onChange={inputEvent} 
              value={fullName.fname}
            />
            <input 
              type="text"
              name="lname"
              placeholder="Enter Your Last Name"
              onChange={inputEvent} 
              value={fullName.lname}
            />
             <input 
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={inputEvent} 
              value={fullName.email}
              autoComplete="off"
            />
             <input 
              type="number"
              name="phone"
              placeholder="Enter Your Phone No"
              onChange={inputEvent} 
              value={fullName.phone}
            />
             <input 
              type="text"
              name="qua"
              placeholder="Enter Your Qualification"
              onChange={inputEvent} 
              value={fullName.qua}
            />
            <button type="submit">Click Me 👍</button>
          </div>
        </form>
      </div>  
      </>
   )
}

export default UserForm;