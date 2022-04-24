import React, { useState } from 'react'
import { Button, Card, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import './courses.scss';

import imgNotAvailable from '../../assets/images/image-not-available.jpg';

export const CourseForm = ({ titleForm, courseData }) => {
    const [valuesForm, handleChange, handleSubmit] = useForm( courseData );
    const [imgCourse, setimgCourse] = useState( imgNotAvailable );
    
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">{titleForm}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className="text-center">
                                <div className="course-edit__img">
                                    <img src={ imgCourse } className='img-thumbnail' alt='imagen del curso' />
                                </div>
                            </Col>
                        </Row>
                        <form onSubmit={ handleSubmit }>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId='formNameCourse'>
                                        <Form.Label>Nombre de curso</Form.Label>
                                        <Form.Control type='text' placeholder='Ingrese Nombre' name='title' value={valuesForm.title} onChange={handleChange} />
                                        <Form.Text className='text-white'> .</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId='formDescriptionCourse'>
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control type='text' placeholder='Ingrese una descripción' name='description' value={valuesForm.description} onChange={handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Valor del curso</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Este monto es referencial" name='price' value={ valuesForm.price } onChange={handleChange} />
                                        </InputGroup>
                                        <Form.Text className='text-muted'>Este es solo un valor referencial, podrá modificarlo por cada venta</Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId='formDescriptionCourse'>
                                        <Form.Label>Imagen</Form.Label>
                                        <Form.Control type='file' name='img' onChange={handleChange} />
                                    </Form.Group>

                                </Col>
                            </Row >
                            <Row>
                                <Col className='text-center'>
                                    <Button variant='outline-primary' type='submit'><i className='feather icon-save'></i>Guardar</Button>
                                </Col>
                            </Row>
                        </form >
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
