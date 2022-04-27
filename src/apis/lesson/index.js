import fetchAPI from '../fetchAPI';
import { dtoLessonFromApi } from './dto'

const segment = 'clases/';

export const getLessons = async () =>{
  const lessons = await fetchAPI( segment );
  return lessons.length > 0 ? lessons.map( lesson => dtoLessonFromApi( lesson ) ) : [];
}

export const getLesson = async ({ idLesson }) => {
  if (idLesson) {
    const lesson = await fetchAPI(`${ segment }${idLesson}`);
    return dtoLessonFromApi(lesson);
  } else return {};
}

