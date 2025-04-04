using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.interfaces;
using Backend.core.mapeadores;
using Backend.infraestructura.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.infraestructura.Repositorios
{
    public class NotificacionesRepositorio: InterfasNotificacion
    {
        private readonly BackendContext BackendContext;
        public NotificacionesRepositorio(BackendContext context)
        {
            this.BackendContext = context;
        }
        public async Task<IEnumerable<NotificacionDTOs>> GetNotificaciones()
        {
            return await BackendContext.Notificaciones
                .Select(Notificaciones => Notificaciones.toGetDto())
                .ToListAsync();
        }
    }

}
