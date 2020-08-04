---
id: '_interfaces_quoter_.quoter'
title: 'Quoter'
sidebar_label: 'Quoter'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["interfaces/Quoter"](../modules/_interfaces_quoter_.md) ›
[Quoter](_interfaces_quoter_.quoter.md)

## Hierarchy

- **Quoter**

  ↳ [Connection](_interfaces_connection_.connection.md)

## Index

### Methods

- [quote](_interfaces_quoter_.quoter.md#quote)
- [quoteColumnName](_interfaces_quoter_.quoter.md#quotecolumnname)
- [quoteTableName](_interfaces_quoter_.quoter.md#quotetablename)

## Methods

### quote

▸ **quote**(`value`: [Visitable](../modules/_visitors_visitable_.md#visitable)):
_number | string_

_Defined in
[src/interfaces/Quoter.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/Quoter.ts#L6)_

**Parameters:**

| Name    | Type                                                      |
| ------- | --------------------------------------------------------- |
| `value` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _number | string_

---

### quoteColumnName

▸ **quoteColumnName**(`value`: number | string |
[SQLLiteral](../classes/_nodes_sqlliteral_.sqlliteral.md)): _string_

_Defined in
[src/interfaces/Quoter.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/Quoter.ts#L8)_

**Parameters:**

| Name    | Type                                                                                  |
| ------- | ------------------------------------------------------------------------------------- |
| `value` | number &#124; string &#124; [SQLLiteral](../classes/_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _string_

---

### quoteTableName

▸ **quoteTableName**(`value`: number | string |
[SQLLiteral](../classes/_nodes_sqlliteral_.sqlliteral.md)): _string_

_Defined in
[src/interfaces/Quoter.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/Quoter.ts#L10)_

**Parameters:**

| Name    | Type                                                                                  |
| ------- | ------------------------------------------------------------------------------------- |
| `value` | number &#124; string &#124; [SQLLiteral](../classes/_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _string_
