import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getCourse } from "../../apis/courses";
import { CourseForm } from "../../components/Courses/CourseForm";


const CourseEdit = () => {
    const { idCourse } = useParams();
    const [courseData, setCourseData] = useState({});
    
    const fetchCourse = async() => {
        const data = await getCourse( parseInt( atob( idCourse ) ) );
        setCourseData( data );
    }

    useEffect(() => {
      fetchCourse();
    }, [])    

    return (
        <div>
            <CourseForm courseData={ courseData } titleForm={ idCourse === 'new' ? 'Nuevo Curso' : 'Editar Curso ' + idCourse } />
        </div>
    );
};

export default CourseEdit;