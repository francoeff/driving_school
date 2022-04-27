import { useState } from 'react'

export const useForm = ( init = {} ) => {

    const [valuesForm, setValuesForm] = useState( init );

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


    const handleChange = async (e) => {
        const { name, type, value } = e.target;
        const valueByType = async ( type, value ) => {
            switch (type) {
                case 'text' || 'radio' || 'checkbox' || 'hidden' :
                    return value;
                case 'file' :
                    const file = e.target.files[0];
                    const base64 = await toBase64(file);
                    return base64
                default : return value;

            }
        }
        setValuesForm( { ...valuesForm, [name] : await valueByType( type, value ) } )
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(valuesForm);
    }

  return [valuesForm, setValuesForm, handleChange, handleSubmit];
}
