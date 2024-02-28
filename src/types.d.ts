type CSSProperties = import('csstype').Properties;
type Enviroment = 'dev' | 'prod' | 'test';

declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.xlsx' {
  const src: string;
  export default src;
}

declare module '*.md';

declare let process: {
  env: {
    VITE_MODE: Enviroment;
    VITE_API_BASE_URL: string;
    VITE_API_KEY: string;
  };
};
