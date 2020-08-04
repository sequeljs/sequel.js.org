---
id: '_nodes_nullslast_.nullslast'
title: 'NullsLast'
sidebar_label: 'NullsLast'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/NullsLast"](../modules/_nodes_nullslast_.md) ›
[NullsLast](_nodes_nullslast_.nullslast.md)

## Type parameters

▪ **T**

## Hierarchy

↳ [Ordering](_nodes_ordering_.ordering.md)

↳ **NullsLast**

## Index

### Constructors

- [constructor](_nodes_nullslast_.nullslast.md#constructor)

### Properties

- [expr](_nodes_nullslast_.nullslast.md#expr)

### Accessors

- [value](_nodes_nullslast_.nullslast.md#value)

### Methods

- [nullsFirst](_nodes_nullslast_.nullslast.md#nullsfirst)
- [nullsLast](_nodes_nullslast_.nullslast.md#nullslast)
- [toSQL](_nodes_nullslast_.nullslast.md#tosql)

## Constructors

### constructor

\+ **new NullsLast**(`expr`: T): _[NullsLast](_nodes_nullslast_.nullslast.md)_

_Inherited from
[DistinctOn](_nodes_distincton_.distincton.md).[constructor](_nodes_distincton_.distincton.md#constructor)_

_Defined in
[src/nodes/Unary.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Unary.ts#L12)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | T    |

**Returns:** _[NullsLast](_nodes_nullslast_.nullslast.md)_

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
