
using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.Interfaces;
using Backend.core.Mapear;
using Backend.Core.Mapear;
using Backend.Infraestructur.Data;
using Microsoft.EntityFrameworkCore;


namespace Backend.Infraestructur.Repositorio
{
    public class PublicidadRepositorio: IPublicidadRepositorio
    {
        private readonly EmpresaLecheContext EmpresaLecheContext;
        public PublicidadRepositorio(EmpresaLecheContext context)
        {
            this.EmpresaLecheContext = context;
        }
        public async Task<IEnumerable<PublicidadGetDTOs>> GetPublicidad()
        {
          
            return await EmpresaLecheContext.publicidad.Select(Publicidad => Publicidad.ToGetDto()).ToListAsync();
        }
    }
}
