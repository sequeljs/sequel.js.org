[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Interfaces](../modules/interfaces.md) / TypeCaster

# Interface: TypeCaster

## Hierarchy

- **TypeCaster**

## Implemented by

- [_Table_](../classes/table.md)

## Index

### Methods

- [isAbleToTypeCast](interfaces.typecaster.md#isabletotypecast)
- [typeCastForDatabase](interfaces.typecaster.md#typecastfordatabase)

## Methods

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

**Returns:** _boolean_

Defined in:
[src/interfaces/TypeCaster.ts:6](https://github.com/sequeljs/ast/blob/6632050/src/interfaces/TypeCaster.ts#L6)

---

### typeCastForDatabase

▸ **typeCastForDatabase**(`attributeName`: _string_ \|
[_SQLLiteral_](../classes/nodes.sqlliteral.md), `value`:
[_Visitable_](../modules/visitors.md#visitable)): _string_ \| _number_

#### Parameters:

| Name            | Type                                                       |
| --------------- | ---------------------------------------------------------- |
| `attributeName` | _string_ \| [_SQLLiteral_](../classes/nodes.sqlliteral.md) |
| `value`         | [_Visitable_](../modules/visitors.md#visitable)            |

**Returns:** _string_ \| _number_

Defined in:
[src/interfaces/TypeCaster.ts:8](https://github.com/sequeljs/ast/blob/6632050/src/interfaces/TypeCaster.ts#L8)
