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
    public class ProductoesController : ControllerBase
    {
        private readonly InterfasProducto _ProductoRepositorio;

        public ProductoesController(InterfasProducto ProductoRepositorio)
        {
            this._ProductoRepositorio = ProductoRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductoDTOs>>> GetProducto()
        {
            try
            {
                var productos = await _ProductoRepositorio.GetProducto();
                if (productos == null || !productos.Any())
                {
                    return NotFound("No se encontraron productos.");
                }
                return Ok(productos);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error interno del servidor: " + ex.Message);
            }
        }



    }
}
