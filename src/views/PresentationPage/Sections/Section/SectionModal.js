import React, {useState} from "react";
// core components
import { modal, input } from './modal/functions'

export default function SectionModal() {
const [showModal, setModal] = React.useState(true)
const [eventTitle , setEventTitle] = useState("")
const [error, setError] = useState(false)

const handleChange = (evt) => {
    setEventTitle(evt.target.value)
    evt.preventDefault();
   
}
const showError = () => setError(true)
const emptyError = () => setError(false)

function isError (eventTitle) {
    if(eventTitle === '' || null || undefined) {
        return showError()
    } else return emptyError()
} 

  
const handleSubmit = (evt) => {
    evt.preventDefault();
    isError(eventTitle)
}

const hideModal = () =>  { setModal(false); setEventTitle('') }
return ( 
    modal(
        input(error,  handleChange, eventTitle), 
        handleSubmit,
        showModal,
        hideModal    
    )   
)}
