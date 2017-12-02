import axios from 'axios';
import { FETCH_USER, SESSION_KEYS } from './types';

/***
 * User data
 * @returns {function(*)}
 */
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({
		type: FETCH_USER,
		payload: res.data
	});

};

/***
 * Session
 * @returns {function(*)}
 */
export const fetchSession = () => async dispatch => {
  const res = await axios.post('/api/fetch_session');

  dispatch({
    type: SESSION_KEYS,
    payload: res.data
  });
}

export const testFlashes = () => dispatch => {

  dispatch({
    type: SESSION_KEYS,
    payload: {
      flashMessage: [
        {
          key: 'uniq-1',
          type: 'success',
          body: 'Success message flash'
        },
        {
          key: 'uniq-2',
          type: 'danger',
          body: 'Danger message flash'
        },
        {
          key: 'uniq-3',
          type: 'info',
          body: 'Info message Flash'
        },
        {
          key: 'uniq-4',
          type: 'warning',
          body: 'Warning message flash'
        }
      ]
    }
  });

}