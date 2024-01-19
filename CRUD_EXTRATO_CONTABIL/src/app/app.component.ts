import { Component,OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private proAppConfigService: ProAppConfigService) {
    if (!this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
    }
  }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Razão', link: "razao", shortLabel: "Razão", icon: "po-icon po-icon-balance" },
    { label: 'Analítico', link: "analitico", shortLabel: "Analítico", icon: "po-icon po-icon-balance" },
    { label: 'Consolidado', link: "consolidado", shortLabel: "Consolidado", icon: "po-icon po-icon-balance" },
    { label: 'Sair', link: '/', shortLabel: 'Sair', icon: 'po-icon-exit', action: this.closeApp.bind(this) }
  ];

  ngOnInit(): void {

  }

  private onClick() {
    alert('Clicked in menu item')
  }
  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('O App não está sendo executado dentro do Protheus.');
    }
  }
}
