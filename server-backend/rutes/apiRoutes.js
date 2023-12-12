const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.getAdministradores = functions.https.onRequest((request, response) => {
  // Lógica para obtener administradores
  const administradores = [{ id: '1', nombre: 'Administrador 1' }, /* ... */];
  response.status(200).json(administradores);
});
