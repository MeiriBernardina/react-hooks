import React, { useState, useEffect } from 'react'
import './EditUserForm.css';

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Nome</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Usuário</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className='button'>Atualizar usuário</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>
  )
}

export default EditUserForm