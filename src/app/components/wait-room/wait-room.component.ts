import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms/rooms.service';

@Component({
  selector: 'app-wait-room',
  templateUrl: './wait-room.component.html',
  styleUrls: ['./wait-room.component.css'],
  providers: [RoomsService],
  template: `
  <div>
      <p>Cantidad de personas en la página: {{ numberGamers }}</p>
      <!-- Aquí iría el contenido de tu componente -->
    </div>
  `
})
export class WaitRoomComponent implements OnInit {
  numberGamers : number = 0;

  constructor(private roomService: RoomsService){
    this.crear();
    this.obtenerSala();
  }
  ngOnInit(): void {
  }

  crear(){
    this.roomService.createRoom().subscribe((response) => {
      
      this.numberGamers++;
      console.log(this.numberGamers);
    },
    (error) =>{
    alert("Ocurrio un error al intentar crear la sala");
      }
    );
  }

  obtenerSala():void{
    this.roomService.getRoom().subscribe((param) => {
      console.log(param);
    })
  }
}
