using Backend.core.DTOs;
using Backend.core.Entidades;

namespace Backend.core.Mapear
{
    public static class MapeadorGetProducto
    {
        public static ProductoGetDTOs toGetDto(this Producto producto)
        {
            return new ProductoGetDTOs()
            {
                IdProducto = producto.IdProducto,
               // caracteristica = producto.caracteristica
            };
        }
    }
}
