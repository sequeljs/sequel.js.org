---
id: '_nodes_in_.in'
title: 'In'
sidebar_label: 'In'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/In"](../modules/_nodes_in_.md) › [In](_nodes_in_.in.md)

## Hierarchy

↳ [Equality](_nodes_equality_.equality.md)‹any,
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]›

↳ **In**

## Index

### Constructors

- [constructor](_nodes_in_.in.md#constructor)

### Properties

- [left](_nodes_in_.in.md#left)
- [operator](_nodes_in_.in.md#operator)
- [right](_nodes_in_.in.md#right)

### Accessors

- [operand1](_nodes_in_.in.md#operand1)
- [operand2](_nodes_in_.in.md#operand2)

### Methods

- [toSQL](_nodes_in_.in.md#tosql)

## Constructors

### constructor

\+ **new In**(`left`: any, `right`:
[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]):
_[In](_nodes_in_.in.md)_

_Inherited from
[As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

**Parameters:**

| Name    | Type                                                                                                                         |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `left`  | any                                                                                                                          |
| `right` | [Visitable](../modules/_visitors_visitable_.md#visitable) &#124; [Visitable](../modules/_visitors_visitable_.md#visitable)[] |

**Returns:** _[In](_nodes_in_.in.md)_

## Properties

### left

• **left**: _any_

_Inherited from [As](_nodes_as_.as.md).[left](_nodes_as_.as.md#left)_

_Defined in
[src/nodes/Binary.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L6)_

---

### operator

• **operator**: _string_ = "=="

_Inherited from
[Equality](_nodes_equality_.equality.md).[operator](_nodes_equality_.equality.md#operator)_

_Defined in
[src/nodes/Equality.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L4)_

---

### right

• **right**: _[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]_

_Inherited from [As](_nodes_as_.as.md).[right](_nodes_as_.as.md#right)_

_Defined in
[src/nodes/Binary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Binary.ts#L8)_

## Accessors

### operand1

• **get operand1**(): _any_

_Inherited from
[Equality](_nodes_equality_.equality.md).[operand1](_nodes_equality_.equality.md#operand1)_

_Defined in
[src/nodes/Equality.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L6)_

**Returns:** _any_

---

### operand2

• **get operand2**(): _[Visitable](../modules/_visitors_visitable_.md#visitable)
| [Visitable](../modules/_visitors_visitable_.md#visitable)[]_

_Inherited from
[Equality](_nodes_equality_.equality.md).[operand2](_nodes_equality_.equality.md#operand2)_

_Defined in
[src/nodes/Equality.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Equality.ts#L10)_

**Returns:** _[Visitable](../modules/_visitors_visitable_.md#visitable) |
[Visitable](../modules/_visitors_visitable_.md#visitable)[]_

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
