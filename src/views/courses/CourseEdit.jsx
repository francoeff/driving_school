import {useParams} from "react-router-dom";

const CourseEdit = () => {
    const parametros = useParams();

    return (
        <div>
            <h1>{ parametros.idCurso === 'new' ? 'Nuevo Curso' : 'Editar Curso ' + parametros.idCurso }</h1>
        </div>
    );
};

export default CourseEdit;