const FirebaseService = require('../../services/FireBaseServices');
const { initializeTestApp, assertFails, assertSucceeds } = require('@firebase/rules-unit-testing');

// Configuración del emulador de Firestore
const projectId = jardinbotanico-backend-2023;
const app = initializeTestApp({ projectId, auth: { uid: 'test-user' } });

// Habilitar reglas de Firestore para las pruebas
beforeAll(async () => {
  await loadFirestoreRules({
    projectId,
    rules: fs.readFileSync('path/to/firestore.rules', 'utf8'),
  });
});

// Limpiar la base de datos después de cada prueba
afterEach(async () => {
  await clearFirestoreData({ projectId });
});

// Test de registrarAdministrador
test('registrarAdministrador registra un administrador en Firebase', async () => {
  // Lógica para simular el registro de un administrador con FirebaseService
  const adminData = {
    nombre: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
  };

  // Simular el registro del administrador
  await FirebaseService.registrarAdministrador(adminData);

  // Verificar que el administrador fue registrado correctamente en Firestore
  const firestoreAdmin = await app.firestore().collection('administradores').doc(adminData.email).get();
  expect(firestoreAdmin.exists).toBe(true);
  expect(firestoreAdmin.data()).toEqual({
    nombre: 'John Doe',
    // Otros campos esperados en tu modelo de administrador
  });

  // Verificar que el administrador fue registrado correctamente en Firebase Auth
  const authAdmin = await app.auth().getUserByEmail(adminData.email);
  expect(authAdmin).toBeDefined();
  expect(authAdmin.email).toBe('john.doe@example.com');
  // Otros campos esperados en el objeto de usuario de Firebase Auth
});

// Test de obtenerAdministradores
test('obtenerAdministradores obtiene la lista de administradores de Firebase', async () => {
  // Lógica para simular la existencia de administradores en Firestore
  const administradoresRegistrados = [
    { nombre: 'Juan', email: 'juan@example.com' },
    { nombre: 'Luis', email: 'luis@example.com' },
  ];

  // Simular la existencia de administradores en Firestore
  const firestoreRef = app.firestore().collection('administradores');
  administradoresRegistrados.forEach(async (admin) => {
    await firestoreRef.doc(admin.email).set(admin);
  });

  // Llamar al método obtenerAdministradores
  const resultado = await FirebaseService.obtenerAdministradores();

  // Verificar el resultado
  expect(resultado).toEqual(administradoresRegistrados);
});

// Test de eliminarAdministrador
test('eliminarAdministrador elimina un administrador de Firebase', async () => {
  // Lógica para simular la existencia de un administrador en Firestore
  const administradorAEliminar = {
    nombre: 'Administrador a Eliminar',
    email: 'eliminar@example.com',
  };

  // Simular la existencia del administrador en Firestore
  const firestoreRef = app.firestore().collection('administradores');
  await firestoreRef.doc(administradorAEliminar.email).set(administradorAEliminar);

  // Llamar al método eliminarAdministrador
  await FirebaseService.eliminarAdministrador(administradorAEliminar.email);

  // Verificar que el administrador se haya eliminado correctamente en Firestore
  const administradorEliminado = await firestoreRef.doc(administradorAEliminar.email).get();
  expect(administradorEliminado.exists).toBe(false);
});

// Test de registrarPlanta
test('registrarPlanta registra una planta en Firebase', async () => {
  // Lógica para simular el registro de una planta con FirebaseService
  const plantaData = {
    nombreCientifico: 'Plantus cientificus',
    familia: 'Familia Botánica',
    // Otros campos necesarios para registrar una planta
  };

  // Simular el registro de la planta
  await FirebaseService.registrarPlanta(plantaData);

  // Verificar que la planta fue registrada correctamente en Firestore
  const firestorePlanta = await app.firestore().collection('plantas').doc(plantaData.nombreCientifico).get();
  expect(firestorePlanta.exists).toBe(true);
  expect(firestorePlanta.data()).toEqual({
    nombreCientifico: 'Plantus cientificus',
    familia: 'Familia Botánica',
    // Otros campos esperados en tu modelo de planta
  });
});

// Test de obtenerPlantas
test('obtenerPlantas obtiene la lista de plantas de Firebase', async () => {
  // Lógica para simular la existencia de plantas en Firestore
  const plantasRegistradas = [
    { nombreCientifico: 'Planta A', familia: 'Familia A' },
    { nombreCientifico: 'Planta B', familia: 'Familia B' },
  ];

  // Simular la existencia de plantas en Firestore
  const firestoreRef = app.firestore().collection('plantas');
  plantasRegistradas.forEach(async (planta) => {
    await firestoreRef.doc(planta.nombreCientifico).set(planta);
  });

  // Llamar al método obtenerPlantas
  const resultado = await FirebaseService.obtenerPlantas();

  // Verificar el resultado
  expect(resultado).toEqual(plantasRegistradas);
});

// Test de iniciarSesion
test('iniciarSesion inicia sesión en Firebase con credenciales válidas', async () => {
  // Lógica para simular la existencia de un usuario en Firebase Auth
  const usuarioExistente = {
    email: 'test@example.com',
    password: 'password123',
  };

  // Simular la existencia del usuario en Firebase Auth
  await app.auth().createUserWithEmailAndPassword(usuarioExistente.email, usuarioExistente.password);

  // Llamar al método iniciarSesion
  const resultado = await FirebaseService.iniciarSesion(usuarioExistente.email, usuarioExistente.password);

  // Verificar el resultado
  expect(resultado).toBeDefined(); // Verificar que se obtuvo algún resultado
  expect(resultado.uid).toBeDefined(); // Verificar que se obtuvo un UID de usuario
});

// Test de cerrarSesion
test('cerrarSesion cierra sesión en Firebase', async () => {
  // Lógica para simular la existencia de un usuario autenticado en Firebase Auth
  const usuarioAutenticado = {
    email: 'test@example.com',
    password: 'password123',
  };

  // Autenticar al usuario
  await app.auth().signInWithEmailAndPassword(usuarioAutenticado.email, usuarioAutenticado.password);

  // Llamar al método cerrarSesion
  await FirebaseService.cerrarSesion();

  // Verificar que el usuario se haya desconectado
  const usuarioDesconectado = await app.auth().currentUser;
  expect(usuarioDesconectado).toBeNull();
});
