---
id: '_collectors_bind_.bind'
title: 'Bind'
sidebar_label: 'Bind'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["collectors/Bind"](../modules/_collectors_bind_.md) ›
[Bind](_collectors_bind_.bind.md)

## Hierarchy

- **Bind**

## Implements

- [Collector](../interfaces/_collectors_collector_.collector.md)‹string[]›

## Index

### Properties

- [strBinds](_collectors_bind_.bind.md#private-strbinds)

### Accessors

- [value](_collectors_bind_.bind.md#value)

### Methods

- [addBind](_collectors_bind_.bind.md#addbind)
- [append](_collectors_bind_.bind.md#append)

## Properties

### `Private` strBinds

• **strBinds**: _string[]_ = []

_Defined in
[src/collectors/Bind.ts:5](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Bind.ts#L5)_

## Accessors

### value

• **get value**(): _string[]_

_Defined in
[src/collectors/Bind.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Bind.ts#L7)_

**Returns:** _string[]_

## Methods

### addBind

▸ **addBind**(`bind`: string, `_`:
[Binder](../modules/_collectors_binder_.md#binder) | null):
_[Bind](_collectors_bind_.bind.md)_

_Implementation of
[Collector](../interfaces/_collectors_collector_.collector.md)_

_Defined in
[src/collectors/Bind.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Bind.ts#L11)_

**Parameters:**

| Name   | Type                                                           |
| ------ | -------------------------------------------------------------- |
| `bind` | string                                                         |
| `_`    | [Binder](../modules/_collectors_binder_.md#binder) &#124; null |

**Returns:** _[Bind](_collectors_bind_.bind.md)_

---

### append

▸ **append**(`_`: string): _[Bind](_collectors_bind_.bind.md)_

_Implementation of
[Collector](../interfaces/_collectors_collector_.collector.md)_

_Defined in
[src/collectors/Bind.ts:17](https://github.com/sequeljs/ast/blob/aa0ef0f/src/collectors/Bind.ts#L17)_

**Parameters:**

| Name | Type   |
| ---- | ------ |
| `_`  | string |

**Returns:** _[Bind](_collectors_bind_.bind.md)_
