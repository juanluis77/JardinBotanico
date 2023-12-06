const { getAdministradores } = require('../../apiRoutes'); // Ajusta la ruta según la estructura de tu proyecto

test('Prueba de la ruta GET /api/administradores', async () => {
  const mockRequest = {};
  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  };

  // Llamada a la función con mockRequest y mockResponse
  await getAdministradores(mockRequest, mockResponse);

  // Verificación de la respuesta
  expect(mockResponse.status).toHaveBeenCalledWith(200);
  // Puedes verificar el contenido de la respuesta, por ejemplo, si se espera un JSON específico
  expect(mockResponse.json).toHaveBeenCalledWith([
    { id: '1', nombre: 'Administrador juan' },
  
    { id: '2', nombre: 'Administrador luis' },
    // ...
  ]);
});
