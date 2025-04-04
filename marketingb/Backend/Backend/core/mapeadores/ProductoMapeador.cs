using Backend.core.DTOs;
using Backend.core.Entidades;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Reflection.PortableExecutable;
using Backend.core.entidades;

namespace Backend.core.mapeadores
{
    public static class ProductoMapeador
    {
        public static ProductoDTOs toGetDto(this Producto producto)
        {
            return new ProductoDTOs()
            {
               Nombre = producto.Nombre,
               caracteristica = producto.caracteristica,
               descripcion = producto.descripcion,
               estado = producto.estado,

            };
        }
    }
}
