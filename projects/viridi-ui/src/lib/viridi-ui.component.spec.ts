import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViridiUiComponent } from './viridi-ui.component';

describe('ViridiUiComponent', () => {
  let component: ViridiUiComponent;
  let fixture: ComponentFixture<ViridiUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViridiUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViridiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
