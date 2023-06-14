import React, { useRef } from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';

const SingleEvent = ({data}) => {
    const inputEmail = useRef()
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id

        try{
            
        }catch(e) {

        }
    }
  return (
        <div className='event-single-page'>
            <h1>{data.title}</h1>
            <Image src={data.image} width={1000} height={500} alt={data.title}/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form action="" onSubmit={onSubmit} className='email_registration'>
                <label htmlFor=""> Get registered for this event </label>
                <input ref={inputEmail} type="email" id='email' placeholder='please insert your email here' style={{height: "40px", 
                minWidth: "350px",
                boxShadow: "none",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px"}}/> 

                <button type='submit' className='input-button'>Submit</button>
            </form>
            
        </div>
    )
}

export default SingleEvent