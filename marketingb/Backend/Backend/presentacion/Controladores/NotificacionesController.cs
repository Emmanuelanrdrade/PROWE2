using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.core.Entidades;
using Backend.infraestructura.Data;
using Backend.core.DTOs;
using Backend.core.interfaces;
using Backend.infraestructura.Repositorios;

namespace Backend.presentacion.Controladores
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificacionesController : ControllerBase
    {
        private readonly InterfasNotificacion _NotificacionesRepositorio;

        public NotificacionesController(InterfasNotificacion NotificacionRepositorio)
        {
            this._NotificacionesRepositorio = NotificacionRepositorio;
        }

        // GET: api/Notificaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NotificacionDTOs>>> GetNotificaciones()
        {
            try
            {
                var notificaciones = await _NotificacionesRepositorio.GetNotificaciones();
                if (notificaciones == null || !notificaciones.Any())
                {
                    return NotFound("No se encontraron publicidades.");
                }
                return Ok(notificaciones);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }


    }
}
