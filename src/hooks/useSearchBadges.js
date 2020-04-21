import { useState, useMemo } from 'react';

function useSearchBadges(data, filterBadge) {
  const [filteredResult, setFilteredResult] = useState(data);

  useMemo(() => {
    const result = data.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(filterBadge.toLowerCase());
    })

    setFilteredResult(result);
  }, [data, filterBadge]);

  return filteredResult;
}

export default useSearchBadges;
