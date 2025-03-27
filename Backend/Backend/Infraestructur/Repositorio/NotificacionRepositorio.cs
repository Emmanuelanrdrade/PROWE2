
using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.Interfaces;
using Backend.core.Mapear;
using Backend.Infraestructur.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infraestructur.Repositorio
{
    public class NotificacionRepositorio:INotificacionesRepositorio
    {
        private readonly EmpresaLecheContext EmpresaLecheContext;
        public NotificacionRepositorio(EmpresaLecheContext context)
        {
            this.EmpresaLecheContext = context;
        }
        public async Task<IEnumerable<NotificacionesGetDTOs>> GetNotificaciones()
        {
            // return await EmpresaLecheContext.Notificaciones.Select(Notificaciones => Notificaciones.toGetDto()).ToListAsync();

            return await EmpresaLecheContext.notificaciones.Select(Notificaciones => Notificaciones.toGetDto()).ToArrayAsync();
        }
    }
}

