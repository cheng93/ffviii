import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Character, AllCharacters } from '../models/character';

@Injectable()
export class CharacterService {
    getAll(): BehaviorSubject<Character[]> {
        return new BehaviorSubject(
            Object.keys(AllCharacters).map(x => AllCharacters[x])
        );
    }
}
