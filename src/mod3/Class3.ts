export default class Class3 {
    // Bug: api-extractor@5.10.3 will create an "api-link" field for "constructor".
    //      But with namespace the link cannot be correctly created, as api reference check will fail.
    constructor() {}
}
