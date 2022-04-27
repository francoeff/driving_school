import React, {useEffect, useState} from 'react'
import { Button, Card, Col, Form, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import './courses.scss';

import imgNotAvailable from '../../assets/images/image-not-available.jpg';
import { getCourse, updateCourse } from '../../apis/courses'
// import useFetch from '../../hooks/useFetch'

export const CourseForm = ({ idCourse }) => {

    const [isLoadingCourse, setIsLoadingCourse] = useState(false);
    const [valuesForm, setValuesForm, handleChange] = useForm({});
    const [imgCourse, setImgCourse] = useState( imgNotAvailable );
    // const [ fetchData, dataFeched, setDataFeched, isFetching ] = useFetch( { api : getCourse, params : { idCourse } } )

    useEffect(() => {
      setIsLoadingCourse(true);

      getCourse({ idCourse })
        .then(data => {
          setValuesForm(data);
          setImgCourse( data.imgUri || imgNotAvailable );
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsLoadingCourse(false);
        })

    }, [ idCourse, setValuesForm ]);


    const handleChangeImage = e => {
        handleChange( e );
        const file = e.target.files[0];
        const ext = file.type.split('/').pop();
        const urlImage = URL.createObjectURL(file);
        setImgCourse( urlImage );
        setValuesForm( { ...valuesForm, imgUri : `/assets/img/courses/${ new Date().getTime() }.${ ext }` } )
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        console.log(valuesForm)
        const submit = await updateCourse( { ...valuesForm } );
        if ( submit.status ) alert("Modificado con éxito!");
    }

    
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">{valuesForm.title ||  'Nuevo Curso' }</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        {
                            isLoadingCourse
                              ?
                                (
                                  <Spinner animation="border" variant="info" />
                                )
                              :
                                (
                                  <>
                                      <Row>
                                          <Col className="text-center">
                                              <div className="course-edit__img">
                                                  <img src={ imgCourse } className='img-thumbnail' alt='imagen del curso' />
                                                  <label htmlFor="imgFile" className='btn btn-primary btn-sm'><i className='feather icon-upload'></i> Cargar</label>
                                                  <input type='file' className='d-none' id='imgFile' onChange={ handleChangeImage } />
                                              </div>
                                          </Col>
                                      </Row>
                                      <form onSubmit={ handleSubmit }>
                                          <Row>
                                              <Col md={6}>
                                                  <Form.Group controlId='formNameCourse'>
                                                      <Form.Label>Nombre de curso</Form.Label>
                                                      <input type='hidden' name='id' value={valuesForm.id} onChange={handleChange} />
                                                      <Form.Control type='text' placeholder='Ingrese Nombre' name='title' value={valuesForm.title} onChange={handleChange} />
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
                                                  </Form.Group>
                                              </Col>

                                              <Col md={12}>
                                                  <Form.Group controlId='formDescriptionCourse'>
                                                      <Form.Label>Descripción</Form.Label>
                                                      <Form.Control type='text' placeholder='Ingrese una descripción' name='description' value={valuesForm.description} onChange={handleChange} />
                                                  </Form.Group>
                                                  <input type='hidden' name='imgUri' onChange={ handleChange } value={ valuesForm.imgUri } />
                                              </Col>
                                          </Row >
                                          <Row>
                                              <Col className='text-center'>
                                                  <Button variant='outline-primary' type='submit'><i className='feather icon-save'></i>Guardar</Button>
                                              </Col>
                                          </Row>
                                      </form >
                                  </>
                                )
                        }

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
