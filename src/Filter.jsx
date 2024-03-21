import React from 'react';

export default function Filter({ label, options, onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">{label}: </label>
      <select id="filter" onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
