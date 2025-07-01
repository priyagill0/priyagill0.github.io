export class Tag {
    static readonly Angular = new Tag('Angular', '#950606');
    static readonly Python = new Tag('Python', '#551a8b');
    static readonly Typescript = new Tag('Typescript', '#3776ab');
    static readonly Java = new Tag('Java', '#ED8B00');
    static readonly SQL = new Tag('SQL', '#008080');
    static readonly MongoDB = new Tag('MongoDB', '#06402B');
    static readonly PostgreSQL = new Tag('PostgreSQL', '#90D5FF');
    static readonly MYSQL = new Tag('MySQL', '#3776ab');
    static readonly PANDAS = new Tag('Pandas', '#150458');
    static readonly NUMPY = new Tag('NumPy', '#150458');
    static readonly SEABORN = new Tag('Seaborn', '#150458');
    static readonly MATPLOTLIB = new Tag('Matplotlib', '#150458');
    static readonly REACT = new Tag('React', '#150458');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#150458');
    static readonly OPENAI = new Tag('OpenAI', '#150458');
    static readonly LANGCHAIN = new Tag('Langchain', '#150458');
    static readonly FastAPI = new Tag('FastAPI', '#150458');

    private constructor (private readonly key: string, public readonly colour: string) {

    }
    toString(): string {
        return this.key;
    }
}