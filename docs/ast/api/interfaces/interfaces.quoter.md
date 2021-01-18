[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Interfaces](../modules/interfaces.md) / Quoter

# Interface: Quoter

[Interfaces](../modules/interfaces.md).Quoter

## Hierarchy

- **Quoter**

  ↳ [_Connection_](interfaces.connection.md)

## Table of contents

### Methods

- [quote](interfaces.quoter.md#quote)
- [quoteColumnName](interfaces.quoter.md#quotecolumnname)
- [quoteTableName](interfaces.quoter.md#quotetablename)

## Methods

### quote

▸ **quote**(`value`: [_Visitable_](../modules/visitors.md#visitable)): _string_
\| _number_

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `value` | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** _string_ \| _number_

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

Defined in:
[src/interfaces/Quoter.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/interfaces/Quoter.ts#L10)
