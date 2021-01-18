[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Nodes](../modules/nodes.md) / Ascending

# Class: Ascending

[Nodes](../modules/nodes.md).Ascending

## Hierarchy

- [_Ordering_](nodes.ordering.md)

- _ReversionPredication_

  ↳ **Ascending**

## Table of contents

### Constructors

- [constructor](nodes.ascending.md#constructor)

### Properties

- [direction](nodes.ascending.md#direction)
- [expr](nodes.ascending.md#expr)
- [isAscending](nodes.ascending.md#isascending)
- [isDescending](nodes.ascending.md#isdescending)

### Accessors

- [value](nodes.ascending.md#value)

### Methods

- [add](nodes.ascending.md#add)
- [and](nodes.ascending.md#and)
- [as](nodes.ascending.md#as)
- [asc](nodes.ascending.md#asc)
- [average](nodes.ascending.md#average)
- [between](nodes.ascending.md#between)
- [bitwiseAnd](nodes.ascending.md#bitwiseand)
- [bitwiseNot](nodes.ascending.md#bitwisenot)
- [bitwiseOr](nodes.ascending.md#bitwiseor)
- [bitwiseShiftLeft](nodes.ascending.md#bitwiseshiftleft)
- [bitwiseShiftRight](nodes.ascending.md#bitwiseshiftright)
- [bitwiseXor](nodes.ascending.md#bitwisexor)
- [coalesce](nodes.ascending.md#coalesce)
- [concat](nodes.ascending.md#concat)
- [count](nodes.ascending.md#count)
- [createAnd](nodes.ascending.md#createand)
- [createFalse](nodes.ascending.md#createfalse)
- [createJoin](nodes.ascending.md#createjoin)
- [createOn](nodes.ascending.md#createon)
- [createStringJoin](nodes.ascending.md#createstringjoin)
- [createTableAlias](nodes.ascending.md#createtablealias)
- [createTrue](nodes.ascending.md#createtrue)
- [desc](nodes.ascending.md#desc)
- [divide](nodes.ascending.md#divide)
- [doesNotMatch](nodes.ascending.md#doesnotmatch)
- [doesNotMatchAll](nodes.ascending.md#doesnotmatchall)
- [doesNotMatchAny](nodes.ascending.md#doesnotmatchany)
- [doesNotMatchRegexp](nodes.ascending.md#doesnotmatchregexp)
- [eq](nodes.ascending.md#eq)
- [eqAll](nodes.ascending.md#eqall)
- [eqAny](nodes.ascending.md#eqany)
- [extract](nodes.ascending.md#extract)
- [grouping](nodes.ascending.md#grouping)
- [groupingAll](nodes.ascending.md#groupingall)
- [groupingAny](nodes.ascending.md#groupingany)
- [gt](nodes.ascending.md#gt)
- [gtAll](nodes.ascending.md#gtall)
- [gtAny](nodes.ascending.md#gtany)
- [gteq](nodes.ascending.md#gteq)
- [gteqAll](nodes.ascending.md#gteqall)
- [gteqAny](nodes.ascending.md#gteqany)
- [inAll](nodes.ascending.md#inall)
- [inAny](nodes.ascending.md#inany)
- [inVal](nodes.ascending.md#inval)
- [isDistinctFrom](nodes.ascending.md#isdistinctfrom)
- [isInfinity](nodes.ascending.md#isinfinity)
- [isNotDistinctFrom](nodes.ascending.md#isnotdistinctfrom)
- [isOpenEnded](nodes.ascending.md#isopenended)
- [isUnboundable](nodes.ascending.md#isunboundable)
- [lower](nodes.ascending.md#lower)
- [lt](nodes.ascending.md#lt)
- [ltAll](nodes.ascending.md#ltall)
- [ltAny](nodes.ascending.md#ltany)
- [lteq](nodes.ascending.md#lteq)
- [lteqAll](nodes.ascending.md#lteqall)
- [lteqAny](nodes.ascending.md#lteqany)
- [matches](nodes.ascending.md#matches)
- [matchesAll](nodes.ascending.md#matchesall)
- [matchesAny](nodes.ascending.md#matchesany)
- [matchesRegexp](nodes.ascending.md#matchesregexp)
- [maximum](nodes.ascending.md#maximum)
- [minimum](nodes.ascending.md#minimum)
- [multiply](nodes.ascending.md#multiply)
- [not](nodes.ascending.md#not)
- [notBetween](nodes.ascending.md#notbetween)
- [notEq](nodes.ascending.md#noteq)
- [notEqAll](nodes.ascending.md#noteqall)
- [notEqAny](nodes.ascending.md#noteqany)
- [notInAll](nodes.ascending.md#notinall)
- [notInAny](nodes.ascending.md#notinany)
- [notInVal](nodes.ascending.md#notinval)
- [nullsFirst](nodes.ascending.md#nullsfirst)
- [nullsLast](nodes.ascending.md#nullslast)
- [or](nodes.ascending.md#or)
- [quotedArray](nodes.ascending.md#quotedarray)
- [quotedNode](nodes.ascending.md#quotednode)
- [reverse](nodes.ascending.md#reverse)
- [subtract](nodes.ascending.md#subtract)
- [sum](nodes.ascending.md#sum)
- [toSQL](nodes.ascending.md#tosql)
- [when](nodes.ascending.md#when)

## Constructors

### constructor

\+ **new Ascending**(`expr`: [_Visitable_](../modules/visitors.md#visitable)):
[_Ascending_](nodes.ascending.md)

#### Parameters:

| Name   | Type                                            |
| ------ | ----------------------------------------------- |
| `expr` | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** [_Ascending_](nodes.ascending.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/nodes/Unary.ts:12](https://github.com/sequeljs/ast/blob/8de61b1/src/nodes/Unary.ts#L12)

## Properties

### direction

• `Readonly` **direction**: _asc_= 'asc'

Defined in:
[src/nodes/Ascending.ts:6](https://github.com/sequeljs/ast/blob/8de61b1/src/nodes/Ascending.ts#L6)

---

### expr

• **expr**: [_Visitable_](../modules/visitors.md#visitable)

Inherited from: [Ordering](nodes.ordering.md).[expr](nodes.ordering.md#expr)

Defined in:
[src/nodes/Unary.ts:8](https://github.com/sequeljs/ast/blob/8de61b1/src/nodes/Unary.ts#L8)

---

### isAscending

• `Readonly` **isAscending**: _true_= true

Defined in:
[src/nodes/Ascending.ts:8](https://github.com/sequeljs/ast/blob/8de61b1/src/nodes/Ascending.ts#L8)

---

### isDescending

• `Readonly` **isDescending**: _false_= false

Defined in:
[src/nodes/Ascending.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/nodes/Ascending.ts#L10)

## Accessors

### value

• **value**(): T

**Returns:** T

Defined in:
[src/nodes/Unary.ts:10](https://github.com/sequeljs/ast/blob/8de61b1/src/nodes/Unary.ts#L10)

## Methods

### add

▸ **add**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:14](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L14)

---

### and

▸ **and**(`right`: _any_): [_And_](nodes.and.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `right` | _any_ |

**Returns:** [_And_](nodes.and.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/NodeMethods.ts:11](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/NodeMethods.ts#L11)

---

### as

▸ **as**(`other`: _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_As_](nodes.as.md)

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `other` | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_As_](nodes.as.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/AliasPredication.ts:5](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/AliasPredication.ts#L5)

---

### asc

▸ **asc**(): [_Ascending_](nodes.ascending.md)

**Returns:** [_Ascending_](nodes.ascending.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/OrderPredications.ts:7](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/OrderPredications.ts#L7)

---

### average

▸ **average**(): [_Avg_](nodes.avg.md)

**Returns:** [_Avg_](nodes.avg.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Expressions.ts:9](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Expressions.ts#L9)

---

### between

▸ **between**(`begin`: _number_ \| [_BindParam_](nodes.bindparam.md) \|
[_Quoted_](nodes.quoted.md), `end`: _number_ \|
[_BindParam_](nodes.bindparam.md) \| [_Quoted_](nodes.quoted.md), `inclusive?`:
_boolean_): [_GreaterThanOrEqual_](nodes.greaterthanorequal.md) \|
[_LessThan_](nodes.lessthan.md) \| [_LessThanOrEqual_](nodes.lessthanorequal.md)
\| [_NotIn_](nodes.notin.md) \| [_And_](nodes.and.md) \|
[_Between_](nodes.between.md)

#### Parameters:

| Name        | Type                                                                         | Default value |
| ----------- | ---------------------------------------------------------------------------- | ------------- |
| `begin`     | _number_ \| [_BindParam_](nodes.bindparam.md) \| [_Quoted_](nodes.quoted.md) | -             |
| `end`       | _number_ \| [_BindParam_](nodes.bindparam.md) \| [_Quoted_](nodes.quoted.md) | -             |
| `inclusive` | _boolean_                                                                    | true          |

**Returns:** [_GreaterThanOrEqual_](nodes.greaterthanorequal.md) \|
[_LessThan_](nodes.lessthan.md) \| [_LessThanOrEqual_](nodes.lessthanorequal.md)
\| [_NotIn_](nodes.notin.md) \| [_And_](nodes.and.md) \|
[_Between_](nodes.between.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:257](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L257)

---

### bitwiseAnd

▸ **bitwiseAnd**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:18](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L18)

---

### bitwiseNot

▸ **bitwiseNot**(): [_BitwiseNot_](nodes.bitwisenot.md)

**Returns:** [_BitwiseNot_](nodes.bitwisenot.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:22](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L22)

---

### bitwiseOr

▸ **bitwiseOr**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:26](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L26)

---

### bitwiseShiftLeft

▸ **bitwiseShiftLeft**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:30](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L30)

---

### bitwiseShiftRight

▸ **bitwiseShiftRight**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:34](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L34)

---

### bitwiseXor

▸ **bitwiseXor**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:38](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L38)

---

### coalesce

▸ **coalesce**(...`exprs`: _any_[]):
[_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `...exprs` | _any_[] |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:22](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L22)

---

### concat

▸ **concat**(`other`: _any_): [_Concat_](nodes.concat.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Concat_](nodes.concat.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/ConcatPredication.ts:4](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/ConcatPredication.ts#L4)

---

### count

▸ **count**(`distinct?`: _boolean_): [_Count_](nodes.count.md)

#### Parameters:

| Name       | Type      | Default value |
| ---------- | --------- | ------------- |
| `distinct` | _boolean_ | false         |

**Returns:** [_Count_](nodes.count.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Expressions.ts:13](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Expressions.ts#L13)

---

### createAnd

▸ **createAnd**(`clauses`: _any_[]): [_And_](nodes.and.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `clauses` | _any_[] |

**Returns:** [_And_](nodes.and.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:26](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L26)

---

### createFalse

▸ **createFalse**(): [_False_](nodes.false.md)

**Returns:** [_False_](nodes.false.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:30](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L30)

---

### createJoin

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name | Type                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- |
| `to` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:34](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L34)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_): [_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:35](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L35)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_
[_FullOuterJoin_](nodes.fullouterjoin.md)):
[_FullOuterJoin_](nodes.fullouterjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_FullOuterJoin_](nodes.fullouterjoin.md)                                                                      |

**Returns:** [_FullOuterJoin_](nodes.fullouterjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:39](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L39)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_InnerJoin_](nodes.innerjoin.md)):
[_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_InnerJoin_](nodes.innerjoin.md)                                                                              |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:44](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L44)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_OuterJoin_](nodes.outerjoin.md)):
[_OuterJoin_](nodes.outerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_OuterJoin_](nodes.outerjoin.md)                                                                              |

**Returns:** [_OuterJoin_](nodes.outerjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:49](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L49)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_
[_RightOuterJoin_](nodes.rightouterjoin.md)):
[_RightOuterJoin_](nodes.rightouterjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_RightOuterJoin_](nodes.rightouterjoin.md)                                                                    |

**Returns:** [_RightOuterJoin_](nodes.rightouterjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:54](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L54)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_, `Klass`: _typeof_ [_StringJoin_](nodes.stringjoin.md)):
[_StringJoin_](nodes.stringjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |
| `Klass`      | _typeof_ [_StringJoin_](nodes.stringjoin.md)                                                                            |

**Returns:** [_StringJoin_](nodes.stringjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:59](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L59)

---

### createOn

▸ **createOn**(`expr`: _any_): [_On_](nodes.on.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_On_](nodes.on.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:72](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L72)

---

### createStringJoin

▸ **createStringJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_StringJoin_](nodes.stringjoin.md)

#### Parameters:

| Name | Type                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- |
| `to` | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_StringJoin_](nodes.stringjoin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:76](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L76)

---

### createTableAlias

▸ **createTableAlias**(`relation`: [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_Grouping_](nodes.grouping.md), `name`:
_string_ \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_TableAlias_](nodes.tablealias.md)

#### Parameters:

| Name       | Type                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------- |
| `relation` | [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_Grouping_](nodes.grouping.md) |
| `name`     | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)                                               |

**Returns:** [_TableAlias_](nodes.tablealias.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:80](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L80)

---

### createTrue

▸ **createTrue**(): [_True_](nodes.true.md)

**Returns:** [_True_](nodes.true.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:87](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L87)

---

### desc

▸ **desc**(): [_Descending_](nodes.descending.md)

**Returns:** [_Descending_](nodes.descending.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/OrderPredications.ts:11](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/OrderPredications.ts#L11)

---

### divide

▸ **divide**(`other`: _any_): [_Division_](nodes.division.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Division_](nodes.division.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:42](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L42)

---

### doesNotMatch

▸ **doesNotMatch**(`other`: _any_, `escape?`: _any_, `caseSensitive?`:
_boolean_): [_DoesNotMatch_](nodes.doesnotmatch.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `other`         | _any_     | -             |
| `escape`        | _any_     | null          |
| `caseSensitive` | _boolean_ | false         |

**Returns:** [_DoesNotMatch_](nodes.doesnotmatch.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:57](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L57)

---

### doesNotMatchAll

▸ **doesNotMatchAll**(`others`: _any_, `escape?`: _any_, `caseSensitive?`:
_boolean_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `others`        | _any_     | -             |
| `escape`        | _any_     | null          |
| `caseSensitive` | _boolean_ | false         |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:65](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L65)

---

### doesNotMatchAny

▸ **doesNotMatchAny**(`others`: _any_, `escape?`: _any_, `caseSensitive?`:
_boolean_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `others`        | _any_     | -             |
| `escape`        | _any_     | null          |
| `caseSensitive` | _boolean_ | false         |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:78](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L78)

---

### doesNotMatchRegexp

▸ **doesNotMatchRegexp**(`other`: _any_, `caseSensitive?`: _boolean_):
[_NotRegexp_](nodes.notregexp.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `other`         | _any_     | -             |
| `caseSensitive` | _boolean_ | true          |

**Returns:** [_NotRegexp_](nodes.notregexp.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:91](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L91)

---

### eq

▸ **eq**(`other`: _any_): [_Equality_](nodes.equality.md)<_any_, _any_\>

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Equality_](nodes.equality.md)<_any_, _any_\>

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:95](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L95)

---

### eqAll

▸ **eqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:99](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L99)

---

### eqAny

▸ **eqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:103](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L103)

---

### extract

▸ **extract**(`field`: _any_): [_Extract_](nodes.extract.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `field` | _any_ |

**Returns:** [_Extract_](nodes.extract.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Expressions.ts:17](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Expressions.ts#L17)

---

### grouping

▸ **grouping**(`expr`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:91](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L91)

---

### groupingAll

▸ `Protected`**groupingAll**(`method`: (`expr`: _any_, ...`extras`: _any_[]) =>
_any_, `others`: _any_[], ...`extras`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name        | Type                                           |
| ----------- | ---------------------------------------------- |
| `method`    | (`expr`: _any_, ...`extras`: _any_[]) => _any_ |
| `others`    | _any_[]                                        |
| `...extras` | _any_[]                                        |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:25](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L25)

---

### groupingAny

▸ `Protected`**groupingAny**(`method`: (`expr`: _any_, ...`extras`: _any_[]) =>
_any_, `others`: _any_[], ...`extras`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name        | Type                                           |
| ----------- | ---------------------------------------------- |
| `method`    | (`expr`: _any_, ...`extras`: _any_[]) => _any_ |
| `others`    | _any_[]                                        |
| `...extras` | _any_[]                                        |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:35](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L35)

---

### gt

▸ **gt**(`other`: _any_): [_GreaterThan_](nodes.greaterthan.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_GreaterThan_](nodes.greaterthan.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:107](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L107)

---

### gtAll

▸ **gtAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:111](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L111)

---

### gtAny

▸ **gtAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:115](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L115)

---

### gteq

▸ **gteq**(`other`: _any_): [_GreaterThanOrEqual_](nodes.greaterthanorequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_GreaterThanOrEqual_](nodes.greaterthanorequal.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:119](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L119)

---

### gteqAll

▸ **gteqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:123](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L123)

---

### gteqAny

▸ **gteqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:127](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L127)

---

### inAll

▸ **inAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:143](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L143)

---

### inAny

▸ **inAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:147](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L147)

---

### inVal

▸ **inVal**(`other`: _any_): [_In_](nodes.in.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_In_](nodes.in.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:131](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L131)

---

### isDistinctFrom

▸ **isDistinctFrom**(`other`: _any_):
[_IsDistinctFrom_](nodes.isdistinctfrom.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_IsDistinctFrom_](nodes.isdistinctfrom.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:155](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L155)

---

### isInfinity

▸ `Protected`**isInfinity**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:45](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L45)

---

### isNotDistinctFrom

▸ **isNotDistinctFrom**(`other`: _any_):
[_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:151](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L151)

---

### isOpenEnded

▸ `Protected`**isOpenEnded**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:49](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L49)

---

### isUnboundable

▸ `Protected`**isUnboundable**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:53](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L53)

---

### lower

▸ **lower**(`column`: _any_): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `column` | _any_ |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/FactoryMethods.ts:95](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/FactoryMethods.ts#L95)

---

### lt

▸ **lt**(`other`: _any_): [_LessThan_](nodes.lessthan.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_LessThan_](nodes.lessthan.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:159](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L159)

---

### ltAll

▸ **ltAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:163](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L163)

---

### ltAny

▸ **ltAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:167](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L167)

---

### lteq

▸ **lteq**(`other`: _any_): [_LessThanOrEqual_](nodes.lessthanorequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_LessThanOrEqual_](nodes.lessthanorequal.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:171](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L171)

---

### lteqAll

▸ **lteqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:175](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L175)

---

### lteqAny

▸ **lteqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:179](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L179)

---

### matches

▸ **matches**(`other`: _any_, `escape?`: _any_, `caseSensitive?`: _boolean_):
[_Matches_](nodes.matches.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `other`         | _any_     | -             |
| `escape`        | _any_     | null          |
| `caseSensitive` | _boolean_ | false         |

**Returns:** [_Matches_](nodes.matches.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:183](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L183)

---

### matchesAll

▸ **matchesAll**(`others`: _any_[], `escape?`: _any_, `caseSensitive?`:
_boolean_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `others`        | _any_[]   | -             |
| `escape`        | _any_     | null          |
| `caseSensitive` | _boolean_ | false         |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:187](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L187)

---

### matchesAny

▸ **matchesAny**(`others`: _any_[], `escape?`: _any_, `caseSensitive?`:
_boolean_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `others`        | _any_[]   | -             |
| `escape`        | _any_     | null          |
| `caseSensitive` | _boolean_ | false         |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:200](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L200)

---

### matchesRegexp

▸ **matchesRegexp**(`other`: _any_, `caseSensitive?`: _boolean_):
[_Regexp_](nodes.regexp.md)

#### Parameters:

| Name            | Type      | Default value |
| --------------- | --------- | ------------- |
| `other`         | _any_     | -             |
| `caseSensitive` | _boolean_ | true          |

**Returns:** [_Regexp_](nodes.regexp.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:213](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L213)

---

### maximum

▸ **maximum**(): [_Max_](nodes.max.md)

**Returns:** [_Max_](nodes.max.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Expressions.ts:21](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Expressions.ts#L21)

---

### minimum

▸ **minimum**(): [_Min_](nodes.min.md)

**Returns:** [_Min_](nodes.min.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Expressions.ts:25](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Expressions.ts#L25)

---

### multiply

▸ **multiply**(`other`: _any_): [_Multiplication_](nodes.multiplication.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Multiplication_](nodes.multiplication.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:46](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L46)

---

### not

▸ **not**(): [_Not_](nodes.not.md)

**Returns:** [_Not_](nodes.not.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/NodeMethods.ts:15](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/NodeMethods.ts#L15)

---

### notBetween

▸ **notBetween**(`begin`: _number_ \| [_BindParam_](nodes.bindparam.md) \|
[_Quoted_](nodes.quoted.md), `end`: _number_ \|
[_BindParam_](nodes.bindparam.md) \| [_Quoted_](nodes.quoted.md), `inclusive?`:
_boolean_): [_Grouping_](nodes.grouping.md) \|
[_GreaterThan_](nodes.greaterthan.md) \|
[_GreaterThanOrEqual_](nodes.greaterthanorequal.md) \| [_In_](nodes.in.md) \|
[_LessThan_](nodes.lessthan.md)

#### Parameters:

| Name        | Type                                                                         | Default value |
| ----------- | ---------------------------------------------------------------------------- | ------------- |
| `begin`     | _number_ \| [_BindParam_](nodes.bindparam.md) \| [_Quoted_](nodes.quoted.md) | -             |
| `end`       | _number_ \| [_BindParam_](nodes.bindparam.md) \| [_Quoted_](nodes.quoted.md) | -             |
| `inclusive` | _boolean_                                                                    | true          |

**Returns:** [_Grouping_](nodes.grouping.md) \|
[_GreaterThan_](nodes.greaterthan.md) \|
[_GreaterThanOrEqual_](nodes.greaterthanorequal.md) \| [_In_](nodes.in.md) \|
[_LessThan_](nodes.lessthan.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:292](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L292)

---

### notEq

▸ **notEq**(`other`: _any_): [_NotEqual_](nodes.notequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_NotEqual_](nodes.notequal.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:217](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L217)

---

### notEqAll

▸ **notEqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:221](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L221)

---

### notEqAny

▸ **notEqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:225](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L225)

---

### notInAll

▸ **notInAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:241](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L241)

---

### notInAny

▸ **notInAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:245](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L245)

---

### notInVal

▸ **notInVal**(`other`: _any_): [_NotIn_](nodes.notin.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_NotIn_](nodes.notin.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:229](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L229)

---

### nullsFirst

▸ **nullsFirst**(): _default_

**Returns:** _default_

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/NullsFirstPredication.ts:6](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/NullsFirstPredication.ts#L6)

---

### nullsLast

▸ **nullsLast**(): _default_

**Returns:** _default_

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/NullsLastPredication.ts:6](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/NullsLastPredication.ts#L6)

---

### or

▸ **or**<T\>(`right`: T): [_Grouping_](nodes.grouping.md)

#### Type parameters:

| Name | Type                                            |
| ---- | ----------------------------------------------- |
| `T`  | [_Visitable_](../modules/visitors.md#visitable) |

#### Parameters:

| Name    | Type |
| ------- | ---- |
| `right` | T    |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/NodeMethods.ts:19](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/NodeMethods.ts#L19)

---

### quotedArray

▸ **quotedArray**(`others`: _any_[]): _any_[]

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** _any_[]

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:253](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L253)

---

### quotedNode

▸ **quotedNode**(`other`: _any_): _any_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** _any_

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Predications.ts:249](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Predications.ts#L249)

---

### reverse

▸ **reverse**(): [_Descending_](nodes.descending.md)

**Returns:** [_Descending_](nodes.descending.md)

Defined in:
[src/mixins/ReversionPredication.ts:5](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/ReversionPredication.ts#L5)

▸ **reverse**(): [_Ascending_](nodes.ascending.md)

**Returns:** [_Ascending_](nodes.ascending.md)

Defined in:
[src/mixins/ReversionPredication.ts:6](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/ReversionPredication.ts#L6)

---

### subtract

▸ **subtract**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Math.ts:50](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Math.ts#L50)

---

### sum

▸ **sum**(): [_Sum_](nodes.sum.md)

**Returns:** [_Sum_](nodes.sum.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/Expressions.ts:29](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/Expressions.ts#L29)

---

### toSQL

▸ **toSQL**(`engine?`: _null_ \|
[_Engine_](../interfaces/interfaces.engine.md)): _any_

#### Parameters:

| Name     | Type                                                     | Default value |
| -------- | -------------------------------------------------------- | ------------- |
| `engine` | _null_ \| [_Engine_](../interfaces/interfaces.engine.md) | ...           |

**Returns:** _any_

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/nodes/Node.ts:16](https://github.com/sequeljs/ast/blob/8de61b1/src/nodes/Node.ts#L16)

---

### when

▸ **when**(`other`: _any_): [_Case_](nodes.case.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Case_](nodes.case.md)

Inherited from: [Ordering](nodes.ordering.md)

Defined in:
[src/mixins/WhenPredication.ts:5](https://github.com/sequeljs/ast/blob/8de61b1/src/mixins/WhenPredication.ts#L5)
