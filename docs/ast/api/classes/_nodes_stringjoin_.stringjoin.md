---
id: '_nodes_stringjoin_.stringjoin'
title: 'StringJoin'
sidebar_label: 'StringJoin'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/StringJoin"](../modules/_nodes_stringjoin_.md) ›
[StringJoin](_nodes_stringjoin_.stringjoin.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Join](_nodes_join_.join.md)

↳ **StringJoin**

## Index

### Constructors

- [constructor](_nodes_stringjoin_.stringjoin.md#constructor)

### Properties

- [left](_nodes_stringjoin_.stringjoin.md#left)
- [right](_nodes_stringjoin_.stringjoin.md#right)

### Methods

- [toSQL](_nodes_stringjoin_.stringjoin.md#tosql)

## Constructors

### constructor

\+ **new StringJoin**(`left`: any, `right`: any):
_[StringJoin](_nodes_stringjoin_.stringjoin.md)_

_Overrides [As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/StringJoin.ts:3](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/StringJoin.ts#L3)_

**Parameters:**

| Name    | Type | Default |
| ------- | ---- | ------- |
| `left`  | any  | -       |
| `right` | any  | null    |

**Returns:** _[StringJoin](_nodes_stringjoin_.stringjoin.md)_

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

## Methods

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
