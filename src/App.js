import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: 'Meiri', username: 'meiri.i' },
    { id: 2, name: 'Bernardina', username: 'bernarndina.a' },
    { id: 3, name: 'Rodrigues', username: 'rodrigues.s' },
  ]

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App usando HOOK:</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
    <div>
      <h2>Editar usuário:</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Adicionar usuário:</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
        <div className="flex-large">
          <h2>Tabela de usuários cadastrados:</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
    
  )

}

export default App