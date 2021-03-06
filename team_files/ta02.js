//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['beep','bop','boop'];

router.post('/addUser', (req, res, next) => {
  users.push(req.body.username);
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  console.log(req.body.username);
  let username = req.body.username;

  const index = users.indexOf(username);
  if (index !== -1) {
    users.splice(index, 1);
  }

  res.redirect('/ta02');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: users,
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});


router.get('/', (req, res, next) => {
  res.render('pages', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: users,
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});


module.exports = router;
