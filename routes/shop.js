const router = require("./user");

router.get('/list', auth, async (req, res) => {
    try {
      // TODO
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

  router.post('/add', auth, async (req, res) => {
    try {
      // TODO
    } catch (e) {
      res.send({ message: 'Error in posting item' });}
  });

  router.delete('/delete', auth, async (req, res) => {
    try{
        // TODO
    } catch (e) {
      res.send({ message: 'Error in posting item' });}
  })