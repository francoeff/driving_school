import fetchAPI from '../fetchAPI';
import { dtoCourseFromApi, dtoCourseToApi } from './dto'
import { dtoLessonCourseFromApi } from '../lesson/dto'

const segment = 'cursos/';

export const getCourses = async () =>{
  const courses = await fetchAPI( segment );
  return courses.length > 0 ? courses.map( course => dtoCourseFromApi( course ) ) : [];
}

export const getCourse = async ({ idCourse }) => {
  if (idCourse) {
    const course = await fetchAPI(`${ segment }${idCourse}`);
    return dtoCourseFromApi(course);
  } else return {};
}

export const updateCourse = async ( { id, title, description, price, imgUri } ) =>
  await fetchAPI(
    `${ segment }${id}`,
    'put',
    dtoCourseToApi({ title, description, price, imgUri } )
  )


export const getLessonsCourse = async ( { idCourse } ) =>{
  const lessons = await fetchAPI( `${ segment }${ idCourse }/clases` );
  return lessons.length > 0 ? lessons.map( lesson => dtoLessonCourseFromApi( lesson ) ) : [];
}

export const addLessonCourse = async ( { idCourse, idLesson } ) => {
  const result = await fetchAPI(
    `${ segment }${ idCourse }/clases`,
    'post',
    { id_clase : idLesson }
  );

  return dtoLessonCourseFromApi( result );
}

export const removeLessonCourse = async ( { idCourseLesson } ) =>
  await fetchAPI(
    `${ segment }/clases/${idCourseLesson}`,
    'delete'
    );
