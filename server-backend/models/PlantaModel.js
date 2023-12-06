
class Imagen {
    constructor(id, url) {
      this.id = id;
      this.url = url;
    }
  }
  
  class PlantaModel {
    constructor(plantaId, familia, nombreCientifico, nombreComun, descripcion, propiedadesMedicinales, comoUsar, imagenes, qr) {
      this.plantaId = plantaId;
      this.familia = familia;
      this.nombreCientifico = nombreCientifico;
      this.nombreComun = nombreComun;
      this.descripcion = descripcion;
      this.propiedadesMedicinales = propiedadesMedicinales;
      this.comoUsar = comoUsar;
      this.imagenes = imagenes.map((url, index) => new Imagen(index.toString(), url));
      this.qr = qr;
    }
  }
  
  module.exports = { PlantaModel, Imagen };
  