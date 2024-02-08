// import PropTypes from 'prop-types'


// const bootstrapTable = <table class="table">
//     <thead>
//       <tr>
//         <th scope="col">#</th>
//         <th scope="col">First</th>
//         <th scope="col">Last</th>
//         <th scope="col">Handle</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">1</th>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//       </tr>
//       <tr>
//         <th scope="row">2</th>
//         <td>Jacob</td>
//         <td>Thornton</td>
//         <td>@fat</td>
//       </tr>
//       <tr>
//         <th scope="row">3</th>
//         <td colspan="2">Larry the Bird</td>
//         <td>@twitter</td>
//       </tr>
//     </tbody>
//   </table>


const UsersTable = props => {
  const [gender, userName] = props


  return (
    <div className="table">
      { gender &&
          <table>
            <thead className='text-center'> Detailed Data of All Created Users</thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            <tr>
              <td>row 1</td>
              <td>row 1</td>
              <td>row 1</td>
              <td>row 1</td>
              <td>row 1</td>
              <td>row 1</td>
            </tr>
            <tr>
              <td>row 2</td>
              <td>row 2</td>
              <td>row 2</td>
              <td>row 2</td>
              <td>row 2</td>
              <td>row 2</td>
            </tr>
            <tr>
              <td>row 3</td>
              <td>row 3</td>
              <td>row 3</td>
              <td>row 3</td>
              <td>row 3</td>
              <td>row 3</td>
            </tr>
            <tr>
              <td>row 4</td>
              <td>row 4</td>
              <td>row 4</td>
              <td>row 4</td>
              <td>row 4</td>
              <td>row 4</td>
            </tr>
            <tr>
              <td>row 5</td>
              <td>row 5</td>
              <td>row 5</td>
              <td>row 5</td>
              <td>row 5</td>
              <td>row 5</td>
            </tr>
          </table>
      }
      { userName &&
          <table>
            <thead className='text-center'> Simple Data of All Created Users</thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>row 1</td>
              <td>row 1</td>
            </tr>
            <tr>
              <td>row 2</td>
              <td>row 2</td>
            </tr>
            <tr>
              <td>row 3</td>
              <td>row 3</td>
            </tr>
            <tr>
              <td>row 4</td>
              <td>row 4</td>
            </tr>
            <tr>
              <td>row 5</td>
              <td>row 5</td>
            </tr>
          </table>
      }
    </div>
  )
}

// UsersTable.propTypes = {
  // gender : PropTypes.any.isRequired
// }

export default UsersTable