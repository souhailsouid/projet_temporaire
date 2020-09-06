import React, {useState} from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import  { modal, input } from './modal/functions'
// @fullcalendar components
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";
import { initialEventsSchedule } from './calendar/function'
const useStyles = makeStyles(descriptionStyle);

export default function SectionCalendar() {
  const classes = useStyles();
  const [eventSchedule, setEventSchedule] = useState(initialEventsSchedule);
  const [date, setDate] = useState();
  const [showModal, setModal] = React.useState(false)
  const [eventInput , setEventInput] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const label = (errorMessage) => `Évènement * ${errorMessage}`

  const handleChange = (evt) => {
    setEventInput(evt.target.value)
      evt.preventDefault();
     
  }
  const showError = () => setError(true)
  const emptyError = () => setError(false)

  function isError (eventInput) {
      if(eventInput === '' || null || undefined) {
           showError()
           setErrorMessage("Ce champ est requis")
      } else return emptyError()
  } 

  const eventTitle = `Ajouter un évènement pour le ${date}`

  const newEventSchedule = {
      title: eventInput,
      start: date,
      color: "#cc4949"
  }
  
  const hideModal = () =>  { setModal(false); setEventInput(''); setError(false); setErrorMessage("") }
  const isNotMissingRequiredInput  = () => eventInput !== ''
  const handleSubmit = (evt) => {
    evt.preventDefault();
    isError(eventInput)
    if(isNotMissingRequiredInput()){
        setEventSchedule([...eventSchedule, newEventSchedule]) 
        hideModal()
      }    
}
const placeholder = (isError) =>  isError ? errorMessage : null
    const modalComponent =  modal(
        eventTitle,
        input(label(errorMessage),placeholder(error), error,  handleChange, eventInput), 
        handleSubmit,
        showModal,
        hideModal,
        errorMessage   
    ) 
 
  const handleDateClick =  (data) => {
   setDate(data.dateStr)
   setModal(true)
  }  
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={12} sm={8}>
                <Button color="zenika" onClick={()=> setModal(true)}>
                    Ajoutez un évènement
                </Button> 
                {modalComponent} 
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    initialView="dayGridMonth"
                    dateClick={handleDateClick}
                    events={eventSchedule}   
                />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );  
}
