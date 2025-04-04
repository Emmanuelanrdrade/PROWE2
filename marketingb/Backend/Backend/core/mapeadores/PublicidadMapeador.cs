
using Backend.core.DTOs;
using Backend.core.Entidades;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.PortableExecutable;
using Backend.core.entidades;

namespace Backend.core.mapeadores
{
    public static class PublicidadMapeador
    {
        public static PublicidadDTOs toGetDto(this Publicidad publicidad)
        {
            return new PublicidadDTOs()
            {
                IdPublicidad = publicidad.IdPublicidad,
                Titulo = publicidad.Titulo,
                Descripcion = publicidad.Descripcion,
                FechaInicio = publicidad.FechaInicio,
                FechaFin = publicidad.FechaFin,
                Tipo = publicidad.Tipo,
                Presupuesto = publicidad.Presupuesto,
            };
        }

        public static Publicidad toEntity(this PublicidadDTOs dto)
        {
            return new Publicidad()
            {
                IdPublicidad = dto.IdPublicidad, 
                Titulo = dto.Titulo,
                Descripcion = dto.Descripcion,
                FechaInicio = dto.FechaInicio,
                FechaFin = dto.FechaFin,
                Tipo = dto.Tipo,
                Presupuesto = dto.Presupuesto
            };
        }

    }
}
