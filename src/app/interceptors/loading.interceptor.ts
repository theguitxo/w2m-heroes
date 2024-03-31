import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { LoadingService } from "../services/loader.service";


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(
    private readonly loadingService: LoadingService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoading();

    return next.handle(req).pipe(
      finalize(() => this.loadingService.hideLoading())
    );
  }
}