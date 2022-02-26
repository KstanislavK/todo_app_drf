import React from 'react';
import { Link, useParams } from "react-router-dom";


const ProjectItem = ({project}) => {
    let link = `/project/${project.id}`
    return (
        <tr>
            <td>{project.id}</td>
            <td>
                <Link className="nav-link" to={link}>{project.name}</Link>
            </td>
            <td>{project.repository}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Название</th>
                    <th scope="col">Репозиторий</th>
                </tr>
                </thead>
                <tbody>
                    {projects.map((project) => <ProjectItem project={project}/>)}
                </tbody>
            </table>
        </div>
    )
}

const ProjectUser = ({item}) => {
    return (
        <li>{item.firstName} {item.lastName}</li>
    )
}

const ProjectDetail = ({getProject, item}) => {
    let { id } = useParams();
    getProject(id)
    let users = item.users ? item.users : []
    return (
        <div className='container'>
            <div className="card">
                <h4 className="card-header">{item.name}</h4>
                <div className="card-body">
                    <p className="card-text">
                        Пользователи:
                        <ol>
                            {users.map((user) => <ProjectUser item={user} />)}
                        </ol>
                    </p>
                    Repository: <a href={item.repository} className='link-dark'>{item.repository}</a>
                </div>
            </div>
        </div>
    )
}


export {ProjectList, ProjectDetail}
