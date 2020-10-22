# E2PS Validation

Regex validation and formatting methods to be used with E2PS Master, Admin and Public sites.

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
- alphaNumericPlus(value)
- creditCard(value)
- email(value)
- money(value)
- numberMax(value)
- number(value)
- phone(value)

### Formatting Methods

> Formatting methods ensure consistent formation across E2PS applications.

- dateParser()
- moneyFormatParser()
- TurnTimeParser()

#### Date Parser

Syntax

```
dateParser(date,display,time)
```

Parameter Values
|Parameter |Description |Options |
|----------------|-------------------------------|-----------------------------|
|date |Required. The timestamp to format |
|display |Optional. Date format. Default > sm |xs, sm, md, lg
|time |Optional Show time. Default > false |true, false

#### Money Format Parser

Syntax

```
moneyFormatParser(amount,decimalCount,decimal,thousands)
```

Parameter Values
|Parameter |Description |Options |
|----------------|-------------------------------|-----------------------------|
|amount |Required. The amount to format |
|decimalCount |Optional. Decimal placement Default > 2 |numeric values
|decimal |Optional. Sets the separator for the decimal point. Default > . |
|thousands |Optional. Sets the thousands separator. Default > , |

#### Turn Time Parser

Syntax

```
TurnTimeParser(orderDate, turnTimeDays, cutOffTime)
```

Parameter Values
|Parameter |Description |Options |
|----------------|-------------------------------|-----------------------------|
|orderDate |Required. Timestamp |
|turnTimeDays |Required. |numeric value
|cutOffTime |Optional. Default > 13 | numeric value
