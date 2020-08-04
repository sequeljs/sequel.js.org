---
id: '_nodes_outerjoin_.outerjoin'
title: 'OuterJoin'
sidebar_label: 'OuterJoin'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/OuterJoin"](../modules/_nodes_outerjoin_.md) ›
[OuterJoin](_nodes_outerjoin_.outerjoin.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Join](_nodes_join_.join.md)

↳ **OuterJoin**

## Index

### Constructors

- [constructor](_nodes_outerjoin_.outerjoin.md#constructor)

### Properties

- [left](_nodes_outerjoin_.outerjoin.md#left)
- [right](_nodes_outerjoin_.outerjoin.md#right)

### Methods

- [toSQL](_nodes_outerjoin_.outerjoin.md#tosql)

## Constructors

### constructor

\+ **new OuterJoin**(`left`: L, `right`: R):
_[OuterJoin](_nodes_outerjoin_.outerjoin.md)_

_Inherited from
[As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `left`  | L    |
| `right` | R    |

**Returns:** _[OuterJoin](_nodes_outerjoin_.outerjoin.md)_

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
