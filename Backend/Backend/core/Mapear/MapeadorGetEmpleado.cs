using Backend.core.DTOs;
using Backend.core.Entidades;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.PortableExecutable;



namespace Backend.core.Mapear
{
    public  static class MapeadorGetEmpleado
    {
        public static EmpleadoGetDTOs toGetDto(this Empleado empleado)
        {
            return new EmpleadoGetDTOs()
            {
                IdEmpleado = empleado.IdEmpleado,
                Apellido = empleado.Apellido,
                nombre = empleado.Nombre,
               
            };
        }
    }
}
