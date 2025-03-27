using Backend.core.DTOs;
using Backend.core.Entidades;
using Backend.core.Interfaces;
using Backend.core.Mapear;
using Backend.Infraestructur.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infraestructur.Repositorio
{
    public class ProductoRepositorio: IProductoRepositorio
    {
        private readonly EmpresaLecheContext EmpresaLecheContext;
        public ProductoRepositorio(EmpresaLecheContext context)
        {
            this.EmpresaLecheContext = context;
        }
        public async Task<IEnumerable<ProductoGetDTOs>> GetProducto()
        {
            // return await EmpresaLecheContext.producto.Select(Producto => Producto.toGetDto()).ToListAsync();
            return await EmpresaLecheContext.productos.Select(Producto => Producto.toGetDto()).ToArrayAsync();

        }
    }
}

