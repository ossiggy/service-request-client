export type RequestOptions = {
  method: string;
  headers: {
    'Content-type': string;
    Authorization?: string;
  };
  body?: string;
};

export type UseApi = (endpoint: string, method: string, payload?: any) => { data: any; loading: boolean; error: any };
