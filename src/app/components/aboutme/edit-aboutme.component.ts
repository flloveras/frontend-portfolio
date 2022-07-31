import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {
  perso!: persona;
  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sPersona.detail(id).subscribe(
        data =>{
          this.perso = data;
        }, err =>{
          alert("Error al modificar persona");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sPersona.update(id, this.perso).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar persona");
           this.router.navigate(['']);
        }
      )
    }

}
