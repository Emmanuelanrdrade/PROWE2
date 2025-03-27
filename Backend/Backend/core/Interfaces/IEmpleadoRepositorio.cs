
using Microsoft.AspNetCore.Mvc;
using Backend.core.DTOs;
using Backend.core.Entidades;
namespace Backend.core.Interfaces
{
    public interface IEmpleadoRepositorio 
    {
        Task<IEnumerable<EmpleadoGetDTOs>> GetEmpleados();
    }
}
