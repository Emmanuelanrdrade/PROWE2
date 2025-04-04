
using Backend.core.DTOs;

namespace Backend.core.interfaces
{
    public interface InterfasEmpleado
    {
        Task<IEnumerable<EmpleadoDTOs>> GetEmpleado();

    }
}
