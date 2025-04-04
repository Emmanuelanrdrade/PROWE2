using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.core.entidades;
using Backend.infraestructura.Data;
using Backend.infraestructura.Repositorios;
using Backend.core.interfaces;
using Backend.core.DTOs;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace Backend.presentacion.Controladores
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoesController : ControllerBase
    {
        private readonly InterfasEmpleado _empleadoRepositorio;

        public EmpleadoesController(InterfasEmpleado empleadoRepositorio)
        {
            this._empleadoRepositorio = empleadoRepositorio;
        }

        // GET: api/
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmpleadoDTOs>>> GetEmpleado()
        {
            try
            {
                var empleado = await _empleadoRepositorio.GetEmpleado();
                if (empleado == null || !empleado.Any())
                {
                    return NotFound("No se encontraron publicidades.");
                }
                return Ok(empleado);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }

    }
}
