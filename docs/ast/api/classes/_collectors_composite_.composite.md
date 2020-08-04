---
id: '_collectors_composite_.composite'
title: 'Composite'
sidebar_label: 'Composite'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["collectors/Composite"](../modules/_collectors_composite_.md) ›
[Composite](_collectors_composite_.composite.md)

## Type parameters

▪ **L**:
_[Collector](../interfaces/_collectors_collector_.collector.md)‹L["value"]›_

▪ **R**:
_[Collector](../interfaces/_collectors_collector_.collector.md)‹R["value"]›_

## Hierarchy

- **Composite**

## Implements

- [Collector](../interfaces/_collectors_collector_.collector.md)‹[L["value"],
  R["value"]]›

## Index

### Constructors

- [constructor](_collectors_composite_.composite.md#constructor)

### Properties

- [left](_collectors_composite_.composite.md#protected-readonly-left)
- [right](_collectors_composite_.composite.md#protected-readonly-right)

### Accessors

- [value](_collectors_composite_.composite.md#value)

### Methods

- [addBind](_collectors_composite_.composite.md#addbind)
- [append](_collectors_composite_.composite.md#append)

## Constructors

### constructor

\+ **new Composite**(`left`: L, `right`: R):
_[Composite](_collectors_composite_.composite.md)_

_Defined in
[src/collectors/Composite.ts:14](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Composite.ts#L14)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `left`  | L    |
| `right` | R    |

**Returns:** _[Composite](_collectors_composite_.composite.md)_

## Properties

### `Protected` `Readonly` left

• **left**: _L_

_Defined in
[src/collectors/Composite.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Composite.ts#L8)_

---

### `Protected` `Readonly` right

• **right**: _R_

_Defined in
[src/collectors/Composite.ts:10](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Composite.ts#L10)_

## Accessors

### value

• **get value**(): _[L["value"], L["value"]]_

_Defined in
[src/collectors/Composite.ts:12](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Composite.ts#L12)_

**Returns:** _[L["value"], L["value"]]_

## Methods

### addBind

▸ **addBind**(`bind`: string, `binder`:
[Binder](../modules/_collectors_binder_.md#binder) | null):
_[Composite](_collectors_composite_.composite.md)‹L, R›_

_Implementation of
[Collector](../interfaces/_collectors_collector_.collector.md)_

_Defined in
[src/collectors/Composite.ts:21](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Composite.ts#L21)_

**Parameters:**

| Name     | Type                                                           |
| -------- | -------------------------------------------------------------- |
| `bind`   | string                                                         |
| `binder` | [Binder](../modules/_collectors_binder_.md#binder) &#124; null |

**Returns:** _[Composite](_collectors_composite_.composite.md)‹L, R›_

---

### append

▸ **append**(`str`: string):
_[Composite](_collectors_composite_.composite.md)‹L, R›_

_Implementation of
[Collector](../interfaces/_collectors_collector_.collector.md)_

_Defined in
[src/collectors/Composite.ts:28](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Composite.ts#L28)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `str` | string |

**Returns:** _[Composite](_collectors_composite_.composite.md)‹L, R›_
