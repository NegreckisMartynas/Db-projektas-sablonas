import { v4 as generateUuid } from 'uuid';

const Session = {
    active: {},
    get(id) {
        return Session.active[id]
    },
    create(user) {
        const uuid = generateUuid();
        Session.active[uuid] = user;
        return uuid;
    },
    remove(id) {
        Session.active[id] = null;
    }
}

export default Session;