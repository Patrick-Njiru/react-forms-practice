import PropTypes from 'prop-types'
import { useState } from 'react'

const ComplexForm = ({ setDetailedUsers }) => {
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    // gender: '',
    email: '',
    phoneNumber: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    setDetailedUsers(detailedUsers => {
      const newUser = {
        ...user,
        [e.target.name]: e.target.value,
        id: new Date().getTime().toString()
      }
      return [...detailedUsers, newUser]
    })
    console.log('User created')
    setUser({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      phoneNumber: ''
    })
  }

  return (
    <div>
      <form className='form-floating'>
        <legend className='text-center my-3'>Create Detailed User</legend>
        <fieldset>
          <label htmlFor="firstName"> First Name : </label>
          <input
            type="text"
            name='firstName'
            id='firstName'
            value={user.firstName}
            onChange={e => setUser({ ...user, [e.target.name]: e.target.value}) }
            className="form-control"              
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName"> Last Name : </label>
          <input
            type="text"
            name='lastName'
            id='lastName'
            value={user.lastName}
            onChange={e => setUser({ ...user, [e.target.name]: e.target.value}) }
            className="form-control"              
          />
        </fieldset>
        <fieldset>
          <label htmlFor="age"> Age : </label>
          <input
            type="number"
            name='age'
            id='age'
            value={user.age}
            onChange={e => setUser({ ...user, [e.target.name]: e.target.value}) }
            className="form-control"              
          />
        </fieldset>
        {/* <fieldset>
          <label htmlFor="gender"> Gender : </label>
          <input type="radio" name="gender" id="gender" value='Male' />
          <input type="radio" name="gender" id="gender" value='Female' />
          <input type="radio" name="gender" id="gender" value='I prefer not to say' />
          <input
            type="number"
            name='gender'
            id='gender'
            value={user.gender}
            onChange={e => setUser({ ...user, [e.target.name]: e.target.value}) }
            className="form-control"              
          />
        </fieldset> */}
        <fieldset>
          <label htmlFor="email"> Email : </label>
          <input
            type="email"
            name='email'
            id='email'
            value={user.email}
            onChange={e => setUser({ ...user, [e.target.name]: e.target.value}) }
            className="form-control"              
          />
        </fieldset>
        <fieldset>
          <label htmlFor="phoneNumber"> Phone Number :  </label>
          <input
            type="tel"
            name='phoneNumber'
            id='phoneNumber'
            value={user.phoneNumber}
            onChange={e => setUser({ ...user, [e.target.name]: e.target.value}) }
            className="form-control"              
          />
        </fieldset>
        <button
          type="submit"
          className="btn btn-primary btn-md"
          onClick={handleSubmit}
        >
          Create User
        </button>
      </form>
    </div>
  )
}

ComplexForm.propTypes = { setDetailedUsers : PropTypes.any.isRequired }

export default ComplexForm