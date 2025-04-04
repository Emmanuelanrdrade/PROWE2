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

namespace Backend.presentacion.Controladores
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicidadController : ControllerBase
    {
        private readonly InterfasPublicidad _publicidadRepositorio;

        public PublicidadController(InterfasPublicidad publicidadRepositorio)
        {
            this._publicidadRepositorio = publicidadRepositorio;
        }

        // GET: api/Publicidad
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PublicidadDTOs>>> GetPublicidad()
        {
            try
            {
                var publicidad = await _publicidadRepositorio.GetPublicidad();
                if (publicidad == null || !publicidad.Any())
                {
                    return NotFound("No se encontraron publicidades.");
                }
                return Ok(publicidad);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }

        // GET: api/Publicidad/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PublicidadDTOs>> GetPublicidad(int id)
        {
            try
            {
                var publicidad = await _publicidadRepositorio.GetPublicidadById(id);

                if (publicidad == null)
                {
                    return NotFound($"No se encontró la publicidad con ID: {id}");
                }

                return Ok(publicidad);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }

        // POST: api/Publicidad
        [HttpPost]
        [HttpPost]
        public async Task<ActionResult<PublicidadDTOs>> PostPublicidad(PublicidadDTOs publicidadDto)
        {
            try
            {
                var nuevaPublicidad = await _publicidadRepositorio.CreatePublicidad(publicidadDto);
                return CreatedAtAction(nameof(GetPublicidad), new { id = nuevaPublicidad.IdPublicidad }, nuevaPublicidad);
            }
            catch (Exception ex)
            {
                // Capturar la excepción interna si existe
                string errorMessage = ex.Message;
                Exception innerEx = ex.InnerException;
                while (innerEx != null)
                {
                    errorMessage += " -> " + innerEx.Message;
                    innerEx = innerEx.InnerException;
                }

                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + errorMessage);
            }
        }
        // PUT: api/Publicidad/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPublicidad(int id, PublicidadDTOs publicidadDto)
        {
            try
            {
                var result = await _publicidadRepositorio.UpdatePublicidad(id, publicidadDto);

                if (!result)
                {
                    return NotFound($"No se encontró la publicidad con ID: {id}");
                }

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }

        // DELETE: api/Publicidad/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublicidad(int id)
        {
            try
            {
                var result = await _publicidadRepositorio.DeletePublicidad(id);

                if (!result)
                {
                    return NotFound($"No se encontró la publicidad con ID: {id}");
                }

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }
    }
}