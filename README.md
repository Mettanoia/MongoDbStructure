## Collections

### Glasses

- **_id**: Unique identifier for the glasses document.
- **brand**: Brand of the glasses.
- **rightGraduation**: Graduation value for the right eye.
- **leftGraduation**: Graduation value for the left eye.
- **frame**: Object containing frame details such as type and color.
- **rightColor**: Color of the right lens.
- **leftColor**: Color of the left lens.
- **price**: Price of the glasses.
- **provider_id**: Reference to the provider who supplies the glasses.
  

### SalesTransaction

- **_id**: Unique identifier for the sales transaction document.
- **employee_id**: Reference to the employee who conducted the sale.
- **customer_id**: Reference to the customer who made the purchase.
- **ullera_id**: Reference to the glasses sold in the transaction.

### Company

- **_id**: Unique identifier for the company document.
- **nom**: Name of the company.
- **address**: Object containing address details such as street, city, postal code, etc.
- **phoneNumber**: Phone number of the company.
- **fax**: Fax number of the company.
- **NIF**: Tax identification number of the company.

### Provider

- **_id**: Unique identifier for the provider document.
- **name**: Name of the provider.
- **address**: Address of the provider.
- **phoneNumber**: Phone number of the provider.
- **email**: Email address of the provider.

### Customer

- **_id**: Unique identifier for the customer document.
- **name**: Name of the customer.
- **address**: Address of the customer.
- **phoneNumber**: Phone number of the customer.
- **email**: Email address of the customer.

## Relationships

- Glasses collection has a relationship with the Frame collection through the frame field.
- Company collection has a relationship with the Address collection through the address field.
- SalesTransaction collection has relationships with the Employee, Glasses, and Customer collections through employee_id, ullera_id, and customer_id fields respectively.

## Mermaid Diagram

```mermaid
classDiagram
    class Glasses {
        _id
        brand
        rightGraduation
        leftGraduation
        frame
        rightColor
        leftColor
        price
        provider_id
    }

    class SalesTransaction {
        _id
        employee_id
        customer_id
        ullera_id
    }

    class Company {
        _id
        nom
        address
        phoneNumber
        fax
        NIF
    }

    class Provider {
        _id
        name
        address
        phoneNumber
        email
    }

    class Customer {
        _id
        name
        address
        phoneNumber
        email
    }

    SalesTransaction --> Employee: employee_id
    SalesTransaction --> Glasses: ullera_id
    SalesTransaction --> Customer: customer_id
