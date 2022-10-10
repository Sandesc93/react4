import React from 'react'
import './styles/delete.css'

const DeleteCard = ({setDeleteCard, deleteUserById, user}) => {
    
  const handleCloseDel = () => {
    setDeleteCard(true)
  }


    return (
    <div className='delete__card'>
        <h1 className='delete__tittle'>Are you sure?</h1>
    <div className='delete__btn'>
    <button onClick={()=>deleteUserById(user.id)} className='delete__yes'>Yes</button>
    <button onClick={handleCloseDel} className='delete__no'>No</button>
    </div>
    </div>
  )
}

export default DeleteCard