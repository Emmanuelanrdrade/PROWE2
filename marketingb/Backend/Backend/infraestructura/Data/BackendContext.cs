using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Backend.core.entidades;
using Backend.core.Entidades;

namespace Backend.infraestructura.Data
{
    public class BackendContext : DbContext
    {
        public BackendContext(DbContextOptions<BackendContext> options)
            : base(options)
        {
        }

        public DbSet<Empleado> Empleado { get; set; } = default!;
        public DbSet<Backend.core.Entidades.Notificaciones> Notificaciones { get; set; } = default!;
        public DbSet<Backend.core.Entidades.Producto> Producto { get; set; } = default!;
        public DbSet<Backend.core.Entidades.Publicidad> Publicidad { get; set; } = default!;
    }
}
