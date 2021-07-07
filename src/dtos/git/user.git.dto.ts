export default class UserGitDto {
    login!: string;
    id!: number;
    node_id!: string;
    avatar_url!: string;
    gravatar_id!: string;
    url!: string;
    html_url!: string;
    followers_url!: string;
    following_url!: string;
    gists_url!: string;
    starred_url!: string;
    subscriptions_url!: string;
    organizations_url!: string;
    repos_url!: string;
    events_url!: string;
    received_events_url!: string;
    type!: string;
    site_admin!: boolean;

    static dummy():UserGitDto{
        return {
            "login": "mojombo",
            "id": 1,
            "node_id": "MDQ6VXNlcjE=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mojombo",
            "html_url": "https://github.com/mojombo",
            "followers_url": "https://api.github.com/users/mojombo/followers",
            "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
            "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
            "organizations_url": "https://api.github.com/users/mojombo/orgs",
            "repos_url": "https://api.github.com/users/mojombo/repos",
            "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mojombo/received_events",
            "type": "User",
            "site_admin": false
        };
    }
}