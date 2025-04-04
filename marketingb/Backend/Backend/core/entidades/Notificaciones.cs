using System.ComponentModel.DataAnnotations;

namespace Backend.core.Entidades
{
    public class Notificaciones
    {
        [Key]
        public int IDNotificacion { get; set; }

        public DateTime Fecha { get; set; }
        public string mensaje { get; set; }
        public string estado { get; set; }
    }
}
