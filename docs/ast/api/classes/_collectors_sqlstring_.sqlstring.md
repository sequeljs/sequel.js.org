---
id: '_collectors_sqlstring_.sqlstring'
title: 'SQLString'
sidebar_label: 'SQLString'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["collectors/SQLString"](../modules/_collectors_sqlstring_.md) ›
[SQLString](_collectors_sqlstring_.sqlstring.md)

## Hierarchy

- **SQLString**

## Implements

- [Collector](../interfaces/_collectors_collector_.collector.md)‹string›

## Index

### Properties

- [bindIndex](_collectors_sqlstring_.sqlstring.md#private-bindindex)
- [str](_collectors_sqlstring_.sqlstring.md#private-str)

### Accessors

- [value](_collectors_sqlstring_.sqlstring.md#value)

### Methods

- [addBind](_collectors_sqlstring_.sqlstring.md#addbind)
- [append](_collectors_sqlstring_.sqlstring.md#append)

## Properties

### `Private` bindIndex

• **bindIndex**: _number_ = 1

_Defined in
[src/collectors/SQLString.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SQLString.ts#L5)_

---

### `Private` str

• **str**: _string_ = ""

_Defined in
[src/collectors/SQLString.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SQLString.ts#L7)_

## Accessors

### value

• **get value**(): _string_

_Defined in
[src/collectors/SQLString.ts:9](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SQLString.ts#L9)_

**Returns:** _string_

## Methods

### addBind

▸ **addBind**(`_`: string, `binder`:
[Binder](../modules/_collectors_binder_.md#binder)):
_[SQLString](_collectors_sqlstring_.sqlstring.md)_

_Defined in
[src/collectors/SQLString.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SQLString.ts#L13)_

**Parameters:**

| Name     | Type                                               |
| -------- | -------------------------------------------------- |
| `_`      | string                                             |
| `binder` | [Binder](../modules/_collectors_binder_.md#binder) |

**Returns:** _[SQLString](_collectors_sqlstring_.sqlstring.md)_

---

### append

▸ **append**(`str`: string): _[SQLString](_collectors_sqlstring_.sqlstring.md)_

_Implementation of
[Collector](../interfaces/_collectors_collector_.collector.md)_

_Defined in
[src/collectors/SQLString.ts:20](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SQLString.ts#L20)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `str` | string |

**Returns:** _[SQLString](_collectors_sqlstring_.sqlstring.md)_
