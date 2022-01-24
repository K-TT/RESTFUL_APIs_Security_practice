import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmController';
import { login, register, loginRequired } from '../controllers/userController';

const routes = (app) => {
    app.route('/contacts')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, loginRequired, getContacts)

    // POST endpoint
    .post(loginRequired, addNewContact);

    app.route('/contact/:contactId')
        // get specific contact
        .get(loginRequired, getContactWithID)

    // put request
    .put(loginRequired, updateContact)

    // delete request
    .delete(loginRequired, deleteContact);
}

export default routes;