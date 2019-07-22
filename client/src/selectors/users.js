import get from 'lodash/get';

export const selfUserName = state => get(state, 'users.self.userName');

export default {};
