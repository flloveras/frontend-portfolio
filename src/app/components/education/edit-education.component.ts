import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  edu!: Education;
  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sEducacion.detail(id).subscribe(
        data =>{
          this.edu = data;
        }, err =>{
          alert("Error al modificar educacion");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sEducacion.update(id, this.edu).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar educacion");
           this.router.navigate(['']);
        }
      )
    }

}
