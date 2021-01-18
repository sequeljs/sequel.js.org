---
id: 'collectors.sqlstring'
title: 'Class: SQLString'
sidebar_label: 'SQLString'
hide_title: true
---

# Class: SQLString

[Collectors](../modules/collectors.md).SQLString

## Hierarchy

- **SQLString**

## Implements

- [_Collector_](../interfaces/collectors.collector.md)<_string_\>

## Constructors

### constructor

\+ **new SQLString**(): [_SQLString_](collectors.sqlstring.md)

**Returns:** [_SQLString_](collectors.sqlstring.md)

## Properties

### bindIndex

• `Private` **bindIndex**: _number_= 1

Defined in: @sequeljs/ast/src/collectors/SQLString.ts:5

---

### str

• `Private` **str**: _string_= ''

Defined in: @sequeljs/ast/src/collectors/SQLString.ts:7

## Accessors

### value

• **value**(): _string_

**Returns:** _string_

Defined in: @sequeljs/ast/src/collectors/SQLString.ts:9

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

Defined in: @sequeljs/ast/src/collectors/SQLString.ts:13

---

### append

▸ **append**(`str`: _string_): [_SQLString_](collectors.sqlstring.md)

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `str` | _string_ |

**Returns:** [_SQLString_](collectors.sqlstring.md)

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in: @sequeljs/ast/src/collectors/SQLString.ts:20
