using Backend.core.DTOs;

namespace Backend.core.interfaces
{
    public interface InterfasProducto
    {
        Task<IEnumerable<ProductoDTOs>> GetProducto();

    }
}
