import React, { useEffect, useState } from 'react';
import CourseItem from "../../components/Courses/CourseItem";
import {Row, Col, Card, Spinner} from "react-bootstrap";
import { getCourses } from "../../apis/courses";


const toChileanPeso = mount => new Intl.NumberFormat('es-CL').format( mount );

const generateUriCourse = id => `/courses/edit/${btoa(id)}`;


const Lessons = () => {
    const [courses, setCourses] = useState([]);
    const [fetching, setFetching] = useState(true);

    const fetchCourses = async() =>{
        const fetchedCourses = await getCourses();
        const processedCourses = fetchedCourses
            .map( course => ({
                ...course,
                price : toChileanPeso( course.price ),
                uri : generateUriCourse( course.id ),
            }) );

        setCourses( processedCourses );
        setFetching(false);
    };

    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <Row>
            {
                fetching

                    ?
                    (
                        <Col>
                            <Card>
                                <Card.Body className='text-center'>
                                    <Spinner animation="grow" variant="info" />
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    :

                    courses.map( course => (
                        <Col lg={4} md={6} key={course.id} >
                            <CourseItem
                                { ...course }
                            />
                        </Col>
                    ))

            }
        </Row>
    );
};

export default Lessons;