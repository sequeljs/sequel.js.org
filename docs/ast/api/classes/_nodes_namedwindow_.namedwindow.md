---
id: '_nodes_namedwindow_.namedwindow'
title: 'NamedWindow'
sidebar_label: 'NamedWindow'
---

[@sequeljs/ast](../index.md) › [Globals](../globals.md) ›
["nodes/NamedWindow"](../modules/_nodes_namedwindow_.md) ›
[NamedWindow](_nodes_namedwindow_.namedwindow.md)

## Hierarchy

↳ [Window](_nodes_window_.window.md)

↳ **NamedWindow**

## Index

### Constructors

- [constructor](_nodes_namedwindow_.namedwindow.md#constructor)

### Properties

- [framing](_nodes_namedwindow_.namedwindow.md#framing)
- [name](_nodes_namedwindow_.namedwindow.md#name)
- [orders](_nodes_namedwindow_.namedwindow.md#orders)
- [partitions](_nodes_namedwindow_.namedwindow.md#partitions)

### Methods

- [frame](_nodes_namedwindow_.namedwindow.md#frame)
- [order](_nodes_namedwindow_.namedwindow.md#order)
- [partition](_nodes_namedwindow_.namedwindow.md#partition)
- [range](_nodes_namedwindow_.namedwindow.md#range)
- [rows](_nodes_namedwindow_.namedwindow.md#rows)
- [toSQL](_nodes_namedwindow_.namedwindow.md#tosql)

## Constructors

### constructor

\+ **new NamedWindow**(`name`: any):
_[NamedWindow](_nodes_namedwindow_.namedwindow.md)_

_Defined in
[src/nodes/NamedWindow.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/NamedWindow.ts#L4)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `name` | any  |

**Returns:** _[NamedWindow](_nodes_namedwindow_.namedwindow.md)_

## Properties

### framing

• **framing**: _any_ = null

_Inherited from
[Window](_nodes_window_.window.md).[framing](_nodes_window_.window.md#framing)_

_Defined in
[src/nodes/Window.ts:7](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L7)_

---

### name

• **name**: _any_

_Defined in
[src/nodes/NamedWindow.ts:4](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/NamedWindow.ts#L4)_

---

### orders

• **orders**: _any[]_ = []

_Inherited from
[Window](_nodes_window_.window.md).[orders](_nodes_window_.window.md#orders)_

_Defined in
[src/nodes/Window.ts:9](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L9)_

---

### partitions

• **partitions**: _any[]_ = []

_Inherited from
[Window](_nodes_window_.window.md).[partitions](_nodes_window_.window.md#partitions)_

_Defined in
[src/nodes/Window.ts:11](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L11)_

## Methods

### frame

▸ **frame**(`expr`: any): _any_

_Inherited from
[Window](_nodes_window_.window.md).[frame](_nodes_window_.window.md#frame)_

_Defined in
[src/nodes/Window.ts:13](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L13)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `expr` | any  |

**Returns:** _any_

---

### order

▸ **order**(...`expr`: any[]): _[Window](_nodes_window_.window.md)_

_Inherited from
[Window](_nodes_window_.window.md).[order](_nodes_window_.window.md#order)_

_Defined in
[src/nodes/Window.ts:19](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L19)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...expr` | any[] |

**Returns:** _[Window](_nodes_window_.window.md)_

---

### partition

▸ **partition**(...`expr`: any[]): _[Window](_nodes_window_.window.md)_

_Inherited from
[Window](_nodes_window_.window.md).[partition](_nodes_window_.window.md#partition)_

_Defined in
[src/nodes/Window.ts:27](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L27)_

**Parameters:**

| Name      | Type  |
| --------- | ----- |
| `...expr` | any[] |

**Returns:** _[Window](_nodes_window_.window.md)_

---

### range

▸ **range**(`expr`: any): _[Range](_nodes_range_.range.md)_

_Inherited from
[Window](_nodes_window_.window.md).[range](_nodes_window_.window.md#range)_

_Defined in
[src/nodes/Window.ts:35](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L35)_

**Parameters:**

| Name   | Type | Default |
| ------ | ---- | ------- |
| `expr` | any  | null    |

**Returns:** _[Range](_nodes_range_.range.md)_

---

### rows

▸ **rows**(`expr`: any): _[Rows](_nodes_rows_.rows.md)_

_Inherited from
[Window](_nodes_window_.window.md).[rows](_nodes_window_.window.md#rows)_

_Defined in
[src/nodes/Window.ts:45](https://github.com/sequeljs/ast/blob/aa0ef0f/src/nodes/Window.ts#L45)_

**Parameters:**

| Name   | Type | Default |
| ------ | ---- | ------- |
| `expr` | any  | null    |

**Returns:** _[Rows](_nodes_rows_.rows.md)_

---

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
