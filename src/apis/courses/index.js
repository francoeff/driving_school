import { courses } from '../../data/courseData';

export const getCourses = async () => {
    return new Promise(( resolve ) => {
        setTimeout( () => resolve(courses), 2000 )
    })
};

export const getCourse = idCourse => {
    return new Promise(( resolve ) => {
        setTimeout( () => resolve(courses.find( course => course.id === idCourse )), 2000 )
    })
};
