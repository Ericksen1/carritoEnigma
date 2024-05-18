import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonLabel,IonThumbnail
  , IonList, IonItem, IonBackButton, IonIcon,
 } from '@ionic/angular/standalone';
import { DatabaseService} from './database.service'; // Importa servicio de datos
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
     RouterLink, IonThumbnail,IonList, IonItem, IonIcon, IonBackButton, IonList, IonLabel, IonButton, ]
})
export class CarritoPage implements OnInit {
  items: Item[] = [];
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.databaseService.getData().subscribe((data: any[]) => {
      this.items = data; 
    });
  }

  increaseQuantity(item: Item) {
    item.quantity++;
    item.total = item.quantity * item.price;
  }

  decreaseQuantity(item: Item) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.quantity * item.price;
    }
  }

  removeItem(item: Item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotal(): number {
    //Aqui se puede usar una de las dos 
    return this.items.reduce((total, item) => total + item.total, 0);
    /* let total = 0;
  for (let item of this.items) {
    total += item.price;
  }
  return total;*/ 
  }
}
