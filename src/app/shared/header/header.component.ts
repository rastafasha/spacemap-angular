import { Component, OnInit } from '@angular/core';
import { MapaService } from 'src/app/services/services/mapa.service';
import { PaisService } from 'src/app/services/services/pais.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public linktTheme = document.querySelector('#theme');// se comunica el id pulsado
  public links: NodeListOf<Element>; //obtiene clase del div
public user;
  query: string = '';
  paises: any[] = [];

  isLoading:boolean= false;
  constructor(
    private paisService: PaisService,
    private mapaService: MapaService,
  ) { }

  classie:any;

  ngOnInit(): void {
    this.getPaises()
    //this.links = document.querySelectorAll('.selector');//obtiene clase del div // se dispara despues de inicializado el componente
  }


  openMenu(){

    var menuLateral = document.getElementsByClassName("cbp-spmenu");
      for (var i = 0; i<menuLateral.length; i++) {
         menuLateral[i].classList.toggle("cbp-spmenu-open");
        // console.log(colorPais)

      }
  }

  search() {
    return this.paisService.search(this.query).subscribe((res: any) => {
      this.paises = res;
      if (!this.query) {
        this.ngOnInit();
      }
    });
  }

  public PageSize(): void {
    this.getPaises();
    this.query = '';
  }

  getPaises(){
    this.isLoading = true;
    this.paisService.getPaises().subscribe((resp: any) => {
      this.paises = resp.countries;
      // console.log(this.paises);
      this.isLoading = false;
    });
  }

  selectedDireccion(pais){
    //llamamos el id seleccionado
    console.log(pais)
    this.mapaService.filter(pais.code);
    
    // const idAttr = pais.srcElement.attributes.id;
    // const value = idAttr.nodeValue;
    // this.mapaService.filter(value);
  }


}
