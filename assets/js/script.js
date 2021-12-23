// Constant that gets the id from a generate function.
const idGen = generateId();
// A class of a contact.
class Contact {
  constructor(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  contact() {
    console.log(
      `the contact id: ${this.id}, name: ${this.name}, email: ${this.email}, phone: ${this.phone}`
    );
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
  }
}

// Class that holds a collection of Contacts and properties and functions for the group
class Contacts {
  constructor() {
    this.contacts = [];
  }
  // create a new Contact and save it in the collection
  newContact(id, name, email, phone) {
    let c = new Contact(id, name, email, phone);
    this.contacts.push(c);
    return c;
  }
  get allContacts() {
    return this.contacts;
  }
  getContact(id) {
    return this.contacts.find((e) => e.id == id);
  }
  removeContact(id) {
    var i;
    this.contacts.forEach((element, index) => {
      if (element.id == id) {
        i = index;
      }
    });
    if (i != undefined) this.contacts.splice(i, 1);
  }

  get numberOfContacts() {
    return this.contacts.length;
  }
}

let cntct = new Contacts();

document.addEventListener("DOMContentLoaded", function () {
  fName = document.getElementById("name");
  fEmail = document.getElementById("email");
  fPhoneNumber = document.getElementById("phone");
  myTable = document.getElementById("myTable");

  addContactBtn = document.getElementById("addContact");
  removeContactBtn = document.getElementById("removeContact");
  editContactBtn = document.getElementById("editContact");
  getContactBtn = document.getElementById("getContact");
  getAllContactsBtn = document.getElementById("getAllContacts");

  addContactBtn.onclick = addContact;
  removeContactBtn.onclick = removeContact;
  editContactBtn.onclick = editContact;
  getContactBtn.onclick = getContact;
  getAllContactsBtn.onclick = getAllContacts;
});

function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function isPhoneValid(phone) {
  if (phone.length > 11 && !isNaN(phone)) {
    return true;
  }
  return false;
}

function* generateId() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

function displayRow(cntct, id) {
  myTable.innerHTML = "";
  if (id == undefined) {
    cntct.allContacts.forEach((Contact) => {
      row = myTable.insertRow(0);
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell4 = row.insertCell(3);

      cell1.innerHTML = Contact.contact().id;
      cell2.innerHTML = Contact.contact().name;
      cell3.innerHTML = Contact.contact().email;
      cell4.innerHTML = Contact.contact().phone;
    });
  } else {
    row = myTable.insertRow(0);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);

    cell1.innerHTML = cntct.contact().id;
    cell2.innerHTML = cntct.contact().name;
    cell3.innerHTML = cntct.contact().email;
    cell4.innerHTML = cntct.contact().phone;
  }
}

// list all the Contacts
console.log(cntct.numberOfContacts + " Contacts");
console.log(cntct.allContacts);

// make them do something
cntct.allContacts.forEach((Contact) => Contact.contact());

function addContact() {
  id2 = idGen.next().value;

  cntct.newContact(id2, fName.value, fEmail.value, fPhoneNumber.value);

  cntct.allContacts.forEach((Contact) => Contact.contact());
  getCntct(id2);
}

function removeContact() {
  cntct.removeContact(parseInt(prompt("Write contact id")));
}

function editContact() {
  var i = parseInt(prompt("Write contact id"));
  cntct.removeContact(i);
  cntct.newContact(i, fName.value, fEmail.value, fPhoneNumber.value);
}

function getCntct(id) {
  displayRow(cntct.getContact(id), id);
}

function getContact() {
  getCntct(parseInt(prompt("Write contact id")));
}

function getAllContacts() {
  displayRow(cntct);
  console.log(cntct.numberOfContacts + " Contacts");
  console.log(cntct.allContacts);
}
