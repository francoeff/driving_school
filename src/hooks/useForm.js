import React, { useState } from 'react'

export const useForm = ( init = {} ) => {

    const [valuesForm, setValuesForm] = useState( init );
    
    const handleChange = e => {
        const { name, type, value } = e.target;
        setValuesForm( { ...valuesForm, [name] : value } )
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(valuesForm);
    }

  return [valuesForm, handleChange, handleSubmit];
}
