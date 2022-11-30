const contact = require('./contacts');

const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contact.listContacts();
      console.log(allContacts);
      break;

    case 'get':
      const findedContact = await contact.getContactById(id);
      console.log(findedContact);
      break;

    case 'add':
      const addedContact = await contact.addContact(name, email, phone);
      console.log(addedContact);
      break;

    case 'remove':
      const removedContact = await contact.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
