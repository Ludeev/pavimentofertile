import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MailingList } from '../models/mailingList';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  subscribeMailingList(mailingList: MailingList[]) {
    return this.http.post<any>('https://v1.nocodeapi.com/pavimentofertile/google_sheets/arqxieYklFDrUbjV/addRows?tabId=Mailinglist', mailingList);
  }

}

