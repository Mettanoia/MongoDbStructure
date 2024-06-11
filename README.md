## Model
```
┌──────────────────────────────────┐
│           Customer               │
├──────────────────────────────────┤
│ _id: ObjectId                    │
│ nom: String                      │
│ address: String                  │
│ email: String                    │
│ registrationDate: Date           │
│ recomendedBy:                    │
│   ┌────────────────────────────┐ │
│   │        Customer            │ │
│   ├────────────────────────────┤ │
│   │ nom: String                │ │
│   │ address: String            │ │
│   │ email: String              │ │
│   │ registrationDate: Date     │ │
│   └────────────────────────────┘ │
└──────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│                     Providers                      │
├────────────────────────────────────────────────────┤
│ _id: ObjectId                                      │
│ nom: String                                        │
│ address:                                           │
│   ┌──────────────────────────────────────────────┐ │
│   │                Address                       │ │
│   ├──────────────────────────────────────────────┤ │
│   │ carrer: String                               │ │
│   │ numero: String                               │ │
│   │ pis: String                                  │ │
│   │ porta: String                                │ │
│   │ ciutat: String                               │ │
│   │ postalCode: String                           │ │
│   │ pais: String                                 │ │
│   └──────────────────────────────────────────────┘ │
│ phoneNumber: String                                │
│ fax: String                                        │
│ NIF: String                                        │
└────────────────────────────────────────────────────┘

┌─────────────────────────────┐
│         Sales               │
├─────────────────────────────┤
│ _id: ObjectId               │
│ employee_id: Integer        │
│ customer_id: Integer        │
│ ullera_id: Integer          │
└─────────────────────────────┘

┌───────────────────────────────────────────────────┐
│                       Glasses                     │
├───────────────────────────────────────────────────┤
│ _id: ObjectId                                     │
│ brand: String                                     │
│ rightGraduation: Integer                          │
│ leftGraduation: Integer                           │
│ frame:                                            │
│   ┌─────────────────────────────────────────────┐ │
│   │                Frame                        │ │
│   ├─────────────────────────────────────────────┤ │
│   │ type: String                                │ │
│   │ color: String                               │ │
│   └─────────────────────────────────────────────┘ │
│ rightColor: String                                │
│ leftColor: String                                 │
│ price: Integer                                    │
│ provider_id: Integer                              │
└───────────────────────────────────────────────────┘
```
## Relationships
```
sales --> customer_id
sales --> glasses_id
sales --> employee_id
```
