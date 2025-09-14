// use "host.docker.internal" as HOST when suppose node-js container wants to talk to a postgres instance on you host machine.
// if both are dockerized use the postgresql container name in the HOST section.
module.exports = {
  HOST: "host.docker.internal", // you can use "localhost" when you are not testing via docker 
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
