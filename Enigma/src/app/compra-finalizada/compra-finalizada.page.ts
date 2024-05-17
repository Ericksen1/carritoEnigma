import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-compra-finalizada',
  templateUrl: './compra-finalizada.page.html',
  styleUrls: ['./compra-finalizada.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CompraFinalizadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
