import React from 'react'
import './styles/card.css'

const UserCard = ({user, setUpdateInfo, setcloseForm, setDeleteCard, deleteUserById }) => {
  
  const handleEdit = () =>{
    setUpdateInfo(user)
    setcloseForm(false)
  }

  const handleDeleteCard = ()=>{
    setDeleteCard(false)
  }

  return (
    <article className='user'>
        <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr />
        <ul className='user__list'>
            <li className='user__item'><span className='user__span'>Email</span>{user.email}</li>
            <li className='user__item'><span className='user__span'>Birthday</span>{user.birthday}</li>
        </ul>
        <footer className='user__footer'>

        <button  className='user__btn' onClick={handleDeleteCard}>
        <i  className=" user__trash fa-solid fa-trash-can"></i>
        </button>
        <button className='user__btn' onClick={handleEdit}>
        <i  className="user__edit fa-regular fa-pen-to-square"></i>
        </button>
        </footer>
    </article>
  )
}

export default UserCard