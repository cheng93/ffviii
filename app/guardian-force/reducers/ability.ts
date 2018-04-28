import { AllGuardianForces } from '../../models/guardian-forces';

export interface State {
    [key: string]: string[];
}

export const initialState: State = Object.values(AllGuardianForces).reduce(
    (acc, value) => ({
        ...acc,
        [value.name]: value.abilities.map(x => x.name)
    }),
    {}
);

export function reducer(state: State = initialState, action: any): State {
    return initialState;
}
