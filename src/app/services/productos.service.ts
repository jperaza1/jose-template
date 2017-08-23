import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean = true;
  constructor(private http:Http) {
      this.cargar_productos();
   }

   public cargr_producto(_id:string){

    return this.http.get(`https://portafolio-3e190.firebaseio.com/productos/${_id}.json`);
      
   }

  public buscar_producto(termino:string){
    if(this.productos.length === 0){
      this.cargar_productos().then( ()=>{
        this.filtrar_productos(termino);
      });
    }else{
      this.filtrar_productos(termino);
    }
    
  }

  private filtrar_productos(termino:string){

    this.productos_filtrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach( prod=>{
      if(prod.categoria.indexOf(termino)>= 0 || prod.titulo.toLowerCase().indexOf( termino )>= 0){
        this.productos_filtrado.push(prod);
      }

    })
  }

   public cargar_productos(){
     this.cargando = true;
     
     let promesa = new Promise ( ( resolve, reject )=>{
      this.http.get("https://portafolio-3e190.firebaseio.com/productos_idx.json")
      .subscribe( res => {
          this.productos = res.json();
          this.cargando = false;
          resolve();
      });
     });
    
     return promesa;
   }

}
