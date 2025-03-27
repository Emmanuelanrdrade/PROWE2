using Backend.core.DTOs;

namespace Backend.core.Interfaces
{
    public interface INotificacionesRepositorio
    {
        Task<IEnumerable<NotificacionesGetDTOs>> GetNotificaciones();
    }
}
