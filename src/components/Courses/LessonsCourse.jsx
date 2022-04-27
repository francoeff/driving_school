import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { addLessonCourse, getLessonsCourse, removeLessonCourse } from '../../apis/courses'
import { getLessons } from '../../apis/lesson'
import './courses.scss';
import LessonItem from './LessonItem'

const LessonsCourse = ( { idCourse } ) => {

  const [ lessonsCourse, setLessonsCourse ] = useState([] );
  const [ lesssonsAvailables, setLessonsAvailables ] = useState([] );
  const [ isLoading, setIsLoading ] = useState(false );

  useEffect( () => {
    setIsLoading( true );
    getLessonsCourse( { idCourse } )
      .then( lessons => {
        setLessonsCourse( lessons );
      } )
      .catch( ( error ) => { console.log( error ) } )
      .finally( () => {
        setIsLoading( false );
      })

  }, [ idCourse ] );

  useEffect(() => {
    setIsLoading( true );
    getLessons( )
      .then( lessons => {
        const lessonsNotInCourse = lessons.filter( lesson => {
          const isNotLessonInCourse =
            lessonsCourse
              .filter( l => l.id_lesson === lesson.id )
              .length === 0 ;

          if ( isNotLessonInCourse ) return lesson;
          return false;
        });

        setLessonsAvailables( lessonsNotInCourse );
      })
      .catch( ( error ) => { console.log( error ) } )
      .finally( () => {
        setIsLoading( false );
      })
  }, [ lessonsCourse ])

  const handleAddLessonCourse = ( idLesson ) => {
    addLessonCourse( { idCourse, idLesson } )
      .then( result => {
        const title = lesssonsAvailables.find( lesson => lesson.id === result.id_lesson ).title;
        setLessonsCourse( [ ...lessonsCourse, { ...result, title }] )
      } )
  }

  const handleRemoveLessonCourse = ( idCourseLesson ) => {
    removeLessonCourse( { idCourseLesson } )
      .then( result => {
        const lessons = lessonsCourse.filter( lesson => lesson.id !== idCourseLesson );
        setLessonsCourse( lessons );
      })
  }


  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title as="h5">Clases</Card.Title>
          </Card.Header>
          <Card.Body>
            {
              isLoading
                ?
                  (
                    <Spinner animation='border' variant='primary' />
                  )
                :
                  (
                    <>
                      <Row>
                        <Col>
                          <h4>Clases del curso</h4>
                          <ul className='list-lessons-course p-4'>
                            {
                              lessonsCourse.map( lesson => (
                                <LessonItem
                                  handleClick={ () => handleRemoveLessonCourse( lesson.id ) }
                                  key={lesson.id}
                                  lession={ lesson }
                                />
                              ))
                            }
                          </ul>
                        </Col>
                        <Col>
                          <h4>Clases disponibles</h4>
                          <ul className='list-lessons-course p-4'>
                            {
                              lesssonsAvailables.map( lesson => (
                                <LessonItem
                                  handleClick={ () => handleAddLessonCourse( lesson.id ) }
                                  key={lesson.id}
                                  lession={ lesson }
                                />
                              ))
                            }
                          </ul>
                        </Col>
                      </Row>
                    </>
                  )
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default LessonsCourse