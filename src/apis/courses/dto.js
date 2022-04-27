export const dtoCourseFromApi = course => ({
  id : course.id,
  title : course.nombre_curso,
  description : course.descripcion,
  price : course.precio_referencial,
  imgUri : course.img_url
})

export const dtoCourseToApi = course => ({
  id : course.id,
  nombre_curso : course.title,
  descripcion : course.description,
  precio_referencial : course.price,
  img_url : course.imgUri
})