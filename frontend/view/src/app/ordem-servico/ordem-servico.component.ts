import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { ServicoService } from '../services/servico.service';
import { OrdemServicoService } from '../services/ordem-servico.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


interface Cliente {
  id: number,
  nome: string,
  cpfCnpj: string,
  telefone: string,
  logradouro: string,
  municipio: string,
  uf: string
}

interface OrdemServico {
  id: number,
  cliente: Cliente,
  servicos: Servico[]
}

interface Servico {
  id: number,
  nome: string
}


@Component({
  selector: 'o-ordem-servico',
  templateUrl: './ordem-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})
export class OrdemServicoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; 
  
  servicosTable: MatTableDataSource<any> = new MatTableDataSource([]);
  displayedColumns = ['nome', 'acoes'];

  ordemServico: OrdemServico;
  txtCliente = '';
  txtServico = '';
  txtMunicipioUf = '';
  clientes: Cliente[];
  servicos: Servico[];


  constructor(
    public dialog: MatDialog,
    private clienteService: ClienteService,
    private servicoService: ServicoService,
    private ordemServicoService: OrdemServicoService
  ) { }

  ngOnInit(): void {
    this.servicosTable.paginator = this.paginator;
    this.novaOrdem();
    this.getServicos();
    this.getClientes();
  }


  novaOrdem() {
    this.ordemServico = {
      id: null,
      cliente: {
        id: null,
        nome: '',
        cpfCnpj: '',
        telefone: '',
        logradouro: '',
        municipio: '',
        uf: ''
      },
      servicos: []
    };
  }

  getClientes() {
    this.clienteService.list().subscribe(r => {
      this.clientes = r;
    });
  }

  filterCliente(descCliente) {
    if (descCliente.value.length > 2) {
      this.clienteService.listByNome(descCliente.value).subscribe(r => {
        this.clientes = r;
      });
    } else {
      this.getClientes();
    }
  }

  async novoCliente() {
    this.clientes = [];
    await Swal.fire(
      'Ops!',
      'Em breve esta funcionalidade estará disponível.'
    );
    this.getClientes();
  }

  setCliente(cliente) {
    this.ordemServico.cliente = cliente;
    this.txtCliente = this.ordemServico.cliente.nome;
    this.txtMunicipioUf = `${this.ordemServico.cliente.municipio} - ${this.ordemServico.cliente.uf}`;
  }

  getServicos() {
    this.servicoService.list().subscribe((r: Servico[]) => {
      this.servicos = r;
        this.ordemServico.servicos.forEach(i => {
          this.servicos = this.servicos.filter(s => s.id !== i.id);
        });
    });
  }

  filterServico(descServico) {
    if (descServico.value.length > 2) {
      this.servicoService.listByNome(descServico.value).subscribe((r: Servico[]) => {
        this.servicos = r;
        this.ordemServico.servicos.forEach(i => {
          this.servicos = this.servicos.filter(s => s.id !== i.id);
        });
      });
    } else {
      this.getServicos();
    }
  }

  novoServico() {
    this.servicos = [];
    const dialogRef = this.dialog.open(DialogServico, {
      height: 'auto',
      minWidth: '60%'
    });
    dialogRef.componentInstance.onOk.subscribe((resp: any) => {
      if(resp.obj != undefined) {
        this.servicoService.save(resp.obj).subscribe(r => {
          this.setServico(r);
          this.getServicos();
          resp.dialog.close();
        });
      } else {
        resp.dialog.close();
        this.getServicos();
      }
    });
  }

  setServico(servico) {
    this.ordemServico.servicos.push(servico);
    this.servicosTable.data = this.ordemServico.servicos;
    this.txtServico = servico.nome;
    this.getServicos();
  }

  deleteServico(servico) {
    this.ordemServico.servicos = this.ordemServico.servicos.filter(i => i.id !== servico.id);
    this.servicosTable.data = this.ordemServico.servicos;
    this.getServicos();
  }

  cancelar() {
    this.txtCliente = '';
    this.txtServico = '';
    this.txtMunicipioUf = '';
    this.novaOrdem();
    this.getServicos();
    this.getClientes();
  }

  salvar() {
    this.ordemServicoService.save(this.ordemServico).subscribe(() => {
      Swal.fire(
        'Tudo certo',
        'A Ordem de Servicços foi salva com Sucesso.'
      );
      this.txtCliente = '';
      this.txtServico = '';
      this.txtMunicipioUf = '';
      this.novaOrdem();
      this.getServicos();
      this.getClientes();
    })
  }

}


@Component({
  selector: 'app-servico-form',
  templateUrl: 'dialog-servico.component.html',
  styleUrls: ['./ordem-servico.component.css']
})
export class DialogServico {

  @Output() onOk = new EventEmitter();

  servico: Servico = {
    id: null,
    nome: ''
  }

  constructor(
    public dialogRef: MatDialogRef<DialogServico>
  ) { }


  cancelar() {
    this.onOk.emit({ dialog: this.dialogRef });
  }

  salvar() {
    this.onOk.emit({ obj: this.servico, dialog: this.dialogRef });
  }

}