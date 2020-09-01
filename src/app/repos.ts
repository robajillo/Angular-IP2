export class Repos {
  constructor(
    public login: string,
    public public_repos: number,
    public name: string,

    public description: string,

    public forks: number,

    public language: string,

    public created_at: Date
  ) {}
}
