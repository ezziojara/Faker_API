const express = require('express');
var faker = require('faker');
const app = express();
const port = 8080;

class Usuario {
    constructor(){
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroTelefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor(){
        this.nombre = faker.name.firstName();
        this.calle = faker.address.streetAddress();
        this.ciudad = faker.address.cityName();
        this.estado = faker.address.state();
        this.codigoPostal = faker.address.zipCode();
        this.pais = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json( new Usuario() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Empresa() );
});

app.get("/api/user/company", (req, res) => {

    const company = JSON.stringify(new Empresa());
    const user = JSON.stringify(new Usuario());

    res.json( company + user );
});

app.listen(port);