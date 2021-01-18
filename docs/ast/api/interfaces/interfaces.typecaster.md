---
id: 'interfaces.typecaster'
title: 'Interface: TypeCaster'
sidebar_label: 'TypeCaster'
hide_title: true
---

# Interface: TypeCaster

[Interfaces](../modules/interfaces.md).TypeCaster

## Hierarchy

- **TypeCaster**

## Implemented by

- [_Table_](../classes/table.md)

## Methods

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

**Returns:** _boolean_

Defined in: @sequeljs/ast/src/interfaces/TypeCaster.ts:6

---

### typeCastForDatabase

▸ **typeCastForDatabase**(`attributeName`: _string_ \|
[_SQLLiteral_](../classes/nodes.sqlliteral.md), `value`:
[_Visitable_](../modules/visitors.md#visitable)): _string_ \| _number_

#### Parameters:

| Name            | Type                                                       |
| --------------- | ---------------------------------------------------------- |
| `attributeName` | _string_ \| [_SQLLiteral_](../classes/nodes.sqlliteral.md) |
| `value`         | [_Visitable_](../modules/visitors.md#visitable)            |

**Returns:** _string_ \| _number_

Defined in: @sequeljs/ast/src/interfaces/TypeCaster.ts:8
