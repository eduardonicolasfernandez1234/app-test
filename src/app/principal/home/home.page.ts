import { Component, OnInit } from '@angular/core';
import { Liga } from 'src/app/shared/modules/Liga';
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
    this.ligaService.lista().subscribe((res: any) => {
      this.lista_liga = res;
      console.log(this.lista_liga);
    }, error => console.log(error))
  }

}
