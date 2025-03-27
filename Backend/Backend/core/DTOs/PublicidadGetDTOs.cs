namespace Backend.core.DTOs
{
    public class PublicidadGetDTOs
    {
        public int IdPublicidad { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public string Tipo { get; set; }
        public decimal Presupuesto { get; set; }

    }
}
