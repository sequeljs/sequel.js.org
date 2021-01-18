---
id: 'interfaces.quoter'
title: 'Interface: Quoter'
sidebar_label: 'Quoter'
hide_title: true
---

# Interface: Quoter

[Interfaces](../modules/interfaces.md).Quoter

## Hierarchy

- **Quoter**

  ↳ [_Connection_](interfaces.connection.md)

## Methods

### quote

▸ **quote**(`value`: [_Visitable_](../modules/visitors.md#visitable)): _string_
\| _number_

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `value` | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** _string_ \| _number_

Defined in: @sequeljs/ast/src/interfaces/Quoter.ts:6

---

### quoteColumnName

▸ **quoteColumnName**(`value`: _string_ \| _number_ \|
[_SQLLiteral_](../classes/nodes.sqlliteral.md)): _string_

#### Parameters:

| Name    | Type                                                                   |
| ------- | ---------------------------------------------------------------------- |
| `value` | _string_ \| _number_ \| [_SQLLiteral_](../classes/nodes.sqlliteral.md) |

**Returns:** _string_

Defined in: @sequeljs/ast/src/interfaces/Quoter.ts:8

---

### quoteTableName

▸ **quoteTableName**(`value`: _string_ \| _number_ \|
[_SQLLiteral_](../classes/nodes.sqlliteral.md)): _string_

#### Parameters:

| Name    | Type                                                                   |
| ------- | ---------------------------------------------------------------------- |
| `value` | _string_ \| _number_ \| [_SQLLiteral_](../classes/nodes.sqlliteral.md) |

**Returns:** _string_

Defined in: @sequeljs/ast/src/interfaces/Quoter.ts:10
