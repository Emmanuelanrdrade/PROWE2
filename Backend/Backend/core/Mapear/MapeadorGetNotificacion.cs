using Backend.core.DTOs;
using Backend.core.Entidades;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.PortableExecutable;

namespace Backend.core.Mapear
{
    public static class MapeadorGetNotificacion
    {
        public static NotificacionesGetDTOs toGetDto(this Notificaciones notificaciones)
        {
            return new NotificacionesGetDTOs()
            {
                IDNotificacion = notificaciones.IDNotificacion,
                descripcion = notificaciones.mensaje
                         
            };
        }
    }
}
