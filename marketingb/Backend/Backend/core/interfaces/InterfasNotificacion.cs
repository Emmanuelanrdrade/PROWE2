
using Backend.core.DTOs;

namespace Backend.core.interfaces
{
    public interface InterfasNotificacion
    {
        Task<IEnumerable<NotificacionDTOs>> GetNotificaciones();

    }
}
