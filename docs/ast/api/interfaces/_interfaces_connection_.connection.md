---
id: '_interfaces_connection_.connection'
title: 'Connection'
sidebar_label: 'Connection'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["interfaces/Connection"](../modules/_interfaces_connection_.md) ›
[Connection](_interfaces_connection_.connection.md)

## Hierarchy

- [Quoter](_interfaces_quoter_.quoter.md)

  ↳ **Connection**

## Index

### Properties

- [inClauseLength](_interfaces_connection_.connection.md#inclauselength)
- [visitor](_interfaces_connection_.connection.md#visitor)

### Methods

- [quote](_interfaces_connection_.connection.md#quote)
- [quoteColumnName](_interfaces_connection_.connection.md#quotecolumnname)
- [quoteTableName](_interfaces_connection_.connection.md#quotetablename)
- [sanitizeAsSQLComment](_interfaces_connection_.connection.md#sanitizeassqlcomment)

## Properties

### inClauseLength

• **inClauseLength**: _number | null_

_Defined in
[src/interfaces/Connection.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/Connection.ts#L6)_

---

### visitor

• **visitor**: _[Visitor](../classes/_visitors_visitor_.visitor.md) | null_

_Defined in
[src/interfaces/Connection.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/Connection.ts#L8)_

## Methods

### quote

▸ **quote**(`value`: [Visitable](../modules/_visitors_visitable_.md#visitable)):
_number | string_

_Inherited from
[Quoter](_interfaces_quoter_.quoter.md).[quote](_interfaces_quoter_.quoter.md#quote)_

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

_Inherited from
[Quoter](_interfaces_quoter_.quoter.md).[quoteColumnName](_interfaces_quoter_.quoter.md#quotecolumnname)_

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

_Inherited from
[Quoter](_interfaces_quoter_.quoter.md).[quoteTableName](_interfaces_quoter_.quoter.md#quotetablename)_

_Defined in
[src/interfaces/Quoter.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/Quoter.ts#L10)_

**Parameters:**

| Name    | Type                                                                                  |
| ------- | ------------------------------------------------------------------------------------- |
| `value` | number &#124; string &#124; [SQLLiteral](../classes/_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _string_

---

### sanitizeAsSQLComment

▸ **sanitizeAsSQLComment**(`value`: any): _string_

_Defined in
[src/interfaces/Connection.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/interfaces/Connection.ts#L10)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `value` | any  |

**Returns:** _string_
