import generateQueryUrl from "@/lib/generateQueryUrl";

export type FetchOptions = RequestInit & {
  query?: Record<string, string>;
};

const serverFetchHelper = async <T>(
  endpoint: string,
  options: FetchOptions,
): Promise<T> => {
  const { headers, query, ...rest } = options;
  const url = generateQueryUrl(endpoint, query);

  const res = await fetch(url, {
    headers: {
      ...headers,
    },
    ...rest,
  });

  return res.json() as Promise<T>;
};

export default serverFetchHelper;
