import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component,OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';
import { consolidadoComponent } from './consolidado.component';

describe('consolidadoServiceComponent', () => {
  let component: consolidadoComponent;
  let fixture: ComponentFixture<consolidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ consolidadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(consolidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
