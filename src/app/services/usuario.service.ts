import { Injectable } from '@angular/core';
import { usuario } from '../components/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: usuario[] = [
    { usuario: 'Jp', nombre: 'Juan', apellido: "Gutierrez", sexo: 'M' },
    { usuario: 'Ja', nombre: 'Angie', apellido: "Gutierrez", sexo: 'F' },
    { usuario: 'Jp', nombre: 'Juan', apellido: "Chaurra", sexo: 'F' },
    { usuario: 'Jj', nombre: 'Juanpa', apellido: "Echeverr", sexo: 'M' },
    { usuario: 'Ad', nombre: 'Adri', apellido: "Echeverr", sexo: 'F' },
    { usuario: 'Jj', nombre: 'Juanpa', apellido: "Echeverr", sexo: 'M' },

  ];


  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }
  
  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }
}
