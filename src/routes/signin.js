import {serialize} from 'cookie';
import Session from '../services/session';
import User from '../services/user';

/** @type {import('../../.svelte-kit/types/src/routes/login').RequestHandler} */
export async function post({request}) {
    const formData = Object.fromEntries((await request.formData()).entries());
    console.log("formData:", formData);
    if(User.verify(formData.username, formData.password)) {
      const id = Session.create(User.get(formData.username));
      console.log(id, User.get(formData.username));
      return {
          status: 303,//See other
          headers: {
            'Set-Cookie': serialize('session-id', id, {
              path: '/',
              httpOnly: true,
              sameSite: 'strict',
              maxAge: 60 * 60,
            }),
            location: `/`
          }
      };
    } else {
      return {
        status: 401,
        body: 'Incorrect username or password'
    };
    }
}