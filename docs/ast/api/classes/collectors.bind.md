[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Collectors](../modules/collectors.md) / Bind

# Class: Bind

## Hierarchy

- **Bind**

## Implements

- [_Collector_](../interfaces/collectors.collector.md)<_string_[]\>

## Index

### Constructors

- [constructor](collectors.bind.md#constructor)

### Properties

- [strBinds](collectors.bind.md#strbinds)

### Accessors

- [value](collectors.bind.md#value)

### Methods

- [addBind](collectors.bind.md#addbind)
- [append](collectors.bind.md#append)

## Constructors

### constructor

\+ **new Bind**(): [_Bind_](collectors.bind.md)

**Returns:** [_Bind_](collectors.bind.md)

## Properties

### strBinds

• `Private` **strBinds**: _string_[]

Defined in:
[src/collectors/Bind.ts:5](https://github.com/sequeljs/ast/blob/6632050/src/collectors/Bind.ts#L5)

## Accessors

### value

• **value**(): _string_[]

**Returns:** _string_[]

Defined in:
[src/collectors/Bind.ts:7](https://github.com/sequeljs/ast/blob/6632050/src/collectors/Bind.ts#L7)

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

Defined in:
[src/collectors/Bind.ts:11](https://github.com/sequeljs/ast/blob/6632050/src/collectors/Bind.ts#L11)

---

### append

▸ **append**(`_`: _string_): [_Bind_](collectors.bind.md)

#### Parameters:

| Name | Type     |
| ---- | -------- |
| `_`  | _string_ |

**Returns:** [_Bind_](collectors.bind.md)

Implementation of: [Collector](../interfaces/collectors.collector.md)

Defined in:
[src/collectors/Bind.ts:17](https://github.com/sequeljs/ast/blob/6632050/src/collectors/Bind.ts#L17)
