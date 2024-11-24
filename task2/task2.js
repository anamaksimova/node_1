'use strict';

const profile = ({name, dateBirth, purpose}) => {
  const user = new Object();

  user.id = generateId(10);
  user.firstName = name.split(' ')[0].slice(0, 1).toUpperCase() + name.split(' ')[0].slice(1);
  user.lastName = name.split(' ')[1].slice(0, 1).toUpperCase() + name.split(' ')[1].slice(1);
  user.dateBirth = dateBirth;
  user.age = getCurrentAge(dateBirth);
  user.purpose = purpose.slice(0, 1).toUpperCase() + purpose.slice(1);


  console.log(user);
};
const getCurrentAge = (date) => {
  console.log(new Date(date.split('.')[2], (date.split('.')[1] - 1), date.split('.')[0]));
  return ((new Date().getTime() - new Date(date.split('.')[2],
    (date.split('.')[1] - 1), date.split('.')[0])) / (24 * 3600 * 365.25 * 1000)) | 0;
};
const generateId = n => {
  let id = 0;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < n - 1; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};


module.exports = profile;