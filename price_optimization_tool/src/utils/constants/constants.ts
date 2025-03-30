const REACT_APP_URL = '#{{ApplicationUrl}}#';
const REACT_APP_API_URL = '#{{WebApiUrl}}#';
const REACT_APP_Cryptography_Key = '#{{CryptographyFEKey}}#';
const REACT_APP_Cryptography_IV = '#{{CryptographyFEIV}}#';
const BUILD_VERSION = '#{{Build.BuildNumber}}#';

export const devMode = process.env.NODE_ENV === 'development';

export const appVersion = `${process.env.REACT_APP_VERSION}${BUILD_VERSION.indexOf('Build.BuildNumber') > 0 ? '' : `-${BUILD_VERSION}`}`;

export const webAppUrl = devMode ? process.env.REACT_APP_URL : REACT_APP_URL;
export const apiServerBaseUrl = devMode ? process.env.REACT_APP_API_URL : REACT_APP_API_URL;
export const apiBaseUrl = `${apiServerBaseUrl}api`;

export const cryptographyKey = devMode ? process.env.REACT_APP_CRYPTOGRAPHY_KEY as string : REACT_APP_Cryptography_Key;
export const cryptographyIV = devMode ? process.env.REACT_APP_CRYPTOGRAPHY_IV as string : REACT_APP_Cryptography_IV;

export const urlPrefix = '/';

export const ApiBaseURL='http://127.0.0.1:5000/api'