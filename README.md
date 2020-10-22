# E2PS Validation

Regex validation to be used with E2PS Master, Admin and Public sites.

# Installation

npm i e2ps-validation

## Usage

import e2val from 'e2ps-validation';

> e2val.alphaNumeric(value); returns value if regex test match is true, returns null if false.

```
const formChange  = (e) => {
	e.preventDefault();
	const value  = e2val.alphaNumeric(e.target.value);

	if (value  ===  null) return;
	...update state
};
```

## Methods

### Validation Methods

> Validation methods return the argument set in the value parameter on truthy evaluations and returns null on falsely evaluations.

- alphaNumeric(value)
- creditCard(value)
- email(value)
- money(value)
- numberMax(value)
- number(value)
- phone(value)
