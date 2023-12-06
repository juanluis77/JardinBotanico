const AdministradorModel = require('../../models/AdministradorModel');

test('Constructor de AdministradorModel', () => {
  const admin = new AdministradorModel('1', 'John Doe', 'john@example.com', 'hashedPassword');
  
  expect(admin.adminId).toBe('1');
  expect(admin.nombre).toBe('John Doe');
  expect(admin.correo).toBe('john@example.com');
  expect(admin.contrasena).toBe('hashedPassword');
});
