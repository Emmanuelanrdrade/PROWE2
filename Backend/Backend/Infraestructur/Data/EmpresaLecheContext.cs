using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Backend.Infraestructur.Data
{
    public class EmpresaLecheContext : DbContext
    {
        public EmpresaLecheContext(DbContextOptions<EmpresaLecheContext> options):base(options) {
        
        
        }
        public DbSet<Backend.core.Entidades.Empleado> Empleado { get; set; } = default!;
        public DbSet<Backend.core.Entidades.Notificaciones>notificaciones { get; set; } = default!;
        public DbSet<Backend.core.Entidades.Producto>productos { get; set; } = default!;

        public DbSet<Backend.core.Entidades.Publicidad> publicidad { get; set; } = default!;
    }
}
