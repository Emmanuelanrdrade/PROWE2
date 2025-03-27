using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace Backend.core.Entidades
{
    public class Empleado
    {
        [Key]
        public int IdEmpleado { get; set; }

        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Ci { get; set; }
        public string cargo { get; set; }
        public string FechaContratacion { get; set; }
    }
}
