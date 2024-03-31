import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderWrapperComponent } from './loader-wrapper.component';
import { LoadingService } from '../../services/loader.service';
import { Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export class LoadingServiceMock {
  isLoading(): Observable<boolean> {
    return of(true);
  }
}

describe('LoaderWrapperComponent', () => {
  let component: LoaderWrapperComponent;
  let fixture: ComponentFixture<LoaderWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderWrapperComponent],
      imports: [
        MatProgressSpinnerModule
      ],
      providers: [
        {
          provide: LoadingService,
          useClass: LoadingServiceMock
        }
      ]
    });
    fixture = TestBed.createComponent(LoaderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sould show the spinner when isLoading is true', () => {
    const spinner = fixture.nativeElement.querySelector('mat-spinner');

    expect(spinner).not.toBeNull();
  });
});
