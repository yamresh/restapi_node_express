import {addNewContact, getContacts, getContactById, updateDataById, deleteContactById} from '../controllers/crmControllers';
const routes = app => {
  app.route('/contact')
    .get((req, res, next) => {
      // middle ware
      console.log(`Request URL is  ${req.originalUrl}`)
      console.log(`Request method is  ${req.method}`)
      next()
    }, getContacts)
    // POST END Point
    .post(addNewContact);
    app.route('/contact/:contactId')
    .get((req, res, next) => {
      console.log(`Request URL is  ${req.originalUrl}`)
      console.log(`Request method is  ${req.params.contactId}`)
      next()
    },getContactById)
    .put(updateDataById)
    .delete((req, res, next) => {
      console.log(`Request URL is  ${req.originalUrl}`)
      console.log(`Request method is  ${req.params.contactId}`)
      next()
    },deleteContactById)
}

export default routes;
