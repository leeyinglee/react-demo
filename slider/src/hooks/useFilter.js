import { useMemo } from 'react';

const useFilter = (list, key, value) => {
  const result = useMemo(() => {
    return list.filter((item) => item[key] === value);
  }, [list, key, value]);

  return result;
};

export default useFilter;
