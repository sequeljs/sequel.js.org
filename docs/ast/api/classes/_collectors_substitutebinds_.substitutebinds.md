---
id: '_collectors_substitutebinds_.substitutebinds'
title: 'SubstituteBinds'
sidebar_label: 'SubstituteBinds'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["collectors/SubstituteBinds"](../modules/_collectors_substitutebinds_.md) ›
[SubstituteBinds](_collectors_substitutebinds_.substitutebinds.md)

## Type parameters

▪ **T**:
_[Collector](../interfaces/_collectors_collector_.collector.md)‹T["value"]›_

## Hierarchy

- **SubstituteBinds**

## Implements

- [Collector](../interfaces/_collectors_collector_.collector.md)‹T["value"]›

## Index

### Constructors

- [constructor](_collectors_substitutebinds_.substitutebinds.md#constructor)

### Properties

- [delegate](_collectors_substitutebinds_.substitutebinds.md#protected-readonly-delegate)
- [quoter](_collectors_substitutebinds_.substitutebinds.md#protected-readonly-quoter)

### Accessors

- [value](_collectors_substitutebinds_.substitutebinds.md#value)

### Methods

- [addBind](_collectors_substitutebinds_.substitutebinds.md#addbind)
- [append](_collectors_substitutebinds_.substitutebinds.md#append)

## Constructors

### constructor

\+ **new SubstituteBinds**(`quoter`:
[Quoter](../interfaces/_interfaces_quoter_.quoter.md), `delegate`: T):
_[SubstituteBinds](_collectors_substitutebinds_.substitutebinds.md)_

_Defined in
[src/collectors/SubstituteBinds.ts:14](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SubstituteBinds.ts#L14)_

**Parameters:**

| Name       | Type                                                  |
| ---------- | ----------------------------------------------------- |
| `quoter`   | [Quoter](../interfaces/_interfaces_quoter_.quoter.md) |
| `delegate` | T                                                     |

**Returns:**
_[SubstituteBinds](_collectors_substitutebinds_.substitutebinds.md)_

## Properties

### `Protected` `Readonly` delegate

• **delegate**: _T_

_Defined in
[src/collectors/SubstituteBinds.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SubstituteBinds.ts#L8)_

---

### `Protected` `Readonly` quoter

• **quoter**: _[Quoter](../interfaces/_interfaces_quoter_.quoter.md)_

_Defined in
[src/collectors/SubstituteBinds.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SubstituteBinds.ts#L10)_

## Accessors

### value

• **get value**(): _T["value"]_

_Defined in
[src/collectors/SubstituteBinds.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SubstituteBinds.ts#L12)_

**Returns:** _T["value"]_

## Methods

### addBind

▸ **addBind**(`bind`: string, `_`:
[Binder](../modules/_collectors_binder_.md#binder)):
_[SubstituteBinds](_collectors_substitutebinds_.substitutebinds.md)‹T›_

_Defined in
[src/collectors/SubstituteBinds.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SubstituteBinds.ts#L21)_

**Parameters:**

| Name   | Type                                               |
| ------ | -------------------------------------------------- |
| `bind` | string                                             |
| `_`    | [Binder](../modules/_collectors_binder_.md#binder) |

**Returns:**
_[SubstituteBinds](_collectors_substitutebinds_.substitutebinds.md)‹T›_

---

### append

▸ **append**(`str`: string):
_[SubstituteBinds](_collectors_substitutebinds_.substitutebinds.md)‹T›_

_Implementation of
[Collector](../interfaces/_collectors_collector_.collector.md)_

_Defined in
[src/collectors/SubstituteBinds.ts:25](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/SubstituteBinds.ts#L25)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `str` | string |

**Returns:**
_[SubstituteBinds](_collectors_substitutebinds_.substitutebinds.md)‹T›_
