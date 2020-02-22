import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService{
i = 0 ;

    onMove(){
        console.log(++this.i);
    }
}