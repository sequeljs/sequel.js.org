---
id: '_collectors_collector_.collector'
title: 'Collector'
sidebar_label: 'Collector'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["collectors/Collector"](../modules/_collectors_collector_.md) ›
[Collector](_collectors_collector_.collector.md)

## Type parameters

▪ **T**

## Hierarchy

- **Collector**

## Implemented by

- [Bind](../classes/_collectors_bind_.bind.md)
- [Composite](../classes/_collectors_composite_.composite.md)
- [SQLString](../classes/_collectors_sqlstring_.sqlstring.md)
- [SubstituteBinds](../classes/_collectors_substitutebinds_.substitutebinds.md)

## Index

### Properties

- [value](_collectors_collector_.collector.md#readonly-value)

### Methods

- [addBind](_collectors_collector_.collector.md#addbind)
- [append](_collectors_collector_.collector.md#append)

## Properties

### `Readonly` value

• **value**: _T_

_Defined in
[src/collectors/Collector.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Collector.ts#L4)_

## Methods

### addBind

▸ **addBind**(`str`: string, `binder`:
[Binder](../modules/_collectors_binder_.md#binder) | null):
_[Collector](_collectors_collector_.collector.md)‹T›_

_Defined in
[src/collectors/Collector.ts:6](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Collector.ts#L6)_

**Parameters:**

| Name     | Type                                                           |
| -------- | -------------------------------------------------------------- |
| `str`    | string                                                         |
| `binder` | [Binder](../modules/_collectors_binder_.md#binder) &#124; null |

**Returns:** _[Collector](_collectors_collector_.collector.md)‹T›_

---

### append

▸ **append**(`str`: string):
_[Collector](_collectors_collector_.collector.md)‹T›_

_Defined in
[src/collectors/Collector.ts:8](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Collector.ts#L8)_

**Parameters:**

| Name  | Type   |
| ----- | ------ |
| `str` | string |

**Returns:** _[Collector](_collectors_collector_.collector.md)‹T›_
