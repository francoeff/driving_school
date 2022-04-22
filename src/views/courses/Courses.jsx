import React from 'react';
import CourseItem from "../../components/Courses/CourseItem";
import {Row, Col} from "react-bootstrap";

import imgCurso1  from '../../assets/images/courses/curso-basico.jpeg';
import imgCurso2  from '../../assets/images/courses/curso-pro.png';
import imgCurso3  from '../../assets/images/courses/curso-intensivo.jpg';


const courses = [
    {
        id : 1,
        title : 'Curso Básico',
        description : 'Este curso consta de 4 clases teóricas y 8 clases prácticas',
        price : 80000,
        imgUri : imgCurso1
    },
    {
        id : 2,
        title : 'Curso Pro',
        description : 'Este curso consta de 6 clases teóricas y 12 clases prácticas',
        price : 100000,
        imgUri : imgCurso2
    },
    {
        id : 3,
        title : 'Curso Intensivo',
        description : 'Este curso consta de 10 clases teóricas y 15 clases prácticas',
        price : 120000,
        imgUri : imgCurso3
    }
]

const Courses = () => {
    return (
        <Row>
            {
                courses.map( course => (
                    <Col md={4} key={course.id} >
                        <CourseItem
                            { ...course }
                            uri={'/courses/edit/' + course.id}
                        />
                    </Col>
                ))
            }
        </Row>
    );
};

export default Courses;