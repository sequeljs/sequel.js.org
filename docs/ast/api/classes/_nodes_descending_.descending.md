---
id: '_nodes_descending_.descending'
title: 'Descending'
sidebar_label: 'Descending'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Descending"](../modules/_nodes_descending_.md) ›
[Descending](_nodes_descending_.descending.md)

## Type parameters

▪ **T**

## Hierarchy

↳ [Ordering](_nodes_ordering_.ordering.md)

- [ReversionPredication](_mixins_reversionpredication_.reversionpredication.md)

  ↳ **Descending**

## Index

### Constructors

- [constructor](_nodes_descending_.descending.md#constructor)

### Properties

- [direction](_nodes_descending_.descending.md#readonly-direction)
- [expr](_nodes_descending_.descending.md#expr)
- [isAscending](_nodes_descending_.descending.md#readonly-isascending)
- [isDescending](_nodes_descending_.descending.md#readonly-isdescending)

### Accessors

- [value](_nodes_descending_.descending.md#value)

### Methods

- [nullsFirst](_nodes_descending_.descending.md#nullsfirst)
- [nullsLast](_nodes_descending_.descending.md#nullslast)
- [reverse](_nodes_descending_.descending.md#reverse)
- [toSQL](_nodes_descending_.descending.md#tosql)

## Constructors

### constructor

\+ **new Descending**(`expr`: T):
_[Descending](_nodes_descending_.descending.md)_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/Unary.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L12)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | T    |

**Returns:** _[Descending](_nodes_descending_.descending.md)_

## Properties

### `Readonly` direction

• **direction**: _"desc"_ = "desc"

_Defined in
[src/nodes/Descending.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Descending.ts#L6)_

---

### expr

• **expr**: _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[expr](_nodes_distincton_.distincton.md#expr)_

_Defined in
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L8)_

---

### `Readonly` isAscending

• **isAscending**: _false_ = false

_Defined in
[src/nodes/Descending.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Descending.ts#L8)_

---

### `Readonly` isDescending

• **isDescending**: _true_ = true

_Defined in
[src/nodes/Descending.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Descending.ts#L10)_

## Accessors

### value

• **get value**(): _T_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[value](_nodes_distincton_.distincton.md#value)_

_Defined in
[src/nodes/Unary.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L10)_

**Returns:** _T_

## Methods

### nullsFirst

▸ **nullsFirst**(`this`:
[Visitable](../modules/_visitors_visitable_.md#visitable)):
_[NullsFirst](_nodes_nullsfirst_.nullsfirst.md)_

_Inherited from
[NullsFirst](_nodes_nullsfirst_.nullsfirst.md).[nullsFirst](_nodes_nullsfirst_.nullsfirst.md#nullsfirst)_

_Defined in
[src/mixins/NullsFirstPredication.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NullsFirstPredication.ts#L6)_

**Parameters:**

| Name   | Type                                                      |
| ------ | --------------------------------------------------------- |
| `this` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _[NullsFirst](_nodes_nullsfirst_.nullsfirst.md)_

---

### nullsLast

▸ **nullsLast**(`this`:
[Visitable](../modules/_visitors_visitable_.md#visitable)):
_[NullsLast](_nodes_nullslast_.nullslast.md)_

_Inherited from
[NullsFirst](_nodes_nullsfirst_.nullsfirst.md).[nullsLast](_nodes_nullsfirst_.nullsfirst.md#nullslast)_

_Defined in
[src/mixins/NullsLastPredication.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/NullsLastPredication.ts#L6)_

**Parameters:**

| Name   | Type                                                      |
| ------ | --------------------------------------------------------- |
| `this` | [Visitable](../modules/_visitors_visitable_.md#visitable) |

**Returns:** _[NullsLast](_nodes_nullslast_.nullslast.md)_

---

### reverse

▸ **reverse**(`this`: [Ascending](_nodes_ascending_.ascending.md)):
_[Descending](_nodes_descending_.descending.md)_

_Inherited from
[Descending](_nodes_descending_.descending.md).[reverse](_nodes_descending_.descending.md#reverse)_

_Defined in
[src/mixins/ReversionPredication.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/ReversionPredication.ts#L5)_

**Parameters:**

| Name   | Type                                        |
| ------ | ------------------------------------------- |
| `this` | [Ascending](_nodes_ascending_.ascending.md) |

**Returns:** _[Descending](_nodes_descending_.descending.md)_

▸ **reverse**(`this`: [Descending](_nodes_descending_.descending.md)):
_[Ascending](_nodes_ascending_.ascending.md)_

_Inherited from
[Descending](_nodes_descending_.descending.md).[reverse](_nodes_descending_.descending.md#reverse)_

_Defined in
[src/mixins/ReversionPredication.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/mixins/ReversionPredication.ts#L6)_

**Parameters:**

| Name   | Type                                           |
| ------ | ---------------------------------------------- |
| `this` | [Descending](_nodes_descending_.descending.md) |

**Returns:** _[Ascending](_nodes_ascending_.ascending.md)_

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
