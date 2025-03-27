using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.Interfaces;
using Backend.core.Mapear;
using Backend.Infraestructur.Data;
using Microsoft.EntityFrameworkCore;


namespace Backend.Infraestructur.Repositorio 
{
    public class EmpleadoRepositorio: IEmpleadoRepositorio 
    {
        private readonly EmpresaLecheContext EmpresaLecheContext;
        public EmpleadoRepositorio(EmpresaLecheContext context)
        {
            this.EmpresaLecheContext = context;
        }
 
        public async Task<IEnumerable<EmpleadoGetDTOs>> GetEmpleados()
        {
            return await EmpresaLecheContext.Empleado.Select(Empleado => Empleado.toGetDto()).ToArrayAsync();
        }

    }
}
