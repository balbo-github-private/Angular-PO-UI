import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component,OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';
import { analiticoComponent } from './analitico.component';

describe('analiticoServiceComponent', () => {
  let component: analiticoComponent;
  let fixture: ComponentFixture<analiticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ analiticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(analiticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
