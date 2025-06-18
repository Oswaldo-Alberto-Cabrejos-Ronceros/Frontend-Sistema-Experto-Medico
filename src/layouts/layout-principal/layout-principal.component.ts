import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarNavLayoutPrincipalComponent } from './components/bar-nav-layout-principal/bar-nav-layout-principal.component';

@Component({
  selector: 'app-layout-principal',
  imports: [RouterOutlet, BarNavLayoutPrincipalComponent],
  templateUrl: './layout-principal.component.html',
  styleUrl: './layout-principal.component.scss',
})
export class LayoutPrincipalComponent {}
