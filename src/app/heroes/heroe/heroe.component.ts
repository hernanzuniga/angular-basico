import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent {
    nombre  : string = "IronMan";
    edad    : number = 45;

    
    public get nombreCapitalzado() : string {
        return this.nombre.toUpperCase();
    }   

    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void{
        this.edad = 30;        
    }
}