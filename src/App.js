import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.firstNameHandle = this.firstNameHandle.bind(this)
    this.lastNameHandle = this.lastNameHandle.bind(this)
    this.state = {users: [], user: {firstName: '', lastName: ''}}
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      users: this.state.users.concat(this.state.user),
      user: {firstName: '', lastName: ''}
    })
    event.target.reset()
  }
  firstNameHandle (event) {
    this.setState({
      user: {firstName: event.target.value, lastName: this.state.user.lastName}
    })
  }
  lastNameHandle (event) {
    this.setState({
      user: {firstName: this.state.user.firstName, lastName: event.target.value}
    })
  }
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='first-name'>Nombre</label>
                <input type='text' onChange={this.firstNameHandle} className='form-control' name='first-name' />
              </div>

              <div className='form-group'>
                <label htmlFor='last-name'>Apellido</label>
                <input type='text' onChange={this.lastNameHandle} className='form-control' name='last-name' />
              </div>

              <div className='action'>
                <button type='submit' className='btn btn-primary'>Agregar Invitado</button>
              </div>
            </form>

            <table className='table bordered-table table-striped'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {user.firstName}
                      </td>
                      <td>
                        {user.lastName}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


