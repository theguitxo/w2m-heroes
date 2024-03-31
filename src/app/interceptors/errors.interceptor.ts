import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, tap } from "rxjs";
import { ErrorDialogComponent } from "../components/error-dialog/error-dialog.component";

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(
    private readonly dialog: MatDialog
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        error: (error: HttpErrorResponse) => {
          const message = error?.error?.message ?? error.message
          this.dialog.open(ErrorDialogComponent, {
            data: {
              message
            },
          })
        },
      })
    );
  }
}