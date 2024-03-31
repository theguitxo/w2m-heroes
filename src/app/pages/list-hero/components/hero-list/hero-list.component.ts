import { Component, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource } from '@angular/material/table';
import { filter, Observable, take, tap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Hero } from '../../../../models/hero.model';
import { HeroState } from '../../../../models/state.model';
import { FirstLetterUpperCasePipe } from '../../../../pipes/first-letter-uppercase.pipe';
import { setHeroEdit, deleteHero } from '../../../../store/app.actions';
import { hasHeroList, noHeroData, getHeroList } from '../../../../store/app.selectors';
import { ConfirmModalComponent } from '../../../../components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private store = inject(Store<HeroState>);
  private destroyRef = inject(DestroyRef);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  displayedColumns: string[] = ['real_name', 'alias', 'group', 'planet_of_origin', 'powers', 'weapons', 'options'];
  dataSource!: MatTableDataSource<Hero>;
  
  showList!: Observable<boolean>;
  noData!: Observable<boolean>;

  /**
   * Angular lifecycle: Inits the observable that fills the table with the result of filtering data
   */
  ngOnInit(): void {
    this.showList = this.store.select(hasHeroList);
    this.noData = this.store.select(noHeroData);

    this.store.select(getHeroList)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(data => !!data.length),
        tap(data => {
          this.dataSource = new MatTableDataSource(data);
          setTimeout(() => this.dataSource.paginator = this.paginator, 0);
        })
      ).subscribe();
  }

  /**
   * Set the data of a super hero to edit and navigates to the edition / new page
   * @param hero data of the super hero to edit
   */
  edit(hero: Hero): void {
    this.store.dispatch(setHeroEdit({ hero }));
    this.router.navigate(['hero']);
  }

  /**
   * Deletes a super hero
   * @param item data of the super hero to delete
   */
  delete(item: Hero): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        title: 'Eliminar Super Heroe',
        body: `¿Desea eliminar a ${new FirstLetterUpperCasePipe().transform(item.alias)}?`
      }
    });

    dialogRef.afterClosed()
      .pipe(
        take(1),
        filter(value => !!value),
        tap(() => this.store.dispatch(deleteHero({ id: item.id! })))
      ).subscribe();
  }
}
