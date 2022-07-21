import { Component } from "react";
import {BlackSearchIcon} from "../../resources/icons/search-black";
import "./style.css";
export class SearchGitUsernameForm extends Component{
    state = {
        searchText: ""
    }
    render() {
        return <form className="searchUsernameForm" onSubmit={evt=>this.onSearchFromSubmit(evt)}>
        <input onInput={evt=>this.onTextInput(evt)}  value={this.state.searchText} onChange={_=>{}} className="searchInput" type="text" name="githubUsername" />
        <button className="search-button">
            <BlackSearchIcon />
        </button>
    </form>
    }
    /**
     * 
     * @param {Event} evt 
     */
    onTextInput(evt){
        /**
         * @type {HTMLInputElement}
         */
        const input = evt.target;
        this.setState({
            searchText: input.value
        });

    }
    /**
     * 
     * @param {Event} event 
     */
    onSearchFromSubmit(event){
        event.preventDefault();
        if(!this.state.searchText) return;
        this.props.onSearchFromSubmit(this.state.searchText);
    }
}