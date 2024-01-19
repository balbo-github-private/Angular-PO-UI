import { Component, OnInit, ViewChild } from '@angular/core';
import { PoDynamicFormComponent, PoDynamicFormField, PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';
import { QueryParamsType } from '@po-ui/ng-components/lib/components/po-table/po-table-base.component';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates/lib';
import { ProAppConfigService} from '@totvs/protheus-lib-core';
import { finalize } from 'rxjs/operators';
import { Produtos } from './shared/produtos.model';
import { ProdutosService } from './shared/produtos.service';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomAction,
  PoPageDynamicTableCustomTableAction,
  PoPageDynamicTableOptions
} from '@po-ui/ng-templates';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

  public colunasDaTabela: Array<PoTableColumn>;
  public itensDaTabela: Produtos[] = [];
  public filtroBuscaAvancada: Array<PoPageDynamicSearchFilters>;
  public opcoesTela: Array<PoPageAction> = [
    { label: 'Integrar Selecionados', action: this.salvarFormulario.bind(this)  },
  ];
  public produto: { [ID: string]: QueryParamsType } = {};
  public carregandoTabela = false;

  public formularioProduto: Array<PoDynamicFormField>;
  public confirmarModal: PoModalAction = {
    action: () => {
      this.salvarFormulario();
    },
    label: 'Confirmar',
  };
  public cancelarModal: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancelar',
  };

  public acoesTabela: Array<PoTableAction> = [

  //  {
  //    action: this.excluirProduto.bind(this),
  //    icon: 'po-icon-delete',
  //    label: 'Excluir',
  //  },
  ];

  private filtrosAplicados: string = '';
  private page: number = 1;
  private edicao = false;

  @ViewChild('tableProdutos') tabelaProdutos: PoTableComponent;
  @ViewChild(PoModalComponent) poModal: PoModalComponent;
  @ViewChild(PoDynamicFormComponent) dynamicForm: PoDynamicFormComponent;

  constructor(
    private produtosService: ProdutosService,
    private poNotificatioService: PoNotificationService,
    private configService: ProAppConfigService
  ) {
    this.colunasDaTabela = this.retornaColuna();
    this.filtroBuscaAvancada = this.retornaBuscaAvançada();
    this.formularioProduto = [
      {
        property: 'TIPO_EXTRATO',
        label: 'Tipo Extrato',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'CENTRO',
        label: 'Centro',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'CONTA',
        label: 'Conta',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'DATA',
        label: 'Data',
        type: 'date',
        gridColumns: 12
      },
      {
        property: 'DOCUMENTO',
        label: 'Documento',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'EXERCICIO',
        label: 'Exercicio',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'ITEM',
        label: 'Item',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'LANCAMENTO',
        label: 'Lançamento',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'TEXTO',
        label: 'Texto',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'TIPO',
        label: 'Tipo',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'ID',
        label: 'ID',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'CODIGO',
        label: 'Código',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'INTEGRADO',
        label: 'Integrado',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'NUMERO_INTEGRACAO',
        label: 'Numero Integração',
        type: 'string',
        gridColumns: 12
      },
      {
        property: 'USINA',
        label: 'Usina',
        type: 'string',
        gridColumns: 12
      },

    ];
  }

  ngOnInit() {
    this.itensDaTabela = [];
    this.getItens(1);
  }

  getItens(page: number = 1):any {
    this.carregandoTabela = true;
    if (page === 1) this.itensDaTabela = [];
    this.produtosService
      .getAll(page, this.filtrosAplicados)
      .pipe(finalize(() => (this.carregandoTabela = false)))
      .subscribe((res) => {
        this.itensDaTabela = this.itensDaTabela.concat(res.modelextratocontabilrazaoCopersucar);
      });
  }
  carregarMais(): void {
    this.page++;
    this.getItens(this.page);
    console.log(this.filtrosAplicados);
  }
/*
  private onClick() {
    alert('Clicked in menu item');
  }
*/
  salvarFormulario(): void {
  
    const hiringProcessesKeys = Object.keys(this.itensDaTabela);
  

    const selectedItems = hiringProcessesKeys
        .filter(key => this.itensDaTabela[key]['$selected'])
        .map(selectedItemKey => this.itensDaTabela[selectedItemKey]);
  

        console.log(selectedItems); 

        for (let i = 0; i < selectedItems.length; i++) {


      this.produtosService.post(selectedItems[i].ID).subscribe(
          (res) => {
            this.poNotificatioService.success("Dados Copersucar Integrados com sucesso ao Protheus!")
            this.getItens();
            this.poModal.close();
            ;
          },
          (error) => {
            this.poNotificatioService.error(error.error.errorMessage)
          }
        );
        }
  }

  buscaProduto(produto: any) {
  //  this.filtrosAplicados = produto;
  //  this.page = 1;
  //  produto.length > 0 ? this.filtrosAplicados = 'codigo=' + produto : this.filtrosAplicados = '';
//console.log(produto)
 //   this.getItens(this.page);
 produto ? this.searchItems(produto) : this.resetFilters();
 console.log(produto)
  }

  resetFilters() {
   this.getItens();
  }

  private searchItems(filter: any) {
    console.log(filter)
    this.itensDaTabela = this.filter(filter);
  }

  retornaBuscaAvançada(): PoPageDynamicSearchFilters[] {
    return [
      { property: 'Data de', type: 'date', gridColumns: 4 },
      { property: 'Data até', type: 'date', gridColumns: 4 },
      {
        property: 'Empresa',
        gridColumns: 12 ,
       type: 'string',
        options: [
          { value: '2', label: '2 - Usina Santo Antônio' },
          { value: '3', label: '3 - Usina São Francisco' },
          { value: '9', label: '9 - Usina Uberaba' },
        ],
      }
    ];
  }


  pageCustomActions: Array<PoPageDynamicTableCustomAction> = [

    {
      label: 'Integrar',
      action: this.incluiProduto.bind(this),
      selectable: true,
      icon: 'po-icon-lock'
    }
  ];

  realizaBuscaAvancada(retornoBuscaAvancada: {
    [ID: string]: QueryParamsType;
  }): void {
    this.filtrosAplicados = '';
    for (let atributo in retornoBuscaAvancada) {
      if (retornoBuscaAvancada.hasOwnProperty(atributo)) {
        this.filtrosAplicados += `${''}${(retornoBuscaAvancada[atributo])}/`;
       
      }
    }
    this.page = 1;
    this.getItens();
  }

  clickDisclaimers(e: any[]) {
    this.filtrosAplicados = '';
    this.page = 1;
    if (e.length === 0) {
      this.getItens();
    } else {
      e.map(
        (disclaimer) =>
          (this.filtrosAplicados += `${disclaimer.property}=${disclaimer.value}&`)
      );
      this.getItens();
    }
  }

  filter(filters: any) {
    const filteredItems = this.itensDaTabela.filter((register: { [key: string]: any }) => {
      return Object.values(register).some(value => {
          if (typeof value === 'string') {
              return value.toLowerCase().includes(filters.toLowerCase());
          }
          return false;
      });
    });
  
    return filteredItems;
  }

  retornaColuna(): Array<PoTableColumn> {
    return [
      {
        property: 'TIPO_EXTRATO',
        label: 'Tipo Extrato',
        width: '30%',
      },
      {
        property: 'CENTRO',
        label: 'Centro',
        width: '30%',
      },
      {
        property: 'CONTA',
        label: 'Conta',
        width: '30%',
      },
      {
        property: 'DATA',
        label: 'Data',
        width: '30%',
      },
      {
        property: 'DOCUMENTO',
        label: 'Documento',
        width: '30%',
      },
      {
        property: 'EXERCICIO',
        label: 'Exercicio',
        width: '30%',
      },
      {
        property: 'ITEM',
        label: 'Item',
        width: '30%',
      },
      {
        property: 'LANCAMENTO',
        label: 'Lançamento',
        width: '30%',
      },
      {
        property: 'TEXTO',
        label: 'Texto',
        width: '30%',
      },
      {
        property: 'TIPO',
        label: 'Tipo',
        width: '30%',
      },
      {
        property: 'ID',
        label: 'ID',
        width: '30%',
      },
      {
        property: 'CODIGO',
        label: 'Código',
        width: '30%',
      },
      {
        property: 'INTEGRADO',
        label: 'Integrado',
        width: '30%',
      },
      {
        property: 'NUMERO_INTEGRACAO',
        label: 'Numero Integração',
        width: '30%',
      },
      {
        property: 'USINA',
        label: 'Usina',
        width: '30%',

      },
    ];
  }


  incluiProduto(this: { itensDaTabela: { [key: string]: any } }    ): void {
    const hiringProcessesKeys = Object.keys(this.itensDaTabela);
  

    const selectedItems = hiringProcessesKeys
        .filter(key => this.itensDaTabela[key]['$selected'])
        .map(selectedItemKey => this.itensDaTabela[selectedItemKey]);
  

        console.log(selectedItems);

       



  }


   
  



}
