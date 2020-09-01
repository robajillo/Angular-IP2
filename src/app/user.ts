export class User {
  constructor(
    public avatar_url: string,
    public login: string,
    public public_repos: number,
    public followers: number,
    public following: number,

    public created_at: Date
  ) {}
}
