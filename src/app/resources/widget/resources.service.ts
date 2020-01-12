import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Widget } from "./models";

@Injectable({
  providedIn: "root"
})
export class ResourcesService {
  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  getWidgets() {
    return this.http.get<Widget[]>(environment.apiUrl + "/widgets");
  }

  getWidgetById(id: number) {
    return this.http.get<Widget[]>(`${environment.apiUrl}/widgets/${id}`);
  }

  deleteWidget(id: number) {
    return this.http.delete<Widget[]>(`${environment.apiUrl}/widgets/${id}`);
  }

  createWidget(model) {
    model.data = JSON.parse(model.data);
    return this.http.post<Widget[]>(
      environment.apiUrl + "/widgets",
      JSON.stringify(model),
      this.httpOptions
    );
  }

  updateWidget(model) {
    model.data = JSON.parse(model.data);
    return this.http.put<Widget[]>(
      environment.apiUrl + "/widgets/" + model.id,
      JSON.stringify(model),
      this.httpOptions
    );
  }
}

// Fake data for table
// [  {  "id": 1, "first_name": "Mark",  "last_name": "Otto",  "username": "@mdo"  } ]

// Fake data for messenger
// [ { "id": 1, "user_id": 15648, "first_name": "David", "last_name": "Scott", "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim." } ]
