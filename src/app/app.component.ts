import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blue Green 통신 테스트 - v1.6'

  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  getMeow(): void {
    this.apiService.getMeow()
      .subscribe(meow => this.messageService.add(meow.message));
  }
}
