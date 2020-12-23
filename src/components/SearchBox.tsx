import * as React from "react";
import { debounce } from "throttle-debounce";

import { config } from "../config";
import styles from "./SearchBox.module.scss";

export interface ISearchBoxProps {
    initialText: string;
    onSearch: (currentSearchTerm: string) => void;
    onAdvancedSearch: (currentSearchTerm: string) => void;
    onSearchInputClick: () => void;
    onSearchTermChange: (searchTerm: string) => void;
}

// note: this function must be defined outside of the component
const debounceNotifySearchChanged = debounce(
    config.searchDebounceDelay,
    false,
    (notifyFunc, searchTerm) => {
        notifyFunc(searchTerm);
    }
);

const SearchBox: React.FC<ISearchBoxProps> = (props: ISearchBoxProps) => {
    const {
        initialText,
        onSearch,
        onAdvancedSearch,
        onSearchTermChange,
        onSearchInputClick
    } = props;
    const [searchTerm, setSearchTerm] = React.useState<string>(initialText);
    const inputRef = React.useRef<HTMLInputElement>();

    const handleSearchBoxFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
        if (searchTerm === initialText) {
            inputRef.current.setSelectionRange(0, 0);
        }
    };

    const handleSearchBoxClick = (
        evt: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        if (searchTerm === initialText) {
            inputRef.current.setSelectionRange(0, 0);
        }

        onSearchInputClick();
    };

    const handleSearchTermChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (evt.target.value.length === 0) {
            setSearchTerm(initialText);

            // when fully clearing the input then set the search term back to the initial value
            evt.target.value = initialText;
            inputRef.current.setSelectionRange(0, 0);
        } else {
            setSearchTerm(evt.target.value);
        }

        debounceNotifySearchChanged(onSearchTermChange, evt.target.value);
    };

    const handleKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === "Enter") {
            onSearch(searchTerm);
        } else if (searchTerm === initialText) {
            // clear the input and let the onChange event handle the new value
            setSearchTerm("");
        }
    };

    const handleSearchButtonClick = (
        evt: React.MouseEvent<HTMLButtonElement>
    ) => {
        onSearch(searchTerm);
    };

    const handleAdvancedSearchClick = (
        evt: React.MouseEvent<HTMLButtonElement>
    ) => {
        onAdvancedSearch(searchTerm);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                ref={inputRef}
                type="text"
                className={styles.searchBox}
                onChange={handleSearchTermChange}
                onFocus={handleSearchBoxFocus}
                onClick={handleSearchBoxClick}
                onKeyPress={handleKeyPress}
                value={searchTerm}
            ></input>
            <button
                type="button"
                className={styles.searchButton}
                onClick={handleSearchButtonClick}
            >
                <svg
                    className={styles.searchIcon}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                >
                    <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" />
                </svg>
            </button>
            <button
                type="button"
                className={styles.advancedSearchButton}
                onClick={handleAdvancedSearchClick}
            >
                Advanced Search
            </button>
        </div>
    );
};

export default SearchBox;
