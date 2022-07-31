import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienciaComponent implements OnInit {
  puestoExp: string = '';
  descripcionExp: string = '';
  empresaExp: string = '';
  aniodesdeExp!: number;
  aniohastaExp!: number;

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.puestoExp, this.descripcionExp, this.empresaExp, this.aniodesdeExp, this.aniohastaExp);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
