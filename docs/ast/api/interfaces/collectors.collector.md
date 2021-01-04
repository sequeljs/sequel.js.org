[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Collectors](../modules/collectors.md) / Collector

# Interface: Collector<T\>

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

## Index

### Properties

- [value](collectors.collector.md#value)

### Methods

- [addBind](collectors.collector.md#addbind)
- [append](collectors.collector.md#append)

## Properties

### value

• `Readonly` **value**: T

Defined in:
[src/collectors/Collector.ts:4](https://github.com/sequeljs/ast/blob/6632050/src/collectors/Collector.ts#L4)

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

Defined in:
[src/collectors/Collector.ts:6](https://github.com/sequeljs/ast/blob/6632050/src/collectors/Collector.ts#L6)

---

### append

▸ **append**(`str`: _string_): [_Collector_](collectors.collector.md)<T\>

#### Parameters:

| Name  | Type     |
| ----- | -------- |
| `str` | _string_ |

**Returns:** [_Collector_](collectors.collector.md)<T\>

Defined in:
[src/collectors/Collector.ts:8](https://github.com/sequeljs/ast/blob/6632050/src/collectors/Collector.ts#L8)
