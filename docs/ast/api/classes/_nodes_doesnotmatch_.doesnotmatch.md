---
id: '_nodes_doesnotmatch_.doesnotmatch'
title: 'DoesNotMatch'
sidebar_label: 'DoesNotMatch'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/DoesNotMatch"](../modules/_nodes_doesnotmatch_.md) ›
[DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md)

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

↳ [Matches](_nodes_matches_.matches.md)

↳ **DoesNotMatch**

## Index

### Constructors

- [constructor](_nodes_doesnotmatch_.doesnotmatch.md#constructor)

### Properties

- [caseSensitive](_nodes_doesnotmatch_.doesnotmatch.md#casesensitive)
- [escape](_nodes_doesnotmatch_.doesnotmatch.md#readonly-escape)
- [left](_nodes_doesnotmatch_.doesnotmatch.md#left)
- [right](_nodes_doesnotmatch_.doesnotmatch.md#right)

### Methods

- [toSQL](_nodes_doesnotmatch_.doesnotmatch.md#tosql)

## Constructors

### constructor

\+ **new DoesNotMatch**(`left`: any, `right`: any, `escape`: any,
`caseSensitive`: boolean):
_[DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md)_

_Inherited from
[Matches](_nodes_matches_.matches.md).[constructor](_nodes_matches_.matches.md#constructor)_

_Overrides [As](_nodes_as_.as.md).[constructor](_nodes_as_.as.md#constructor)_

_Defined in
[src/nodes/Matches.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Matches.ts#L7)_

**Parameters:**

| Name            | Type    | Default |
| --------------- | ------- | ------- |
| `left`          | any     | -       |
| `right`         | any     | -       |
| `escape`        | any     | null    |
| `caseSensitive` | boolean | false   |

**Returns:** _[DoesNotMatch](_nodes_doesnotmatch_.doesnotmatch.md)_

## Properties

### caseSensitive

• **caseSensitive**: _boolean_

_Inherited from
[Matches](_nodes_matches_.matches.md).[caseSensitive](_nodes_matches_.matches.md#casesensitive)_

_Defined in
[src/nodes/Matches.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Matches.ts#L5)_

---

### `Readonly` escape

• **escape**: _any_

_Inherited from
[Matches](_nodes_matches_.matches.md).[escape](_nodes_matches_.matches.md#readonly-escape)_

_Defined in
[src/nodes/Matches.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Matches.ts#L7)_

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
