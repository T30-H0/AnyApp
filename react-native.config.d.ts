declare module 'react-native-config' {
  interface Config {
    APP_ENV_NAME: string;
    APP_NAME: string;
    WEB_CLIENT_ID: string;
  }

  const Config: Config;
  export default Config;
}
