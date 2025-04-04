import React, { useEffect, useState } from "react";

const EmployeesList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from the API
  useEffect(() => {
    // Configura la URL de tu API
    const apiUrl = "http://localhost:5297/api/Empleados"; // Ajusta esto a tu endpoint

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre}</li> // Ajusta según la estructura de tu API
        ))}
      </ul>
    </div>
  );
};

export default EmployeesList;
