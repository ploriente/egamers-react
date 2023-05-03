import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Usuarios from './pages/Usuarios';
import Alumnos from './pages/Alumnos';
import Contactos from './pages/Contactos';

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar gb-light">
        <ul>
          <li>
            <NavLink
              to="/usuarios"
              exact
              className="text-dark rounded py-2 w-100 d-inline-block px-3"
              activeClassname="active"
            >
              <FaIcons.FaUsers className="me-2" />
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alumnos"
              exact
              className="text-dark rounded py-2 w-100 d-inline-block px-3"
            >
              <FaIcons.FaChild className="me-2" />
              Alumnos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactos"
              exact
              className="text-dark rounded py-2 w-100 d-inline-block px-3"
            >
              <FaIcons.FaLinkedin className="me-2" />
              Contactos
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes className="content">
        <Route path="/usuarios" exact={true} Component={Usuarios} />
        <Route path="/alumnos" exact={true} Component={Alumnos} />
        <Route path="/contactos" exact={true} Component={Contactos} />
      </Routes>
    </React.Fragment>
  );
};

export default Sidebar;
