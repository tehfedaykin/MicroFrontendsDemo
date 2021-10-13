import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap, startWith, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Villager, VillagersService } from '../villagers.service';

@Component({
  selector: 'bitovi-similar-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  private villagers$ = this.apiService.getVillagers();
  
  public similarVillagers$!: Observable<{
    loading: boolean;
    villagers: Villager[]
  }>;
  constructor(private route: ActivatedRoute, private apiService: VillagersService) { }

  ngOnInit(): void {
    let selectedVillager$ = this.route.params.pipe(
      mergeMap((params: Params) => this.apiService.getVillager(params.id)),
    );

    this.similarVillagers$ = selectedVillager$.pipe(
      withLatestFrom(this.villagers$),
      map(([selectedVillager, villagers]) => {
        const villagerPersonality = selectedVillager.personality;
        const villagersToShow = villagers.filter((villager: Villager) => {
          const villagerHasPersonality = villager.personality === villagerPersonality;
          return villagerHasPersonality && villager.id != selectedVillager.id;
        });
        const shuffled = villagersToShow.sort(() => 0.5 - Math.random());
        return {
          loading: false,
          villagers: shuffled.slice(0,3)
        }
      }),
      startWith({
        loading: true,
        villagers: []
      })
    )
  }

}
