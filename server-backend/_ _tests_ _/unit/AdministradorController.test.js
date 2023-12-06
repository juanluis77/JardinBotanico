
const { initializeApp, auth, database, firestore } = require('firebase-admin');

// Configuración para emuladores de Firebase
const PROJECT_ID = 'your-project-id'; // Reemplaza con el ID de tu proyecto
const app = initializeApp({ projectId: jardinbotanico-backend-2023 });
const firestoreEmulator = initializeFirestore(app, { projectId: PROJECT_ID });

const authInstance = auth(app);

jest.mock('firebase-admin', () => {
  return {
    initializeApp: jest.fn(),
    mockAuth: jest.fn(() => auth(app)),
    mockDatabase: jest.fn(() => database(app)),
    mockFirestore: jest.fn(() => firestoreEmulator),
  };
});


// Test de aceptación
test('Prueba del método registrarAdministrador', async () => {
   const adminData = {
      // Datos del administrador de prueba
      nombre: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };
  
    // Llamar al método registrarAdministrador con los datos de prueba
    const resultado = await AdministradorController.registrarAdministrador(adminData);
  
    // Verificar el resultado
    expect(resultado).toBeDefined(); // Verificar que se obtuvo algún resultado
  
    // Verificar que el administrador fue registrado correctamente en la base de datos simulada
    const administradorRegistrado = await firestoreEmulator.doc(`/administradores/${resultado.uid}`).get();
    expect(administradorRegistrado.data()).toEqual({
      nombre: 'John Doe',
      email: 'john.doe@example.com',
      // Otros campos esperados en tu modelo de administrador
    });
  
    // Verificar que el administrador fue registrado correctamente en Firebase Auth
    const administradorAuth = await auth(app).getUser(resultado.uid);
    expect(administradorAuth).toBeDefined();
    expect(administradorAuth.email).toBe('john.doe@example.com');
    // Otros campos esperados en el objeto de usuario de Firebase Auth
});

// Test funcional
test('Prueba del método obtenerAdministradoresRegistrados', async () => {
  // Lógica para simular la base de datos con administradores registrados
  const administradoresRegistrados = [
    { id: '1', nombre: 'Juan' },
    { id: '2', nombre: 'Luis' },
  ];

  // Simular la respuesta de la base de datos al obtener administradores registrados
  administradoresRegistrados.forEach(async (admin) => {
    await firestoreEmulator.doc(`/administradores/${admin.id}`).set(admin);
  });

  // Llamar al método obtenerAdministradoresRegistrados
  const resultado = await AdministradorController.obtenerAdministradoresRegistrados();

  // Verificar el resultado
  expect(resultado).toEqual(administradoresRegistrados);
});

// Test de regresión
test('Prueba del método eliminarAdministrador', async () => {
    // Lógica para simular un administrador existente en la base de datos
    const administradorAEliminar = {
      id: '1',
      nombre: 'Administrador a Eliminar',
    };
  
    // Simular la respuesta de la base de datos al obtener el administrador a eliminar
    await firestoreEmulator.doc(`/administradores/${administradorAEliminar.id}`).set(administradorAEliminar);
  
    // Llamar al método eliminarAdministrador
    const resultado = await AdministradorController.eliminarAdministrador(administradorAEliminar.id);
  
    // Verificar el resultado
    expect(resultado).toEqual(/* resultado esperado, por ejemplo, un mensaje de éxito */);
  
    // Verificar que el administrador se haya eliminado correctamente
    const administradorEliminado = await firestoreEmulator.doc(`/administradores/${administradorAEliminar.id}`).get();
    expect(administradorEliminado.exists).toBe(false);
});
