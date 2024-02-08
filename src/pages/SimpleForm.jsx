import PropTypes from 'prop-types'
import { useState } from 'react'

const SimpleForm = ({ users,  setUsers }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const newUser = { id: new Date().getTime().toString(), userName, email }
    setUsers([...users, newUser])
    console.log('User created')
    setUserName('')
    setEmail('')
  }
  
  return (
    <div>
      <form className='form-floating ' onSubmit={handleSubmit}>
        <legend className='text-center my-3'>Create Simple User</legend>
        <fieldset>
          <input
            type="text"
            name='username'
            id='username'
            value={userName}
            onChange={e => setUserName(e.target.value) }
            className="form-control"
            placeholder='John Doe'
          />
          <label htmlFor="username"> Username : </label>
        </fieldset>
        <fieldset>
          <input
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value) }
            className="form-control"
            placeholder='example@gmail.com'
          />
          <label htmlFor="email"> Email :  </label>
        </fieldset>
        {/* <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div> */}


        <button type="submit" className="btn btn-primary btn-md"> Create User </button>
      </form>
    </div>
  )
}

SimpleForm.propTypes = {
  users: PropTypes.any.isRequired,
  setUsers: PropTypes.any.isRequired
}

export default SimpleForm