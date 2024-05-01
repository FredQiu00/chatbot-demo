import React from "react";
import { ReactComponent as SearchIcon } from "../svgs/search.svg"

const SearchBar = () => {
    return (
        <form>
          <label htmlFor="chat-input" className="sr-only">Search chats</label>
          <div className="relative">
            <input
              id="search-chats"
              type="text"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              placeholder="Search chats"
              rows="1"
              required
            />
            <button
              type="submit"
              className="absolute bottom-2 right-2.5 rounded-lg p-2 text-sm text-slate-500 hover:text-blue-700 focus:outline-none sm:text-base"
            >
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search chats</span>
            </button>
          </div>
        </form>
    );
}

export default SearchBar;