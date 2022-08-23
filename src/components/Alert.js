import React from 'react'

export default function Alert(props) {
    const capitalise =(word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && 
    <div>
      <div className={`alert alert-${props.alert.type}`} role="alert">
           <b>{capitalise(props.alert.type)}</b>: {props.alert.msg}
      </div>
    </div>
  )
}
