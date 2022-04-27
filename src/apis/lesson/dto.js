export const dtoLessonFromApi = ( lesson ) => ({
  id : lesson.id,
  title : lesson.nombre_clase,
  description : lesson.descripcion,
  type : lesson.tipo_clase
});

export const dtoLessonCourseFromApi = ( lesson ) => ({
  id : lesson.id,
  id_lesson : lesson.id_clase,
  title : lesson.nombre_clase ? lesson.nombre_clase : null,
  status : lesson.estado?.descripcion ? lesson.estado.descripcion : null
});

export const dtoLessonToApi = ( lesson ) => ({
  id : lesson.id,
  nombre_clase : lesson.title,
  descripcion : lesson.description,
  tipo_clase : lesson.type
})