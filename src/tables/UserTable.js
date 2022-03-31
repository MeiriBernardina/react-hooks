import React from "react";
import './UserTable.css';


const UserTable = (props) => (
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Usuário</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
            props.users.map((user) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
            <button onClick={() => { props.editRow(user)}} className="button1 muted-button">Editar</button>
            <button onClick={() => props.deleteUser(user.id)} className="button2 muted-button">Deletar</button>
          </td>
        </tr>
        ))
        ) : (
            <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
  
  export default UserTable

