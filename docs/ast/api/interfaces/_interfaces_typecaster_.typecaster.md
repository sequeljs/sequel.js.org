---
id: '_interfaces_typecaster_.typecaster'
title: 'TypeCaster'
sidebar_label: 'TypeCaster'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["interfaces/TypeCaster"](../modules/_interfaces_typecaster_.md) ›
[TypeCaster](_interfaces_typecaster_.typecaster.md)

## Hierarchy

- **TypeCaster**

## Implemented by

- [Table](../classes/_table_.table.md)

## Index

### Methods

- [isAbleToTypeCast](_interfaces_typecaster_.typecaster.md#isabletotypecast)
- [typeCastForDatabase](_interfaces_typecaster_.typecaster.md#typecastfordatabase)

## Methods

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

_Defined in
[src/interfaces/TypeCaster.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/TypeCaster.ts#L6)_

**Returns:** _boolean_

---

### typeCastForDatabase

▸ **typeCastForDatabase**(`attributeName`: string |
[SQLLiteral](../classes/_nodes_sqlliteral_.sqlliteral.md), `value`:
[Visitable](../modules/_visitors_visitable_.md#visitable)): _number | string_

_Defined in
[src/interfaces/TypeCaster.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/TypeCaster.ts#L8)_

**Parameters:**

| Name            | Type                                                                    |
| --------------- | ----------------------------------------------------------------------- |
| `attributeName` | string &#124; [SQLLiteral](../classes/_nodes_sqlliteral_.sqlliteral.md) |
| `value`         | [Visitable](../modules/_visitors_visitable_.md#visitable)               |

**Returns:** _number | string_
