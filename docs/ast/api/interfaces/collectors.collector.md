---
id: 'collectors.collector'
title: 'Interface: Collector<T>'
sidebar_label: 'Collector'
hide_title: true
---

# Interface: Collector<T\>

[Collectors](../modules/collectors.md).Collector

## Type parameters

| Name | Default  |
| ---- | -------- |
| `T`  | _string_ |

## Hierarchy

- **Collector**

## Implemented by

- [_Bind_](../classes/collectors.bind.md)
- [_Composite_](../classes/collectors.composite.md)
- [_SQLString_](../classes/collectors.sqlstring.md)
- [_SubstituteBinds_](../classes/collectors.substitutebinds.md)

## Properties

### value

• `Readonly` **value**: T

Defined in: @sequeljs/ast/src/collectors/Collector.ts:4

## Methods

### addBind

▸ **addBind**(`str`: _string_, `binder`: _null_ \|
[_Binder_](../modules/collectors.md#binder)):
[_Collector_](collectors.collector.md)<T\>

#### Parameters:

| Name     | Type                                                  |
| -------- | ----------------------------------------------------- |
| `str`    | _string_                                              |
| `binder` | _null_ \| [_Binder_](../modules/collectors.md#binder) |

**Returns:** [_Collector_](collectors.collector.md)<T\>

Defined in: @sequeljs/ast/src/collectors/Collector.ts:6

---

### append

▸ **append**(`str`: _string_): [_Collector_](collectors.collector.md)<T\>

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `str` | _string_ |

**Returns:** [_Collector_](collectors.collector.md)<T\>

Defined in: @sequeljs/ast/src/collectors/Collector.ts:8
