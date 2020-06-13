import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const SERVICE = environment.apiUrl;

@Injectable()
export class OrdemServicoService {
    constructor(private http: HttpClient) { }

    public save(ordemServico) :Observable<any> {
        return this.http.post(`${SERVICE}/rest/ordem-servico`, ordemServico);
    }

    public list() :Observable<any> {
        return this.http.get(`${SERVICE}/rest/ordem-servico`);
    }

    public delete(id) :Observable<any> {
        return this.http.delete(`${SERVICE}/rest/ordem-servico/${id}`);
    }

} 
