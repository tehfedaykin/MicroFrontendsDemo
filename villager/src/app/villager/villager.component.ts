import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { VillagersService, Villager } from '../villagers.service';

@Component({
  selector: 'bitovi-villager-villager',
  templateUrl: './villager.component.html',
  styleUrls: ['./villager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillagerComponent implements OnInit {
  public villager$!: Observable<Villager>;

  constructor(
    private route: ActivatedRoute, 
    private apiService: VillagersService,
    private cdr: ChangeDetectorRef
  ){
    
  }

  ngOnInit(): void {
    this.villager$ = this.route.params.pipe(
      switchMap((params: Params) => this.apiService.getVillager(params.id)),
      tap(() => {
        this.cdr.markForCheck();
        //zoneJS is barfing here. 
        setTimeout(() => {
          this.cdr.detectChanges()
        });
      })
    )
  }

}
