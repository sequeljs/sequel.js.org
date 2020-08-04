---
id: '_nodes_valueslist_.valueslist'
title: 'ValuesList'
sidebar_label: 'ValuesList'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/ValuesList"](../modules/_nodes_valueslist_.md) ›
[ValuesList](_nodes_valueslist_.valueslist.md)

## Hierarchy

↳ [Unary](_nodes_unary_.unary.md)‹ValuesListRow[]›

↳ **ValuesList**

## Index

### Constructors

- [constructor](_nodes_valueslist_.valueslist.md#constructor)

### Properties

- [expr](_nodes_valueslist_.valueslist.md#expr)

### Accessors

- [rows](_nodes_valueslist_.valueslist.md#rows)
- [value](_nodes_valueslist_.valueslist.md#value)

### Methods

- [as](_nodes_valueslist_.valueslist.md#as)
- [toSQL](_nodes_valueslist_.valueslist.md#tosql)

## Constructors

### constructor

\+ **new ValuesList**(`expr`: ValuesListRow[]):
_[ValuesList](_nodes_valueslist_.valueslist.md)_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/Unary.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L12)_

**Parameters:**

| Name   | Type            |
| ------ | --------------- |
| `expr` | ValuesListRow[] |

**Returns:** _[ValuesList](_nodes_valueslist_.valueslist.md)_

## Properties

### expr

• **expr**: _ValuesListRow[]_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

## Accessors

### rows

• **get rows**(): _Unary‹ValuesListRow[]›["expr"]_

_Defined in
[src/nodes/ValuesList.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/ValuesList.ts#L6)_

**Returns:** _Unary‹ValuesListRow[]›["expr"]_

---

### value

• **get value**(): _ValuesListRow[]_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[value](_nodes_distincton_.distincton.md#value)_

_Defined in
[src/nodes/Unary.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L10)_

**Returns:** _ValuesListRow[]_

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
