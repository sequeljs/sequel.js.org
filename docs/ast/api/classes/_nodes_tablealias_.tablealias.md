---
id: '_nodes_tablealias_.tablealias'
title: 'TableAlias'
sidebar_label: 'TableAlias'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/TableAlias"](../modules/_nodes_tablealias_.md) ›
[TableAlias](_nodes_tablealias_.tablealias.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Binary](_nodes_binary_.binary.md)

↳ **TableAlias**

## Index

### Constructors

- [constructor](_nodes_tablealias_.tablealias.md#constructor)

### Properties

- [left](_nodes_tablealias_.tablealias.md#left)
- [right](_nodes_tablealias_.tablealias.md#right)

### Accessors

- [name](_nodes_tablealias_.tablealias.md#name)
- [relation](_nodes_tablealias_.tablealias.md#relation)
- [tableAlias](_nodes_tablealias_.tablealias.md#tablealias)
- [tableName](_nodes_tablealias_.tablealias.md#tablename)

### Methods

- [as](_nodes_tablealias_.tablealias.md#as)
- [get](_nodes_tablealias_.tablealias.md#get)
- [isAbleToTypeCast](_nodes_tablealias_.tablealias.md#isabletotypecast)
- [toSQL](_nodes_tablealias_.tablealias.md#tosql)
- [typeCastForDatabase](_nodes_tablealias_.tablealias.md#typecastfordatabase)

## Constructors

### constructor

\+ **new TableAlias**(`left`: L, `right`: R):
_[TableAlias](_nodes_tablealias_.tablealias.md)_

_Inherited from
[As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `left`  | L    |
| `right` | R    |

**Returns:** _[TableAlias](_nodes_tablealias_.tablealias.md)_

## Properties

### left

• **left**: _L_

_Inherited from [As](_nodes_as_.as.md).[left](_nodes_as_.as.md#left)_

_Defined in
[src/nodes/Binary.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L6)_

---

### right

• **right**: _R_

_Inherited from [As](_nodes_as_.as.md).[right](_nodes_as_.as.md#right)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

## Accessors

### name

• **get name**(): _string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

_Defined in
[src/nodes/TableAlias.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L12)_

**Returns:** _string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

• **set name**(`val`: string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_void_

_Defined in
[src/nodes/TableAlias.ts:16](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L16)_

**Parameters:**

| Name  | Type                                                         |
| ----- | ------------------------------------------------------------ |
| `val` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _void_

---

### relation

• **get relation**(): _[Relation](../modules/_interfaces_relation_.md#relation)_

_Defined in
[src/nodes/TableAlias.ts:20](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L20)_

**Returns:** _[Relation](../modules/_interfaces_relation_.md#relation)_

• **set relation**(`val`:
[Relation](../modules/_interfaces_relation_.md#relation)): _void_

_Defined in
[src/nodes/TableAlias.ts:24](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L24)_

**Parameters:**

| Name  | Type                                                     |
| ----- | -------------------------------------------------------- |
| `val` | [Relation](../modules/_interfaces_relation_.md#relation) |

**Returns:** _void_

---

### tableAlias

• **get tableAlias**(): _string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

_Defined in
[src/nodes/TableAlias.ts:28](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L28)_

**Returns:** _string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

• **set tableAlias**(`val`: string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)): _void_

_Defined in
[src/nodes/TableAlias.ts:32](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L32)_

**Parameters:**

| Name  | Type                                                         |
| ----- | ------------------------------------------------------------ |
| `val` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _void_

---

### tableName

• **get tableName**(): _string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

_Defined in
[src/nodes/TableAlias.ts:36](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L36)_

**Returns:** _string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)_

## Methods

### as

▸ **as**(`other`: string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_[As](_nodes_as_.as.md)_

_Inherited from [As](_nodes_as_.as.md).[as](_nodes_as_.as.md#as)_

_Defined in
[src/mixins/AliasPredication.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/AliasPredication.ts#L5)_

**Parameters:**

| Name    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| `other` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _[As](_nodes_as_.as.md)_

---

### get

▸ **get**(`name`: string | [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md)):
_[Attribute](_attributes_attribute_.attribute.md)_

_Defined in
[src/nodes/TableAlias.ts:44](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L44)_

**Parameters:**

| Name   | Type                                                         |
| ------ | ------------------------------------------------------------ |
| `name` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |

**Returns:** _[Attribute](_attributes_attribute_.attribute.md)_

---

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

_Defined in
[src/nodes/TableAlias.ts:48](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L48)_

**Returns:** _boolean_

---

### toSQL

▸ **toSQL**(`engine`: [Engine](../interfaces/_interfaces_engine_.engine.md) |
null): _any_

_Inherited from [As](_nodes_as_.as.md).[toSQL](_nodes_as_.as.md#tosql)_

_Defined in
[src/nodes/Node.ts:16](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Node.ts#L16)_

**Parameters:**

| Name     | Type                                                              | Default          |
| -------- | ----------------------------------------------------------------- | ---------------- |
| `engine` | [Engine](../interfaces/_interfaces_engine_.engine.md) &#124; null | SequelAST.engine |

**Returns:** _any_

---

### typeCastForDatabase

▸ **typeCastForDatabase**(`attributeName`: string |
[SQLLiteral](_nodes_sqlliteral_.sqlliteral.md), `value`:
[Visitable](../modules/_visitors_visitable_.md#visitable)): _number | string_

_Defined in
[src/nodes/TableAlias.ts:54](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/TableAlias.ts#L54)_

**Parameters:**

| Name            | Type                                                         |
| --------------- | ------------------------------------------------------------ |
| `attributeName` | string &#124; [SQLLiteral](_nodes_sqlliteral_.sqlliteral.md) |
| `value`         | [Visitable](../modules/_visitors_visitable_.md#visitable)    |

**Returns:** _number | string_
