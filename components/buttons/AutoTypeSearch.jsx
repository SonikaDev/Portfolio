import React, { Fragment, useCallback,useEffect, useState } from "react";
import SuggestionList from "./suggestion-list";
import debounce from "lodash/debounce";

// import style from "style.css";
const AutoTypeSearch = ({
  placeholder,
  fetchSuggestion,
  dataKey,
  customLoading,
  onSelect,
  onChange,
  onBlur,
  onFocus,
  customStyle,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const handleInputChanges = (e) => {
    setInputValue(e.target.value);
  };

  const getSuggestion = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result;
      if (fetchSuggestion) {
        result = fetchSuggestion?.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

      }
      setSuggestions(result);
    } catch {
      setError("fail to fetch suggestion");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestionsDebounced = useCallback(
    debounce(getSuggestion, 400),
    []
  );

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestionsDebounced(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSuggetionClick = (suggestion) => {
    console.log("sonika", suggestion);
    setInputValue(dataKey ? suggestion[dataKey] : dataKey);
    onSelect(suggestion);
    setSuggestions([]);
  };
  return (
    <Fragment>
      <div className="sticky top-0 flex items-center px-10 dark:bg-black bg-white grid-flow-*">
        <div className="flex items-center gap-3">
          <input
            className="w-96 dark:bg-black border dark:border-[#ffc300] border-[#c72c6c] p-2 rounded"
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={handleInputChanges}
          />
        </div>
        {(suggestions?.length > 0 || error || loading) && (
          <ul
            className="absolute 
          left-0 border-solid b
          order-2 border-indigo-600 
          rounded-sm shadow-lg 
          shadow-indigo-500/50 bg-slate-400 z-40 max-h-40 overflow-auto m-0 p-0 inset-x-0 top-11"
          >
            {error && <div>error</div>}
            {loading && <div>loading...</div>}
            <SuggestionList
              suggestions={suggestions}
              datakey={dataKey}
              highlight={inputValue}
              onSuggestionClick={handleSuggetionClick}
            />
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default AutoTypeSearch;
