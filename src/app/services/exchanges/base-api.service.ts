import { HttpBackend, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseApiService {
    protected http: HttpClient;

    constructor(http:HttpClient) {
        this.http = http;
    }

    get<T>(url: string, params?:any): Observable<T> {
        return this.http.get<T>(url,{params});
    }
}