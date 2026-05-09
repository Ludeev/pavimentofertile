import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MailingList } from 'src/app/models/mailingList';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private apiService: ApiService) { }
    email: string;
    mailingListActive: boolean = true;
    showModal: boolean = false;

    isSubscribed = false;
    isLoading = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    let list: MailingList[] = [
        {
            Email: this.email,
            DataIscrizione: new Date().toLocaleString()
        }
    ]
    this.showModal = true;
    this.apiService.subscribeMailingList(list).subscribe(
      response => {
        this.isSubscribed = true;
        //this.showModal = true;
        console.log(response)
        this.mailingListActive = false;
        this.isLoading = false;
      },
      error => console.log(error)
    );
  }
}
