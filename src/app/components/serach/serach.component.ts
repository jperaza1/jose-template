import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';



@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html'
})
export class SerachComponent {

  termino:string = undefined;

  constructor(private route:ActivatedRoute,
              public _ps:ProductosService ) {

    route.params.subscribe(parametros =>{
        this.termino = parametros['termino'];
        _ps.buscar_producto(this.termino);
    });  
   }

}
