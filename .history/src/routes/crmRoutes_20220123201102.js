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
        }, getContacts)

    // POST endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
        // get specific contact
        .get(getContactWithID)

    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
}

export default routes;