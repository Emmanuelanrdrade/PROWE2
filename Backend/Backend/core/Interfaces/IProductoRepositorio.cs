using Backend.core.DTOs;

namespace Backend.core.Interfaces
{
    public interface  IProductoRepositorio
    {
        Task<IEnumerable<ProductoGetDTOs>> GetProducto();
    }
}
