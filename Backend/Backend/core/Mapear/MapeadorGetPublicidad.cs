using Backend.core.DTOs;
using Backend.core.Entidades;


namespace Backend.Core.Mapear
{
    public static class MapeadorGetPublicidad
    {
       
        public static PublicidadGetDTOs ToGetDto(this Publicidad publicidad)
        {
            return new PublicidadGetDTOs()
            {
                IdPublicidad = publicidad.IdPublicidad,
                Titulo = publicidad.Titulo,
                Descripcion = publicidad.Descripcion,
                FechaInicio = publicidad.FechaInicio,
                FechaFin = publicidad.FechaFin,
                Tipo = publicidad.Tipo,
                Presupuesto = publicidad.Presupuesto
            };
        }
    }
}
