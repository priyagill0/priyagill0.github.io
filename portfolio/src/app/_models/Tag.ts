export class Tag {
    static readonly Angular = new Tag('Angular', '#950606');
    static readonly Python = new Tag('Python', '#551a8b');
    static readonly Typescript = new Tag('Typescript', '#3776ab');
    static readonly Java = new Tag('Java', '#ED8B00');
    static readonly SQL = new Tag('SQL', '#90D5FF');
    static readonly MongoDB = new Tag('MongoDB', '#06402B');
    static readonly PostgreSQL = new Tag('PostgreSQL', '#90D5FF');

    private constructor (private readonly key: string, public readonly colour: string) {

    }
    toString(): string {
        return this.key;
    }
}