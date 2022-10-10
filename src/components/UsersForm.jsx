import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/form.css'

const defaultValues={
    email:'',
    password:'',
    first_name:'',
    last_name:'',
    birthday:''
}


const UsersForm = ({createNewUser, updateInfo, updateUser, setUpdateInfo, setcloseForm}) => {
    
    const {handleSubmit,reset,register,} = useForm()

    useEffect(()=>{
        if(updateInfo){
        reset(updateInfo)
        }

    },[updateInfo])
    
    //updateInfo recibe los datos actualizados, por tanto lo paso como parámetro en id
   //setupdateinfo lo paso para que actualice el estado y cambie a create
    const submit = data =>{
        if(updateInfo){
            //update
            updateUser(updateInfo.id, data)
            setUpdateInfo()
        }else{
            //create    
            createNewUser(data)
        }
        reset(defaultValues)
        setcloseForm(true)
    }

    const handleCloseForm = () =>{
        setcloseForm(true)
    }
    
    return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i  onClick={handleCloseForm} className='form__x fa-solid fa-xmark'></i>
        <h2 className='form__tittle'>{updateInfo? 'Update User' : 'New User'}</h2>
        <p className='form__p'>Entry this data please</p>
        <div className='form__div'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' placeholder='enter your email' type="email" id='email' {...register('email')}/>            
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="password">Password</label>
            <input className='form__input' placeholder='enter your password' type="password" id='password' {...register('password')} />            
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="first_name">First Name</label>
            <input className='form__input' placeholder='enter your first name' type="text" id='first_name' {...register('first_name')} />            
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">Last Name</label>
            <input className='form__input' placeholder='enter your last name' type="text" id='last_name' {...register('last_name')} />            
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="birthday">Birthday</label>
            <input className='form__input' type="date" id='birthday' {...register('birthday')} />            
        </div>
        <button className='form__btn'>{updateInfo? 'Update' : 'Create'}</button>
    </form>
  )
}

export default UsersForm