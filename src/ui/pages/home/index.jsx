import { Component } from "react";
import { LoadingUI } from "../../components/loading";
import { SearchGitUsernameForm } from "../../components/search-git-username";
import "./style.css";
import {GithubUserRepo} from "../../../domain/github-user/repository/github-user-repo";


/**
 * @typedef {Object} HomeState
 * @property {boolean} loading
 * @property {GitHubUser?} githubUser
 */

export class Home extends Component{
    githubUserRepo = new GithubUserRepo();
    /**
     * @type  {HomeState}
     */
    state = {
        loading: false,
        githubUser: null
    }
    // componentDidMount(){
    //     // setTimeout(_=>{
    //     //     this.setState({loading: false})
    //     // }, 3000);
    // }

    render(){
        return <div className="home-page">
            {
                this.state.loading ? <LoadingUI/> : 
                <SearchGitUsernameForm 
                onSearchFromSubmit = { evt => this.onSearchFromSubmit(evt) }
                />
                
            }
            {
                !this.state.githubUser ? null :
                <div>
                    <div>{this.state.githubUser.name}</div>
                    <img src={this.state.githubUser.avatar_url} alt="" />
            </div>
            }
        </div>
    }
    /**
     * 
     * @param {string} searchText 
     */
    async onSearchFromSubmit(searchText){
       this.setState({loading: true});

       const user = await this.githubUserRepo.getUserByUser(searchText);
       this.setState({githubUser: user, loading: false});
        console.log(user);
    }
}