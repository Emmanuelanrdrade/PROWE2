const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5297/api';
// Y luego usa:
const response = await fetch(`${API_URL}/api/Producto`);