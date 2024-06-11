opticadb.customers.insertOne({
  "_id": {
    "$oid": "6666cae987726ac3e9c94ebc"
  },
  "nom": "Miguel",
  "address": "Druglands",
  "email": "miguelsunnata@gmail.com",
  "registrationDate": {
    "$date": "2020-05-18T00:00:00.000Z"
  },
  "recomendedBy": {
    "nom": "Alguien",
    "address": "Ninguna parte",
    "email": "buahchamaco@gmail.com",
    "registrationDate": {
      "$date": "1970-01-01T00:00:00.000Z"
    }
  }
});

opticadb.providers.insertOne({
  "_id": {
    "$oid": "6666cc4087726ac3e9c94ec1"
  },
  "nom": "",
  "address": {
    "carrer": "",
    "numero": "",
    "pis": "",
    "porta": "",
    "ciutat": "",
    "postalCode": "",
    "pais": ""
  },
  "phoneNumber": "",
  "fax": "",
  "NIF": ""
});

opticadb.sales.insertOne({
  "_id": {
    "$oid": "6666d38087726ac3e9c94edc"
  },
  "employee_id": 0,
  "customer_id": 0,
  "ullera_id": 0
});

opticadb.ulleres.insertOne({
  "_id": {
    "$oid": "6666cd6187726ac3e9c94ecb"
  },
  "brand": "",
  "rightGraduation": 0,
  "leftGraduation": 0,
  "frame": {
    "type": "flotant",
    "color": ""
  },
  "rightColor": "",
  "leftColor": "",
  "price": 0,
  "provider_id": 0
});


