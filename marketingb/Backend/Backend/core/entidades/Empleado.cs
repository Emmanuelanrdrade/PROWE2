using System.ComponentModel.DataAnnotations;

namespace Backend.core.entidades
{
    public class Empleado
    {
        [Key]
        public int Idempleado { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public int ci {  get; set; }
        public string cargo { get; set; }
        public DateTime fechacontratacion { get; set; }
            
    }
}
