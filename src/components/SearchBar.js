import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>VideoSearch</label>
                    <input 
                        value={term} 
                        type='text'
                        onChange={(event) => setTerm(event.target.value)}    
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;