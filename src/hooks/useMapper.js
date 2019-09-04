import objectPath from "object-path";

const mapperBuild = mapper => {
  const m = {};
  if (mapper && Array.isArray(mapper)) {
    mapper.map((item, index) => {
      const tranformer = item.split("=>");
      if (
        tranformer[0] &&
        tranformer[0].trim() &&
        tranformer[1] &&
        tranformer[1].trim()
      )
        m[tranformer[0].trim()] = tranformer[1].trim();
      return item;
    });
  }
  return m;
};

const useMapper = (data, mapper, removes = []) => {
  const m = mapperBuild(mapper);
  return data && Array.isArray(data)
    ? data.map(suggestion => {
        const value = { ...suggestion };
        Object.keys(m).map(item => {
          if (value.hasOwnProperty(item)) {
            value[m[item]] = value[item];
            delete value[item];
          } else if (item.includes("${") && item.includes("}")) {
            const idxs = item.match(/\${[A-Za-z_][A-Za-z_0-9.]*}/g);
            value[m[item]] = item;
            if (idxs && Array.isArray(idxs)) {
              idxs.map(id => {
                if (id.includes(".")) {
                  value[m[item]] = objectPath.get(
                    value,
                    id.substring(2, id.length - 1)
                  );
                } else
                  value[m[item]] = value[m[item]].replace(
                    id,
                    value[id.substring(2, id.length - 1)]
                  );
                return id;
              });
            }
            delete value[item];
          }
          return suggestion;
        });
        removes.map(r => {
          delete value[r];
          return r;
        });
        return value;
      })
    : [];
};

export default useMapper;
