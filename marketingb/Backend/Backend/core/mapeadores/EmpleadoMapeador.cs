using Backend.core.entidades;
using Backend.core.DTOs;
using Backend.core.Entidades;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.PortableExecutable;
namespace Backend.core.mapeadores
{
    public  static class EmpleadoMapeador
    {
        public static EmpleadoDTOs toGetDto(this Empleado empleado)
        {
            return new EmpleadoDTOs()
            {
               nombre = empleado.nombre,
               apellido = empleado.apellido,
               ci = empleado.ci,
               cargo = empleado.cargo,

            };
        }
    }
}
