import { Component } from "react";
class SearchBox extends Component{
    render(){
        return(
            <div>
                <input 
                    className='search-box' 
                    placeholder={this.props.placeHolderText}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        );
    }
}

export default SearchBox;