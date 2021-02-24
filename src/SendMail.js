import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import {useForm} from 'react-hook-form';
import {closeSendMessage} from "./features/mailSlice"
import { useDispatch } from 'react-redux';
import firebase from "firebase"
import {db} from './firebase'




function SendMail() {
    const dispath = useDispatch ()

    const { register, handleSubmit,errors, watch } = useForm();

    const onSubmit = (formData)=>{
        console.log(formData);
        db.collection('emails').add(
            {
                to:formData.to,
                subject:formData.subject,
                message:formData.message,
                timstamp :firebase.firestore.FieldValue.serverTimestamp()
            }
        )
       dispath(closeSendMessage)
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Messages</h3>
                <CloseIcon 
                onClick={ () => dispath( closeSendMessage( ))} 
                className="sendMail__close"/>
            </div>
           <form onSubmit={handleSubmit(onSubmit)}>
               <input 
               name='to'
                placeholder="To"
                 type="email"
                 ref={register({required: true})}
                 />
                      {errors.to && <p className="sendMail__error">To is Required</p>}
               <input
                name='subject'
                 placeholder="Subject"
                  type="text"
                  ref={register({required: true})}
                  />
                        {errors.subject && <p className="sendMail__error">Subject is Required</p>}
               <input 
                name='message'
                 placeholder="Message..."
                 type="text" 
                 ref={register({required: true})}
                 className="sendMail__message"
                 />
                       {errors.message && <p className="sendMail__error">Message is Required</p>}
                <div className="sendMail__options">
                    <Button
                    variant="contained" color="primary"
                    type="submit"
                     className ="sendMail__send">Send</Button>
                </div>
           </form>

            
        </div>
    )
}

export default SendMail

