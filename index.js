const {Sequelize, DataTypes} = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

handler = async (event, context) => {

    // context.callbackWaitsForEmptyEventLoop = false;

    const Persons = sequelize.define('Persons', {
      PersonID:{type: DataTypes.INTEGER},// int,
      LastName :{type: DataTypes.STRING},//varchar(255),
      FirstName :{type: DataTypes.STRING},//varchar(255),
      Address :{type: DataTypes.STRING},//varchar(255),
      City:{type: DataTypes.STRING},// varchar(255)
    },
    {
      freezeTableName: true
    });

    const start = Date.now();
    console.log("Function starts at ", new Date().toLocaleTimeString('en-US'));
    await sequelize.query('SHOW Tables', {type: sequelize.QueryTypes.SHOWTABLES}).then(result => console.log("Total tables: "+ result.length))
    
    function resolveAfterSeconds() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, config.time);
      });
    }
    await resolveAfterSeconds();
    const result = await Persons.findAndCountAll({attributes: ['FirstName', 'LastName'],});
    
    console.log(`\nFunction ends at ${new Date().toLocaleTimeString()}  Execution time: ${Date.now() - start} ms`);
};

handler()