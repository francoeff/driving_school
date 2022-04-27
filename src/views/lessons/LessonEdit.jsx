import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CourseForm } from "../../components/Courses/CourseForm";
import { Row, Col, Button } from 'react-bootstrap'
import LessonsCourse from '../../components/Courses/LessonsCourse'


const LessonEdit = () => {
  const idCourse = parseInt(atob( useParams().idCourse ) ) || null;

  return (
        <div>
            <Row>
                {
                    idCourse &&
                    (
                        <Col lg={12} >
                            <Link to='/courses/edit/new' >
                                <Button variant='primary' className='mb-2' >Nuevo Curso</Button>
                            </Link>
                        </Col>
                    )
                }

                <Col lg={idCourse ? 5 : 12}>
                    <CourseForm idCourse={ idCourse } />
                </Col>
                {
                    idCourse &&
                    (
                        <Col lg={7}>
                          <LessonsCourse idCourse={ idCourse } />
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default LessonEdit;