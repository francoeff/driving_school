import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

import Card from "../Card/MainCard";
import './courses.scss'

const CourseItem = ({ title, description, price, imgUri, uri }) => {
    return (
        <Card title={ title } >
            <div className="course-item">
                <div className="course-item__img">
                    <img src={ imgUri } alt={ `Imagen ${ title }` }/>
                </div>
                <div className="course-item__price bg-info text-white text-center">${ price }</div>
                <div className="course-item__description">
                    <p>{ description }</p>
                </div>
                <div className="course-item__action">
                    <Link to={ uri }><Button variant='outline-primary' >Ver</Button></Link>
                </div>
            </div>
        </Card>
    );
};

export default CourseItem;