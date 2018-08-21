import { EXPORT_CLASS_2, EXPORT_INTERFACE_2 } from './mod2';

export function EXPORT_FUNC() {}


// Missing feature: api-extractor@5.10.3 does not support "type" declaration
export type EXPORT_TYPE = number;

export interface EXPORT_INTERFACE {
    member: number;
    member_2?: EXPORT_INTERFACE_2;
}

// Missing feature: api-extractor@5.10.3 does not support "const" declaration
export const EXPORT_CONST: EXPORT_INTERFACE = { member: 0 };

export const EXPORT_CONST_2 = { memberOfConst: '' };

export class EXPORT_CLASS {
    member: number;

    // Missing feature: api-extractor@5.10.3 / api-documenter@1.5.9 doesn not support link for class/interface member
    member_2: EXPORT_INTERFACE;

    member_with_typeof: typeof EXPORT_CLASS_2;

    member_with_typeof_2: typeof EXPORT_CONST;

    member_with_typeof_3: typeof EXPORT_CONST_2;
}
