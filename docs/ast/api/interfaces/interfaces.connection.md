[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Interfaces](../modules/interfaces.md) / Connection

# Interface: Connection

[Interfaces](../modules/interfaces.md).Connection

## Hierarchy

- [_Quoter_](interfaces.quoter.md)

  ↳ **Connection**

## Table of contents

### Properties

- [inClauseLength](interfaces.connection.md#inclauselength)
- [visitor](interfaces.connection.md#visitor)

### Methods

- [quote](interfaces.connection.md#quote)
- [quoteColumnName](interfaces.connection.md#quotecolumnname)
- [quoteTableName](interfaces.connection.md#quotetablename)
- [sanitizeAsSQLComment](interfaces.connection.md#sanitizeassqlcomment)

## Properties

### inClauseLength

• **inClauseLength**: _null_ \| _number_

Defined in:
[src/interfaces/Connection.ts:6](https://github.com/sequeljs/ast/blob/8de61b1/src/interfaces/Connection.ts#L6)

---

### visitor

• **visitor**: _null_ \| [_Visitor_](../classes/visitors.visitor.md)

Defined in:
[src/interfaces/Connection.ts:8](https://github.com/sequeljs/ast/blob/8de61b1/src/interfaces/Connection.ts#L8)

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

Defined in:
[src/interfaces/Quoter.ts:6](https://github.com/sequeljs/ast/blob/8de61b1/src/interfaces/Quoter.ts#L6)

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

Defined in:
[src/interfaces/Quoter.ts:8](https://github.com/sequeljs/ast/blob/8de61b1/src/interfaces/Quoter.ts#L8)

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

Defined in:
[src/interfaces/Quoter.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/interfaces/Quoter.ts#L10)

---

### sanitizeAsSQLComment

▸ **sanitizeAsSQLComment**(`value`: _any_): _string_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _string_

Defined in:
[src/interfaces/Connection.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/interfaces/Connection.ts#L10)
