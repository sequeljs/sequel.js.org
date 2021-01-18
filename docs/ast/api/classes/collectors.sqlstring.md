[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Collectors](../modules/collectors.md) / SQLString

# Class: SQLString

[Collectors](../modules/collectors.md).SQLString

## Hierarchy

- **SQLString**

## Implements

- [_Collector_](../interfaces/collectors.collector.md)<_string_\>

## Table of contents

### Constructors

- [constructor](collectors.sqlstring.md#constructor)

### Properties

- [bindIndex](collectors.sqlstring.md#bindindex)
- [str](collectors.sqlstring.md#str)

### Accessors

- [value](collectors.sqlstring.md#value)

### Methods

- [addBind](collectors.sqlstring.md#addbind)
- [append](collectors.sqlstring.md#append)

## Constructors

### constructor

\+ **new SQLString**(): [_SQLString_](collectors.sqlstring.md)

**Returns:** [_SQLString_](collectors.sqlstring.md)

## Properties

### bindIndex

• `Private` **bindIndex**: _number_= 1

Defined in:
[src/collectors/SQLString.ts:5](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SQLString.ts#L5)

---

### str

• `Private` **str**: _string_= ''

Defined in:
[src/collectors/SQLString.ts:7](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SQLString.ts#L7)

## Accessors

### value

• **value**(): _string_

**Returns:** _string_

Defined in:
[src/collectors/SQLString.ts:9](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SQLString.ts#L9)

## Methods

### addBind

▸ **addBind**(`_`: _string_, `binder`:
[_Binder_](../modules/collectors.md#binder)):
[_SQLString_](collectors.sqlstring.md)

#### Parameters:

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| `_`      | _string_                                    |
| `binder` | [_Binder_](../modules/collectors.md#binder) |

**Returns:** [_SQLString_](collectors.sqlstring.md)

Defined in:
[src/collectors/SQLString.ts:13](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SQLString.ts#L13)

---

### append

▸ **append**(`str`: _string_): [_SQLString_](collectors.sqlstring.md)

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `str` | _string_ |

**Returns:** [_SQLString_](collectors.sqlstring.md)

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in:
[src/collectors/SQLString.ts:20](https://github.com/sequeljs/ast/blob/8de61b1/src/collectors/SQLString.ts#L20)
