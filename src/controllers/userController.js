const User = require('../models/User');

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message }));
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  
  User.findOne({ email, password })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(400).json({ error: 'Invalid credentials' });
      }
    })
    .catch(err => res.status(400).json({ error: err.message }));
};
