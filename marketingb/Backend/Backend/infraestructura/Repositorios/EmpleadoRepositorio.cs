using Backend.core.DTOs;
using Backend.core.entidades;
using Backend.core.interfaces;
using Backend.core.mapeadores;
using Backend.infraestructura.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.infraestructura.Repositorios
{
    public class EmpleadoRepositorio : InterfasEmpleado
    {
        private readonly BackendContext BackendContext;
        public EmpleadoRepositorio(BackendContext context)
        {
            this.BackendContext = context;
        }
        public async Task<IEnumerable<EmpleadoDTOs>> GetEmpleado()
        {
            return await BackendContext.Empleado
                .Select(Empleado => Empleado.toGetDto())
                .ToListAsync();
        }
    }
}
