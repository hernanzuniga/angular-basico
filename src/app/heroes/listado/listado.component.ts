import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
    heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
    heroeBorrado: string = "";

    borrarHeroe():void{      
      this.heroeBorrado = this.heroes.shift() || ""; //como el metodo retorna un 
                                                    //string o un undefined se indica el operador || para decir que pordefecto traiga un valor
    }
}
