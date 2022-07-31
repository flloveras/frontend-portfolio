import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  institutoEdu: string = '';
  tituloEdu: string = '';
  urlfotoEdu: string = '';
  aniodesdeEdu!: number;
  aniohastaEdu!: number;

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Education(this.institutoEdu, this.tituloEdu, this.urlfotoEdu, this.aniodesdeEdu, this.aniohastaEdu);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
