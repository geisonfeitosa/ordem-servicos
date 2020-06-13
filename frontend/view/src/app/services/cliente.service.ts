import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const SERVICE = environment.apiUrl;

@Injectable()
export class ClienteService {
    constructor(private http: HttpClient) { }

    public save(cliente) :Observable<any> {
        return this.http.post(`${SERVICE}/rest/cliente`, cliente);
    }

    public list() :Observable<any> {
        return this.http.get(`${SERVICE}/rest/cliente`);
    }

    public listByNome(nome) :Observable<any> {
        return this.http.post(`${SERVICE}/rest/cliente/complete`, nome);
    }

    public delete(id) :Observable<any> {
        return this.http.delete(`${SERVICE}/rest/cliente/${id}`);
    }

} 
