import PropTypes from 'prop-types'
import UsersTable from '../components/UsersTable'

const DetailedUsers = ({ detailedUsers }) => {
  return (
    <div>
      <UsersTable gender='inter' /> 
    </div>
  )
}

DetailedUsers.propTypes = { detailedUsers : PropTypes.array.isRequired }

export default DetailedUsers