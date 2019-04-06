const app = require('@app');
const config = require('@config');

module.exports = (err) => {
  if (err) {
    console.log('Erro ao conectar com o banco de dados');
  } else {
    app.listen(config.app.port, (err) => {
      if (err) {
        return console.log('erro');
      }

      console.log(`iniciou em http://localhost:${config.app.port}`);
    });
  }
};
