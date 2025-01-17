/*
   Author: Luis Felipe Granada Ramírez
   
   Description: List componente to show the projects
*/

import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client'
import "./Proyectos.css";
import GET_PROJECTS from "../../DAO/projectQueries/getAllProjects";

// Definition of the component
const Proyectos = () => {

    // Change of status on data(Projects)
    //const [data, setData] = useState([]);

    // Effect => Run before rendering the component
    /*useEffect(() => {
    });*/

    // Project Queries: Get all projects
    const { loading, data, error } = useQuery(GET_PROJECTS);
      
    // Render the component
    return(
        <div className="projects-box">
            <div>
                <h1>Proyectos</h1>
                <button className="button-new">Nuevo +</button>
            </div>
            {loading && <p>Cargando información</p>}
            {error && <p>Se ha presentado un error en la carga de datos</p>}
            {data && <table className="table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Objetivos Generales</th>
                        <th>Objetivos Específicos</th>
                        <th>Presupuesto</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Líder</th>
                        <th>Estado</th>
                        <th>Etapa</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.projects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.generalobj}</td>
                            <td>{project.specificobj}</td>
                            <td>{project.budget}</td>
                            <td>{project.startdate}</td>
                            <td>{project.enddate}</td>
                            <td>{project.leaderid}</td>
                            <td>{project.status}</td>
                            <td>{project.stage}</td>
                            <td><button className="fas fa-edit" onClick={() => this.updateProduct(project)}></button></td>
                            <td><button className="fas fa-trash-alt" onClick={() => this.removeProduct(project)}></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    )
    
};

export default Proyectos;