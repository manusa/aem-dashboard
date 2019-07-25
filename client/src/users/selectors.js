import get from 'lodash/get';
import size from 'lodash/size';

export const selfUserName = state => get(state, 'users.self.userName');

export const selfAllowedApps = state => get(state, 'users.self.allowedApps', []);

export const usersCount = state => size(get(state, 'users')) - 1;

export default {};
