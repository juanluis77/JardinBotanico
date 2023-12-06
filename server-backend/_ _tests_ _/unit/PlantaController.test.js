const PlantaController = require('../../controllers/PlantaController');
const { mockFirebase } = require('firebase-mock');
const mockDatabase = mockFirebase().database();
const mockAuth = mockFirebase().auth();
const mockFirestore = mockFirebase().firestore();

// Mock de 'firebase-admin'

jest.mock('firebase-admin', () => ({
    initializeApp: jest.fn(),
    auth: () => mockAuth,
    database: () => mockDatabase,
    firestore: () => mockFirestore,
  }));

test('Prueba del método registrarPlanta', async () => {
    const plantaData = {
        nombreCientifico: 'Ejemplo científico',
        nombreComun: 'Ejemplo común',
        familia: 'Familia Botánica',
   
        descripcion: 'Descripción de la Planta',
        propiedadesMedicinales: 'Propiedades Medicinales',
        comoUsar: 'Cómo Usar la Planta',
        imagenes: [
         { id: '0', url: 'url1' },
         { id: '1', url: 'url2' }
         ],
        qr: 'Contenido del QR',
         };
    
      // Lógica para simular la base de datos y el registro de la planta
      mockFirestore.autoFlush();
      const firestoreRef = mockFirestore.collection('plantas');
    
      // Llamar al método registrarPlanta con los datos de prueba
      const resultado = await PlantaController.registrarPlanta(plantaData);
    
      // Verificar el resultado
      expect(resultado).toHaveProperty('id'); // Esperar que el resultado tenga una propiedad 'id'
    
      // Obtener la planta recién registrada directamente de la base de datos
      const plantaRegistrada = await firestoreRef.doc(resultado.id).get();
    
      // Verificar que la planta se haya registrado correctamente
      expect(plantaRegistrada.data()).toEqual({
        nombreCientifico: plantaData.nombreCientifico,
        nombreComun: plantaData.nombreComun,
        // Otros detalles de la planta
      });
});

test('Prueba del método obtenerPlantasRegistradas', async () => {
    const plantasRegistradas = [
        { id: '1', nombreCientifico: 'Planta 1', nombreComun: 'Común 1' },
        { id: '2', nombreCientifico: 'Planta 2', nombreComun: 'Común 2' },
      ];
    
      // Simular la respuesta de la base de datos al obtener las plantas registradas
      mockFirestore.autoFlush();
      const firestoreRef = mockFirestore.collection('plantas');
      plantasRegistradas.forEach((planta) => {
        firestoreRef.doc(planta.id).set(planta);
      });
    
      // Llamar al método obtenerPlantasRegistradas
      const resultado = await PlantaController.obtenerPlantasRegistradas();
    
      // Verificar el resultado (comparar con las plantas registradas simuladas)
      expect(resultado).toEqual(plantasRegistradas);
});
