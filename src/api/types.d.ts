/**
 * Hot to extend external modules declared
 * https://github.com/microsoft/TypeScript/issues/10859#issuecomment-246496707
 */

import * as axios from 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    withAuth?: boolean;
  }
}
