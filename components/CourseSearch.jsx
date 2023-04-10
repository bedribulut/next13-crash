'use client';
import { useState } from "react";

function CourseSearch( { getSearchResults }) {

    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch(`/api/courses/search?query=${query}`);
        const courses = await res.json();
        getSearchResults(courses);
    }

  return (
    <div>
        <form
            action=""
            onSubmit={handleSubmit}
            className="search-form"
        >
            <input
                type="text"
                className="search-input"
                placeholder="Search Courses"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="search-button"
                type="submit"
            >
                Search
            </button>
        </form>
    </div>
  )
}

export default CourseSearch