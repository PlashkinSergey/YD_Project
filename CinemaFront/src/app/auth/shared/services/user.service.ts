import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private readonly URL: string = 'https://localhost:7039/api/Users';

  get Users(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  userById(id: string): Observable<User> {
    return this.http.get<User>(`${this.URL}${id}`);
  }

  userByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.URL}/email=${email}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.URL}/${user.id}`, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.URL}/${id}`);
  }

  userByEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.URL}/email=${email}/password=${password}`);
  }

  userByName(name: string): Observable<User> {
    return this.http.get<User>(`${this.URL}/name=${name}`);
  }
}
