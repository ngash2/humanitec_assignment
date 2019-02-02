import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { BASE_URL } from '@app/app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g'
    })
  };

  baseurl;

  constructor(private http: HttpClient, @Inject(BASE_URL) private url: string) {
    this.baseurl = url;
  }

  /**
   * Make a HTTP GET call to the API
   * @param {String} url
   * @param {HttpParams} params
   * @returns {Observable} Observable
   */

  public get(url: String, params: HttpParams) {
    const u = `${this.baseurl}${url}`;
    return this.http.get(u, { ...this.httpOptions, params });
  }

  /**
   * Make a HTTP POST call to the API
   * @param {String} url
   * @param {any} obj
   * @returns {Observable} Observable
   */
  public post(url: String, obj: any) {
    return this.http.post(`${this.baseurl}${url}`, obj, this.httpOptions);
  }

  /**
   * Make a HTTP DELETE call to the API
   * @param {String} url
   * @returns {Observable} Observable
   */
  public delete(url: String) {
    return this.http.delete(`${this.baseurl}${url}`, this.httpOptions);
  }
}
