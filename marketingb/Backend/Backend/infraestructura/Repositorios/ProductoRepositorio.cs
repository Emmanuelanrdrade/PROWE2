using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.interfaces;
using Backend.core.mapeadores;
using Backend.infraestructura.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.infraestructura.Repositorios
{
    public class ProductoRepositorio:InterfasProducto
    {
        private readonly BackendContext BackendContext;
        public ProductoRepositorio(BackendContext context)
        {
            this.BackendContext = context;
        }
        public async Task<IEnumerable<ProductoDTOs>> GetProducto()
        {
            return await BackendContext.Producto
                .Select(producto => producto.toGetDto())
                .ToListAsync();
        }
    }
}
