using Backend.core.DTOs;

namespace Backend.core.interfaces
{
    public interface InterfasPublicidad
    {
        Task<IEnumerable<PublicidadDTOs>> GetPublicidad();
        Task<PublicidadDTOs> GetPublicidadById(int id);
        Task<PublicidadDTOs> CreatePublicidad(PublicidadDTOs publicidadDto);
        Task<bool> UpdatePublicidad(int id, PublicidadDTOs publicidadDto);
        Task<bool> DeletePublicidad(int id);
    }
}
