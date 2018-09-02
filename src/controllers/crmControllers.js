import mongoose from 'mongoose';
import { ContactSchema } from '../modals/crmModals';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err,  contact) => {
    if(err) {
      res.send(err);

    }
    res.json(contact);
  })
}

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if(err) {
      res.send(err)
    }
    res.json(contact)
  })
}

// GET Data by Id
export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if(err) {
      res.send(err)
    }
    res.json(contact)
  })
}

// Update the data
export const updateDataById = (req, res) => {
  Contact.findOneAndUpdate({_id : req.params.contactId}, req.body, {new :true } , (err, contact) => {
    if(err) {
      res.send(err)
    }
    res.json(contact)
  })
}

//Delete the data
export const deleteContactById = (req, res) => {
  Contact.remove({_id:req.params.contactId}, (err,contat) => {
    if(err) {
      res.send(err)
    }
    res.json({ 'message':'Contact Deleted Successfully'})
  })
}
