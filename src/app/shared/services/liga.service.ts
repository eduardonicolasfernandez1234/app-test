import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Liga } from '../modules/liga';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  constructor(private http: HttpClient) { }

  obtenerLista(){
    const url = `${environment.api_base}leagues/`
    return this.http.get(url);
  }

  registrar(liga: Liga){
    const url = `${environment.api_base}leagues/`
    return this.http.post(url, liga);
  }

  actualizar(liga: Liga, id: number){
    const url = `${environment.api_base}leagues/${id}/`
    return this.http.put(url, liga);
  }

  eliminar(id: number){
    const url = `${environment.api_base}leagues/${id}/`
    return this.http.delete(url);
  }
}
