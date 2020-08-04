---
id: '_nodes_regexp_.regexp'
title: 'Regexp'
sidebar_label: 'Regexp'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/Regexp"](../modules/_nodes_regexp_.md) ›
[Regexp](_nodes_regexp_.regexp.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Binary](_nodes_binary_.binary.md)

↳ **Regexp**

↳ [NotRegexp](_nodes_notregexp_.notregexp.md)

## Index

### Constructors

- [constructor](_nodes_regexp_.regexp.md#constructor)

### Properties

- [caseSensitive](_nodes_regexp_.regexp.md#casesensitive)
- [left](_nodes_regexp_.regexp.md#left)
- [right](_nodes_regexp_.regexp.md#right)

### Methods

- [as](_nodes_regexp_.regexp.md#as)
- [toSQL](_nodes_regexp_.regexp.md#tosql)

## Constructors

### constructor

\+ **new Regexp**(`left`: any, `right`: any, `caseSensitive`: boolean):
_[Regexp](_nodes_regexp_.regexp.md)_

_Overrides [As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Regexp.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Regexp.ts#L4)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `left`          | any     | -       |
| `right`         | any     | -       |
| `caseSensitive` | boolean | true    |

**Returns:** _[Regexp](_nodes_regexp_.regexp.md)_

## Properties

### caseSensitive

• **caseSensitive**: _boolean_

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
