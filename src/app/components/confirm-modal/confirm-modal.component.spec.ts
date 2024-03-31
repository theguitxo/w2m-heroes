import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmModalComponent } from './confirm-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('ConfirmModalComponent', () => {
  let component: ConfirmModalComponent;
  let fixture: ComponentFixture<ConfirmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmModalComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'title',
            body: 'body'
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title with the provided value', () => {
    const title = fixture.nativeElement.querySelector('.mat-mdc-dialog-title');
    expect(title.textContent).toContain('title');
  });

  it('should render the message with the provided value', () => {
    const title = fixture.nativeElement.querySelector('mat-dialog-content');
    expect(title.textContent).toContain('body');
  });
});
