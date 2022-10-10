import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import DeleteCard from './components/DeleteCard'
import UserCard from './components/UserCard'
import UsersForm from './components/UsersForm'

const baseUrl = 'https://users-crud1.herokuapp.com'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setcloseForm] = useState(true)
  const [deleteCard, setDeleteCard] = useState(true)

  const getAllUsers = () => {
    const url = `${baseUrl}/users/`

    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  //creando usuarios  
  const createNewUser = data => {
    const url = `${baseUrl}/users/`

    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }
  //borrando usuarios
  const deleteUserById = id => {
    const url = `${baseUrl}/users/${id}/`

    axios.delete(url)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setDeleteCard(true)
      })
      .catch(err => console.log(err))

  }

  //actualizar usuarios

  const updateUser = (id, data) => {
    const url = `${baseUrl}/users/${id}/`

    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenForm = () => {
    setcloseForm(false)
  }

  return (
    <div className="App">
      <div className='app__container'>
        <h1 className='app__tittle'>Users CRUD</h1>
        <button onClick={handleOpenForm} className='app__btn'>Create User</button>
      </div>

      <div className={`form-container ${closeForm && 'disable__form'}`}>
        <UsersForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUser={updateUser}
          setUpdateInfo={setUpdateInfo}
          setcloseForm={setcloseForm}
        />
      </div>
      <div className={`delete-container ${deleteCard && 'del_no'}`}>
      {
        users?.slice(0,1).map(user=>(
              <DeleteCard
                key={user.id}
                setDeleteCard={setDeleteCard}
                deleteUserById={deleteUserById}
                user={user}
               />
        ))
      }
      </div>

      <div className='users-container'>

        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              setUpdateInfo={setUpdateInfo}
              setcloseForm={setcloseForm}
              setDeleteCard={setDeleteCard}
              deleteUserById={deleteUserById}
            />
          ))
        }

      </div>
    </div>
  )
}

export default App
