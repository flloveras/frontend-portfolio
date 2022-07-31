import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {
  nombreProye: string = '';
  urlProye: string = '';
  descripcionProye: string = '';
  anioProye!: number;

  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proye = new Proyecto(this.nombreProye, this.urlProye, this.descripcionProye, this.anioProye);
    this.sProyecto.save(proye).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
