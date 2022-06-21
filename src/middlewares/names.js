const checkNamesParameters = (req, res, next) => {
  console.log('/names/:id router path middleware');
  const id = req.params.id;
  if(!id || !Number(id)) {
    res.status(400).send({message: 'Missing or malformatted id'});
  } else {
    next();
  }
};

module.exports = {checkNamesParameters};