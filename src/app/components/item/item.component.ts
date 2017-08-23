import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {

  producto: any = undefined;
  parametro:string;

  constructor(private route:ActivatedRoute, public _ps:ProductosService) { 
    route.params.subscribe( parametros =>{
      _ps.cargr_producto(parametros['id'])
        .subscribe( result =>{
          this.parametro = parametros['id']
          this.producto = result.json();
          console.log(this.producto);
        })
        //console.log(parametros);
        //console.log(parametros['id']);
    })
  }



}
