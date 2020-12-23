import * as React from "react";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";
import { useOutsideClick } from "../hooks/useOutsideClick";

import { usePeopleSearch } from "../hooks/usePeopleSearch";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import styles from "./GuidedSearch.module.scss";

export interface IGuidedSearchProps {
    initialText: string;
    context: ApplicationCustomizerContext;
}

const GuidedSearch: React.FC<IGuidedSearchProps> = (
    props: IGuidedSearchProps
) => {
    const { initialText, context } = props;

    const [showResults, setShowResults] = React.useState<boolean>(false);
    const [searchTerm, setSearchTerm] = React.useState<string>("");

    let disableClickOutsideBehavior = false;

    const handleSearch = (currentSearchTerm: string): void => {
        setShowResults(true);
        disableClickOutsideBehavior = true;
    };

    const handleAdvancedSearch = (currentSearchTerm: string): void => {
        disableClickOutsideBehavior = true;
    };

    const handleSearchInputClick = (): void => {
      disableClickOutsideBehavior = true;
    }

    const handleSearchTermChange = (newSearchTerm: string): void => {
        setSearchTerm(newSearchTerm);
        setShowResults(true);
    };

    const { data: peopleResults } = usePeopleSearch(searchTerm, context);
    const resultsRef = React.useRef<HTMLDivElement>();

    useOutsideClick(resultsRef, () => {
        if (!disableClickOutsideBehavior) {
            setShowResults(false);
        }
        disableClickOutsideBehavior = false;
    });

    return (
        <div className={styles.guidedSearchContainer}>
            <SearchBox
                initialText={initialText}
                onSearchTermChange={handleSearchTermChange}
                onSearch={handleSearch}
                onAdvancedSearch={handleAdvancedSearch}
                onSearchInputClick={handleSearchInputClick}
            />
            {showResults && (
                <div ref={resultsRef}>
                    <SearchResults
                        peopleResults={peopleResults}
                        context={context}
                    />
                </div>
            )}
        </div>
    );
};

export default GuidedSearch;
