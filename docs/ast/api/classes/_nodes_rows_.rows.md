---
id: '_nodes_rows_.rows'
title: 'Rows'
sidebar_label: 'Rows'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Rows"](../modules/_nodes_rows_.md) › [Rows](_nodes_rows_.rows.md)

## Type parameters

▪ **T**

## Hierarchy

↳ [Unary](_nodes_unary_.unary.md)

↳ **Rows**

## Index

### Constructors

- [constructor](_nodes_rows_.rows.md#constructor)

### Properties

- [expr](_nodes_rows_.rows.md#expr)

### Accessors

- [value](_nodes_rows_.rows.md#value)

### Methods

- [as](_nodes_rows_.rows.md#as)
- [toSQL](_nodes_rows_.rows.md#tosql)

## Constructors

### constructor

\+ **new Rows**(`expr`: any): _[Rows](_nodes_rows_.rows.md)_

_Overrides
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/Rows.ts:3](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Rows.ts#L3)_

**Parameters:**

| Name   | Type | Default |
| ------ | ---- | ------- |
| `expr` | any  | null    |

**Returns:** _[Rows](_nodes_rows_.rows.md)_

## Properties

### expr

• **expr**: _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

## Accessors

### value

• **get value**(): _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[value](_nodes_distincton_.distincton.md#value)_

_Defined in
[src/nodes/Unary.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L10)_

**Returns:** _T_

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
