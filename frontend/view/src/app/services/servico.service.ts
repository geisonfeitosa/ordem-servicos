import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const SERVICE = environment.apiUrl;

@Injectable()
export class ServicoService {
    constructor(private http: HttpClient) { }

    public save(servico) :Observable<any> {
        return this.http.post(`${SERVICE}/rest/servico`, servico);
    }

    public list() :Observable<any> {
        return this.http.get(`${SERVICE}/rest/servico`);
    }

    public listByNome(nome) :Observable<any> {
        return this.http.post(`${SERVICE}/rest/servico/complete`, nome);
    }

    public delete(id) :Observable<any> {
        return this.http.delete(`${SERVICE}/rest/servico/${id}`);
    }

} 
