import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  perso : persona = new persona ("", "", "", "", "");

  constructor(private sPersona: PersonaService, private tokenService: TokenService, private activatedRouter: ActivatedRoute) { }
  
  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data => { this.perso = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sPersona.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo borrar la persona");
        }
      )
    }
  }

}
