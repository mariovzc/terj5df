import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { users: [] }
  }
  handleSubmit (event) {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const newUser = {
      firstName: data.get('first-name'),
      lastName: data.get('last-name')
    }
    this.setState({
      users: this.state.users.concat(newUser)
    })
    form.reset()
  }
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-sm-offset-3'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='first-name'>Nombre</label>
                <input type='text' className='form-control' name='first-name' />
              </div>

              <div className='form-group'>
                <label htmlFor='last-name'>Apellido</label>
                <input type='text' className='form-control' name='last-name' />
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


