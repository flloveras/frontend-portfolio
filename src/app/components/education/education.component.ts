import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
edu : Education [] = [];
  constructor(private eduserv : EducacionService, private tokenService : TokenService) { }
isLogged = false;
  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
cargarEducacion(): void {
  this.eduserv.lista().subscribe(data => { this.edu = data; })
}
delete(id?: number) {
  if (id != undefined) {
    this.eduserv.delete(id).subscribe(
      data => {
        this.cargarEducacion();
      }, err => {
        alert("No se pudo borrar la educacion");
      }
    )
  }
}
}
