import { Component } from "react";

const SearchBox = (props) => {
    return (
        <div>
            <input
                className='search-box'
                placeholder={props.placeHolderText}
                onChange={props.onChangeHandler}
            />
        </div>
    );
}

// class SearchBox extends Component{
//     render(){
//         return(
//             <div>
//                 <input 
//                     className='search-box' 
//                     placeholder={this.props.placeHolderText}
//                     onChange={this.props.onChangeHandler}
//                 />
//             </div>
//         );
//     }
// }

export default SearchBox;