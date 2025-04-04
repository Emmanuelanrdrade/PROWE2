using Backend.core.DTOs;
using Backend.core.Entidades;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.PortableExecutable;
using Backend.core.entidades;

namespace Backend.core.mapeadores
{
    public static class NotificacionMapeador
    {
        public static NotificacionDTOs toGetDto(this Notificaciones notificaciones)
        {
            return new NotificacionDTOs()
            {
               Fecha = notificaciones.Fecha,
               mensaje = notificaciones.mensaje,
               estado = notificaciones.estado,

            };
        }
    }
}
