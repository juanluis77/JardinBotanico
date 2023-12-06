const { PlantaModel } = require('../../models/PlantaModel');

test('Constructor de PlantaModel', () => {
  const planta = new PlantaModel(
    '1',
    'Familia Botánica',
    'Nombre Científico',
    'Nombre Común',
    'Descripción de la Planta',
    'Propiedades Medicinales',
    'Cómo Usar la Planta',
    ['url1', 'url2'],
    'Contenido del QR'
  );

  expect(planta).toMatchObject({
    plantaId: '1',
    familia: 'Familia Botánica',
    nombreCientifico: 'Nombre Científico',
    nombreComun: 'Nombre Común',
    descripcion: 'Descripción de la Planta',
    propiedadesMedicinales: 'Propiedades Medicinales',
    comoUsar: 'Cómo Usar la Planta',
    imagenes: [
      { id: '0', url: 'url1' },
      { id: '1', url: 'url2' }
    ],
    qr: 'Contenido del QR',
  });
});

