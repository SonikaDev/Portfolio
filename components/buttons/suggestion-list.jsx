import React from "react";

const SuggestionList = ({
  suggestions,
  datakey,
  onSuggestionClick,
  highlight,
}) => {
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  return (
    <>
      {suggestions.map((suggestion, index) => {
        const currSuggetion = datakey ? suggestion[datakey] : suggestion;
        return (
          <li
            className="pl-2 cursor-pointer  hover:bg-slate-600"
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
          >
            {getHighlightedText(currSuggetion, highlight)}
          </li>
        );
      })}
    </>
  );
};
export default SuggestionList;
