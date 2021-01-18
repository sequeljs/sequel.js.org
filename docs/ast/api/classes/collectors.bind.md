---
id: 'collectors.bind'
title: 'Class: Bind'
sidebar_label: 'Bind'
hide_title: true
---

# Class: Bind

[Collectors](../modules/collectors.md).Bind

## Hierarchy

- **Bind**

## Implements

- [_Collector_](../interfaces/collectors.collector.md)<_string_[]\>

## Constructors

### constructor

\+ **new Bind**(): [_Bind_](collectors.bind.md)

**Returns:** [_Bind_](collectors.bind.md)

## Properties

### strBinds

• `Private` **strBinds**: _string_[]

Defined in: @sequeljs/ast/src/collectors/Bind.ts:5

## Accessors

### value

• **value**(): _string_[]

**Returns:** _string_[]

Defined in: @sequeljs/ast/src/collectors/Bind.ts:7

## Methods

### addBind

▸ **addBind**(`bind`: _string_, `_`: _null_ \|
[_Binder_](../modules/collectors.md#binder)): [_Bind_](collectors.bind.md)

#### Parameters:

| Name   | Type                                                  |
| ------ | ----------------------------------------------------- |
| `bind` | _string_                                              |
| `_`    | _null_ \| [_Binder_](../modules/collectors.md#binder) |

**Returns:** [_Bind_](collectors.bind.md)

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in: @sequeljs/ast/src/collectors/Bind.ts:11

---

### append

▸ **append**(`_`: _string_): [_Bind_](collectors.bind.md)

#### Parameters:

| Name | Type     |
| ---- | -------- |
| `_`  | _string_ |

**Returns:** [_Bind_](collectors.bind.md)

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in: @sequeljs/ast/src/collectors/Bind.ts:17
