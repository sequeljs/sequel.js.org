---
id: 'interfaces.connection'
title: 'Interface: Connection'
sidebar_label: 'Connection'
hide_title: true
---

# Interface: Connection

[Interfaces](../modules/interfaces.md).Connection

## Hierarchy

- [_Quoter_](interfaces.quoter.md)

  ↳ **Connection**

## Properties

### inClauseLength

• **inClauseLength**: _null_ \| _number_

Defined in: @sequeljs/ast/src/interfaces/Connection.ts:6

---

### visitor

• **visitor**: _null_ \| [_Visitor_](../classes/visitors.visitor.md)

Defined in: @sequeljs/ast/src/interfaces/Connection.ts:8

## Methods

### quote

▸ **quote**(`value`: [_Visitable_](../modules/visitors.md#visitable)): _string_
\| _number_

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `value` | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** _string_ \| _number_

Inherited from: [Quoter](interfaces.quoter.md)

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

Inherited from: [Quoter](interfaces.quoter.md)

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

Inherited from: [Quoter](interfaces.quoter.md)

Defined in: @sequeljs/ast/src/interfaces/Quoter.ts:10

---

### sanitizeAsSQLComment

▸ **sanitizeAsSQLComment**(`value`: _any_): _string_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _string_

Defined in: @sequeljs/ast/src/interfaces/Connection.ts:10
