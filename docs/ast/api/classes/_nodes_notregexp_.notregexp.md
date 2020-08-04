---
id: '_nodes_notregexp_.notregexp'
title: 'NotRegexp'
sidebar_label: 'NotRegexp'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/NotRegexp"](../modules/_nodes_notregexp_.md) ›
[NotRegexp](_nodes_notregexp_.notregexp.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Regexp](_nodes_regexp_.regexp.md)

↳ **NotRegexp**

## Index

### Constructors

- [constructor](_nodes_notregexp_.notregexp.md#constructor)

### Properties

- [caseSensitive](_nodes_notregexp_.notregexp.md#casesensitive)
- [left](_nodes_notregexp_.notregexp.md#left)
- [right](_nodes_notregexp_.notregexp.md#right)

### Methods

- [toSQL](_nodes_notregexp_.notregexp.md#tosql)

## Constructors

### constructor

\+ **new NotRegexp**(`left`: any, `right`: any, `caseSensitive`: boolean):
_[NotRegexp](_nodes_notregexp_.notregexp.md)_

_Inherited from
[Regexp](_nodes_regexp_.regexp.md).[constructor](_nodes_regexp_.regexp.md#constructor)_

_Overrides [As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Regexp.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Regexp.ts#L4)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `left`          | any     | -       |
| `right`         | any     | -       |
| `caseSensitive` | boolean | true    |

**Returns:** _[NotRegexp](_nodes_notregexp_.notregexp.md)_

## Properties

### caseSensitive

• **caseSensitive**: _boolean_

_Inherited from
[Regexp](_nodes_regexp_.regexp.md).[caseSensitive](_nodes_regexp_.regexp.md#casesensitive)_

_Defined in
[src/nodes/Regexp.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Regexp.ts#L4)_

---

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
