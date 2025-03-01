import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RoomsService } from '../../services/rooms/rooms.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router, private roomService:RoomsService){}

  ngOnInit(): void {
    // Not in Use
  }

  crearSala(){
    this.roomService.createRoom().subscribe((response) => {
      const codigo = response[0].code;
      console.log("Codigo de la sala:" +codigo);
      this.router.navigate(['/sala-espera'], {queryParams:{code: codigo}});
    },
    (error) =>{
      alert("Ocurrio un error al intentar crear la sala");
      }
    );
  }

  escribirCodigo(){
    this.router.navigate(['/buscar-sala']);
  }

}
