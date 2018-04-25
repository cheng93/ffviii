import { Component, OnInit } from '@angular/core';
import { GuardianForce } from '../../models/guardian-forces';
import { GuardianForceService } from '../../services/guardian-force.service';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

@Component({
    selector: 'guardian-force',
    template: require('./guardian-force.template.html')
})
export class GuardianForceComponent implements OnInit {
    constructor(
        private guardianForceService: GuardianForceService,
        private characterService: CharacterService
    ) {}
    ngOnInit(): void {
        this.guardianForceService
            .getAll()
            .subscribe(x => (this.guardianForces = x));

        this.characterService.getAll().subscribe(x => (this.characters = x));
    }

    characters: Character[] = [];

    guardianForces: GuardianForce[] = [];
}
