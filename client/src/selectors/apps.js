import get from 'lodash/get';

export const appName = app => get(app, 'appName');
export const appPath = app => get(app, 'path');

export default {};
