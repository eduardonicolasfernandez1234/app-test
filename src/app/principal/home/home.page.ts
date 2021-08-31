import { Component, OnInit } from '@angular/core';
import { Liga } from 'src/app/shared/modules/liga';
import { LigaService } from 'src/app/shared/services/liga.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  lista_liga: Array<Liga> = [];

  constructor(
    private ligaService: LigaService
  ) {}


  ngOnInit(): void {
    this.obtenerListaLiga();
  }

  obtenerListaLiga(){
    this.ligaService.obtenerLista().subscribe((res: any) => {
      console.log(res);
      this.lista_liga = res;
    }, error => console.log(error))

    // this.lista_liga.forEach((element) => {
    //   console.log(element['Logo de la Liga']);
    // })
  }

}
