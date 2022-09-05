import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private http: HttpClient;
  private baseUrl: string = '/api';

  recentlyGenerated: Subject<boolean> = new Subject<boolean>();

  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
  }

  getLastNames(): Observable<LastName[]> {
    return this.http.get<LastName[]>(this.baseUrl + "/greekNames/lastnames")
      .pipe(
        catchError((e) => new Observable<LastName[]>(subscriber => {
          console.log(e);
          subscriber.next(e);
        }))
      );
  }

  getFirstNames(): Observable<firstName[]> {
    return this.http.get<firstName[]>(this.baseUrl + "/greekNames/firstnames")
      .pipe(
        catchError((e) => new Observable<firstName[]>(subscriber => {
          console.log(e);
          subscriber.next(e);
        }))
      );
  }

  getNames(): Observable<GreekName[]> {
    return this.http.get<GreekName[]>(this.baseUrl + "/greekNames")
      .pipe(
        catchError((e) => new Observable<GreekName[]>(subscriber => {
          console.log(e);
          subscriber.next(e);
        }))
      )
  }

  removeName(name: string): Observable<ArrayBuffer> {
    const params = new HttpParams()
      .set('name', name);
    return this.http.delete<ArrayBuffer>(this.baseUrl + "/greekNames", {params})
      .pipe(
        catchError((e) => new Observable<ArrayBuffer>(subscriber => {
          console.log(e);
          subscriber.next(e);
        }))
      )
  }

  addName(body: GreekName): Observable<ArrayBuffer> {
    const content_ = JSON.stringify(body);
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    })

    return this.http.post<ArrayBuffer>(this.baseUrl + "/greekNames", content_, {headers})
      .pipe(
        catchError((e) => new Observable<ArrayBuffer>(subscriber => {
          console.log(e);
          subscriber.next(e);
        }))
      )
  }

  toggleRecentlyGenerated() {
    this.recentlyGenerated.next(true);
  }
}

export interface firstName {
  name: string,
  meaning: string,
  gender: string,
}

export interface LastName {
  lastname: string,
  meaning: string
}

export interface GreekName {
  name: string,
  meaning: string,
  gender: string,
  purpose: string,
  lastname: string,
  lastmeaning: string
}
