import React from 'react'
import PropTypes from 'prop-types'
import UsersTable from '../components/UsersTable'

const SimpleUsers = ({users}) => {
  return (
    <div>
      <UsersTable email={'example'} />          
    </div>
  )
}

SimpleUsers.propTypes = { users: PropTypes.array.isRequired }

export default SimpleUsers