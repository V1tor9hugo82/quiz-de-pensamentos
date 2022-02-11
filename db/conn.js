const { Sequelize } = require('sequelize')

const Sequelize = new Sequelize('toughts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  Sequelize.authenticate()
  console.log('Conectamos com sucesso!')
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`)
}

module.exports = Sequelize