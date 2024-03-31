import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class MatPaginatorIntlEs extends MatPaginatorIntl {
  override firstPageLabel = 'Inicio';
  override itemsPerPageLabel = 'Resultados por página';
  override lastPageLabel = 'Fin';
  override nextPageLabel = 'Siguiente';
  override previousPageLabel = 'Anterior';

  override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0) {
      return 'Pagina 1 de 1';
    }

    const amountPages = Math.ceil(length / pageSize);
    return `Pagina ${page + 1} de ${amountPages}`
  }
}