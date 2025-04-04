using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.interfaces;
using Backend.core.mapeadores;
using Backend.infraestructura.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.infraestructura.Repositorios
{
    public class PublicidadRepositorio : InterfasPublicidad
    {
        private readonly BackendContext _backendContext;

        public PublicidadRepositorio(BackendContext context)
        {
            this._backendContext = context;
        }

        public async Task<IEnumerable<PublicidadDTOs>> GetPublicidad()
        {
            return await _backendContext.Publicidad
                .Select(publicidad => publicidad.toGetDto())
                .ToListAsync();
        }

        public async Task<PublicidadDTOs> GetPublicidadById(int id)
        {
            var publicidad = await _backendContext.Publicidad.FindAsync(id);
            return publicidad?.toGetDto();
        }

        public async Task<PublicidadDTOs> CreatePublicidad(PublicidadDTOs publicidadDto)
        {
            try
            {
                var publicidad = new Publicidad
                {
                    
                    Titulo = publicidadDto.Titulo,
                    Descripcion = publicidadDto.Descripcion,
                    FechaInicio = publicidadDto.FechaInicio,
                    FechaFin = publicidadDto.FechaFin,
                    Tipo = publicidadDto.Tipo,
                    Presupuesto = publicidadDto.Presupuesto
                };

                _backendContext.Publicidad.Add(publicidad);
                await _backendContext.SaveChangesAsync();

                
                publicidadDto.IdPublicidad = publicidad.IdPublicidad;
                return publicidadDto;
            }
            catch (Exception ex)
            {
                
                throw;
            }
        }

        public async Task<bool> UpdatePublicidad(int id, PublicidadDTOs publicidadDto)
        {
            if (id != publicidadDto.IdPublicidad)
                return false;

            var publicidadEntity = await _backendContext.Publicidad.FindAsync(id);
            if (publicidadEntity == null)
                return false;

            // Actualizar propiedades
            publicidadEntity.Titulo = publicidadDto.Titulo;
            publicidadEntity.Descripcion = publicidadDto.Descripcion;
            publicidadEntity.FechaInicio = publicidadDto.FechaInicio;
            publicidadEntity.FechaFin = publicidadDto.FechaFin;
            publicidadEntity.Tipo = publicidadDto.Tipo;
            publicidadEntity.Presupuesto = publicidadDto.Presupuesto;

            _backendContext.Entry(publicidadEntity).State = EntityState.Modified;

            try
            {
                await _backendContext.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PublicidadExists(id))
                    return false;
                else
                    throw;
            }
        }

        public async Task<bool> DeletePublicidad(int id)
        {
            var publicidad = await _backendContext.Publicidad.FindAsync(id);
            if (publicidad == null)
                return false;

            _backendContext.Publicidad.Remove(publicidad);
            await _backendContext.SaveChangesAsync();

            return true;
        }

        private bool PublicidadExists(int id)
        {
            return _backendContext.Publicidad.Any(e => e.IdPublicidad == id);
        }
    }
}