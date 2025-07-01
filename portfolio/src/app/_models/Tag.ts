export class Tag {
    static readonly Angular = new Tag('Angular', '#ff746c');
    static readonly Python = new Tag('Python', '#75b5f5');
    static readonly Typescript = new Tag('Typescript', '#3271a5');
    static readonly Java = new Tag('Java', '#ffc067');
    static readonly SQL = new Tag('SQL', '#99c5c4');
    static readonly MongoDB = new Tag('MongoDB', '#b2d4b2');
    static readonly PostgreSQL = new Tag('PostgreSQL', '#90D5FF');
    static readonly MYSQL = new Tag('MySQL', '#c9a0dc');
    static readonly PANDAS = new Tag('Pandas', '#ffc5b3');
    static readonly NUMPY = new Tag('NumPy', '#f988d9');
    static readonly SEABORN = new Tag('Seaborn', '#d3b392');
    static readonly MATPLOTLIB = new Tag('Matplotlib', '#3eb489');
    static readonly REACT = new Tag('React', '#90d5ff');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#85cf3b');
    static readonly OPENAI = new Tag('OpenAI', '#ccccff');
    static readonly LANGCHAIN = new Tag('Langchain', '#f5c5ff');
    static readonly FastAPI = new Tag('FastAPI', '#74d1c4');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#f7df1e');
    private constructor (private readonly key: string, public readonly colour: string) {

    }
    toString(): string {
        return this.key;
    }
}