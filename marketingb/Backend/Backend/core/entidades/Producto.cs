using System.ComponentModel.DataAnnotations;

namespace Backend.core.Entidades
{
    public class Producto
    {
        [Key]
        public int IdProducto { get; set; }

        public string Nombre { get; set; }
        public string descripcion { get; set; }
        public string caracteristica { get; set; }
        public string estado { get; set; }
    }
}
