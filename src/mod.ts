import { Class2, Inferface2 } from './mod2';

export function func1(foo: string) {
    return true;
}


// Missing feature: api-extractor@5.10.3 does not support "type" declaration
export type type1 = number;
export type type2 = Interface1 & type1;
export type type3 = { foo: string; };

export interface Interface1 {
    iMember1: number;
    iMember2?: Inferface2;
}

// Missing feature: api-extractor@5.10.3 does not support "const" declaration
export const var3: Interface1 = { iMember1: 0 };

export const var4 = { memberOfConst: '' };

export class Class1 {
    cMember1: number;

    // Missing feature: api-extractor@5.10.3 / api-documenter@1.5.9 doesn not support link for class/interface member
    cMember2: Interface1;

    cMember_with_typeof_1: typeof Class2;

    cMember_with_typeof_2: typeof var3;

    cMember_with_typeof_3: typeof var4;
}


export namespace Namespace1 {
    // Missing feature: api-extractor@6.1.3 does not support variable declaration in "namespace"
    export const nVar: number = 2;

    export type nType = {};

    export interface nInterface {
        member: number;
    }
}
