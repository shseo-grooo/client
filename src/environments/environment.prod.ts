type env = {
  production: boolean
  backendBaseUrl: string
}
declare global {
  interface Window {
    env: env;
  }
}

export const environment = {
  production: true,
  backendBaseUrl: window.env.backendBaseUrl || 'localhost'
};
