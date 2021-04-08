import { useMemo } from 'react';

const useGroups = (list, count) => {
  const groups = useMemo(() => {
    return list.reduce((a, b, index) => {
      const obj = { ...a };
      const n = Math.trunc(index / count);
      if (!obj[n]) {
        obj[n] = {};
        obj[n].list = [];
      }
      obj[n].list.push(b);
      obj.length = n + 1;
      return obj;
    }, {});
  }, [list, count]);

  return groups || {};
};

export default useGroups;
