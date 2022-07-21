export class GithubUserRepo{
    static GITHUB_USER_API  = "https://api.github.com/users";
    /**
     * 
     * @param {string} username
     * @returns {Promise<GitHubUser>}
     */
    async getUserByUser(username){
        const apiEndpoint = `${GithubUserRepo.GITHUB_USER_API}/${username}`;
        const response =  await fetch(apiEndpoint);
        const responseData = await response.json();
        return {
            id: responseData.id,
            name: responseData.name,
            public_repos: responseData.public_repos,
            url: responseData.url,
            avatar_url: responseData.avatar_url
        }
    }
}