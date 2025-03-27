using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.Interfaces;

namespace Backend.Presentacion.Controladores
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadosController : ControllerBase
    {
        private readonly IEmpleadoRepositorio empleadoRepositorio;

        public EmpleadosController(IEmpleadoRepositorio empleadoRepositorio)
        {
            this.empleadoRepositorio = empleadoRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmpleadoGetDTOs>>> GetEmpleados()
        {
            try
            {
                List<EmpleadoGetDTOs> empleados = (List<EmpleadoGetDTOs>)await empleadoRepositorio.GetEmpleados();

                if (empleados == null || !empleados.Any())
                {
                    return NotFound("No se encontraron empleados.");
                }

                return Ok(empleados);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> AgregarEmpleado([FromBody] Empleado empleado)
        {
            try
            {
                if (empleado == null)
                {
                    return BadRequest("Datos inválidos del empleado.");
                }

                await empleadoRepositorio.AgregarEmpleado(empleado);
                return CreatedAtAction(nameof(GetEmpleados), new { id = empleado.IdEmpleado }, empleado);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error al agregar el empleado: " + ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> EditarEmpleado(int id, [FromBody] Empleado empleado)
        {
            try
            {
                if (empleado == null || id != empleado.IdEmpleado)
                {
                    return BadRequest("Datos del empleado inválidos.");
                }

                var empleadoExistente = await empleadoRepositorio.ObtenerEmpleadoPorId(id);
                if (empleadoExistente == null)
                {
                    return NotFound($"No se encontró el empleado con ID {id}.");
                }

                await empleadoRepositorio.EditarEmpleado(empleado);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error al actualizar el empleado: " + ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> EliminarEmpleado(int id)
        {
            try
            {
                var empleadoExistente = await empleadoRepositorio.ObtenerEmpleadoPorId(id);
                if (empleadoExistente == null)
                {
                    return NotFound($"No se encontró el empleado con ID {id}.");
                }

                await empleadoRepositorio.EliminarEmpleado(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error al eliminar el empleado: " + ex.Message);
            }
        }
    }
}

