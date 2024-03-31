import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorDialogComponent } from './error-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDialogComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            message: 'test'
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the message inside the modal', () => {
    const content = fixture.nativeElement.querySelector('mat-dialog-content');
    expect(content.textContent).toContain('test');
  });
});
