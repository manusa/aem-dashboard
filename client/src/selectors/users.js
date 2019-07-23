import get from 'lodash/get';

export const selfUserName = state => get(state, 'users.self.userName');

export const selfAllowedApps = state => get(state, 'users.self.allowedApps', []);

export default {};
