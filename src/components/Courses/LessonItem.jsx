import React from 'react'
import { Button } from 'react-bootstrap'

const LessonItem = ( { lession, handleClick } ) => {
  const btnVariant = lession.id_lesson ? 'outline-danger' : 'outline-success';
  const btnIcon = lession.id_lesson ? 'icon-trash' : 'icon-file-plus';

  return (
    <li>
      { lession.title }
      <Button variant={ btnVariant } size='sm' className='ml-4' onClick={ handleClick }><i className={`feather ${ btnIcon } mr-0`}></i></Button>
    </li>
  )
}

export default LessonItem