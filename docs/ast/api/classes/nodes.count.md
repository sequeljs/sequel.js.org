[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Nodes](../modules/nodes.md) / Count

# Class: Count

## Hierarchy

- [_SQLFunction_](nodes.sqlfunction.md)

  ↳ **Count**

## Index

### Constructors

- [constructor](nodes.count.md#constructor)

### Properties

- [alias](nodes.count.md#alias)
- [distinct](nodes.count.md#distinct)
- [expressions](nodes.count.md#expressions)

### Methods

- [add](nodes.count.md#add)
- [and](nodes.count.md#and)
- [as](nodes.count.md#as)
- [asc](nodes.count.md#asc)
- [average](nodes.count.md#average)
- [between](nodes.count.md#between)
- [bitwiseAnd](nodes.count.md#bitwiseand)
- [bitwiseNot](nodes.count.md#bitwisenot)
- [bitwiseOr](nodes.count.md#bitwiseor)
- [bitwiseShiftLeft](nodes.count.md#bitwiseshiftleft)
- [bitwiseShiftRight](nodes.count.md#bitwiseshiftright)
- [bitwiseXor](nodes.count.md#bitwisexor)
- [coalesce](nodes.count.md#coalesce)
- [concat](nodes.count.md#concat)
- [count](nodes.count.md#count)
- [createAnd](nodes.count.md#createand)
- [createFalse](nodes.count.md#createfalse)
- [createJoin](nodes.count.md#createjoin)
- [createOn](nodes.count.md#createon)
- [createStringJoin](nodes.count.md#createstringjoin)
- [createTableAlias](nodes.count.md#createtablealias)
- [createTrue](nodes.count.md#createtrue)
- [desc](nodes.count.md#desc)
- [divide](nodes.count.md#divide)
- [doesNotMatch](nodes.count.md#doesnotmatch)
- [doesNotMatchAll](nodes.count.md#doesnotmatchall)
- [doesNotMatchAny](nodes.count.md#doesnotmatchany)
- [doesNotMatchRegexp](nodes.count.md#doesnotmatchregexp)
- [eq](nodes.count.md#eq)
- [eqAll](nodes.count.md#eqall)
- [eqAny](nodes.count.md#eqany)
- [extract](nodes.count.md#extract)
- [grouping](nodes.count.md#grouping)
- [groupingAll](nodes.count.md#groupingall)
- [groupingAny](nodes.count.md#groupingany)
- [gt](nodes.count.md#gt)
- [gtAll](nodes.count.md#gtall)
- [gtAny](nodes.count.md#gtany)
- [gteq](nodes.count.md#gteq)
- [gteqAll](nodes.count.md#gteqall)
- [gteqAny](nodes.count.md#gteqany)
- [inAll](nodes.count.md#inall)
- [inAny](nodes.count.md#inany)
- [inVal](nodes.count.md#inval)
- [isDistinctFrom](nodes.count.md#isdistinctfrom)
- [isInfinity](nodes.count.md#isinfinity)
- [isNotDistinctFrom](nodes.count.md#isnotdistinctfrom)
- [isOpenEnded](nodes.count.md#isopenended)
- [isUnboundable](nodes.count.md#isunboundable)
- [lower](nodes.count.md#lower)
- [lt](nodes.count.md#lt)
- [ltAll](nodes.count.md#ltall)
- [ltAny](nodes.count.md#ltany)
- [lteq](nodes.count.md#lteq)
- [lteqAll](nodes.count.md#lteqall)
- [lteqAny](nodes.count.md#lteqany)
- [matches](nodes.count.md#matches)
- [matchesAll](nodes.count.md#matchesall)
- [matchesAny](nodes.count.md#matchesany)
- [matchesRegexp](nodes.count.md#matchesregexp)
- [maximum](nodes.count.md#maximum)
- [minimum](nodes.count.md#minimum)
- [multiply](nodes.count.md#multiply)
- [not](nodes.count.md#not)
- [notBetween](nodes.count.md#notbetween)
- [notEq](nodes.count.md#noteq)
- [notEqAll](nodes.count.md#noteqall)
- [notEqAny](nodes.count.md#noteqany)
- [notInAll](nodes.count.md#notinall)
- [notInAny](nodes.count.md#notinany)
- [notInVal](nodes.count.md#notinval)
- [or](nodes.count.md#or)
- [over](nodes.count.md#over)
- [quotedArray](nodes.count.md#quotedarray)
- [quotedNode](nodes.count.md#quotednode)
- [subtract](nodes.count.md#subtract)
- [sum](nodes.count.md#sum)
- [toSQL](nodes.count.md#tosql)
- [when](nodes.count.md#when)

## Constructors

### constructor

\+ **new Count**(`expr`: _any_, `distinct?`: _null_ \| _boolean_, `aliaz?`:
_any_): [_Count_](nodes.count.md)

#### Parameters:

| Name       | Type                | Default value |
| ---------- | ------------------- | ------------- |
| `expr`     | _any_               | -             |
| `distinct` | _null_ \| _boolean_ | false         |
| `aliaz`    | _any_               | null          |

**Returns:** [_Count_](nodes.count.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/nodes/Count.ts:3](https://github.com/sequeljs/ast/blob/6632050/src/nodes/Count.ts#L3)

## Properties

### alias

• **alias**: _null_ \| [_SQLLiteral_](nodes.sqlliteral.md)= null

Inherited from:
[SQLFunction](nodes.sqlfunction.md).[alias](nodes.sqlfunction.md#alias)

Defined in:
[src/nodes/SQLFunction.ts:7](https://github.com/sequeljs/ast/blob/6632050/src/nodes/SQLFunction.ts#L7)

---

### distinct

• **distinct**: _null_ \| _boolean_

Inherited from:
[SQLFunction](nodes.sqlfunction.md).[distinct](nodes.sqlfunction.md#distinct)

Defined in:
[src/nodes/SQLFunction.ts:9](https://github.com/sequeljs/ast/blob/6632050/src/nodes/SQLFunction.ts#L9)

---

### expressions

• **expressions**: _any_

Inherited from:
[SQLFunction](nodes.sqlfunction.md).[expressions](nodes.sqlfunction.md#expressions)

Defined in:
[src/nodes/SQLFunction.ts:11](https://github.com/sequeljs/ast/blob/6632050/src/nodes/SQLFunction.ts#L11)

## Methods

### add

▸ **add**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:14](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L14)

---

### and

▸ **and**(`right`: _any_): [_And_](nodes.and.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `right` | _any_ |

**Returns:** [_And_](nodes.and.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/NodeMethods.ts:11](https://github.com/sequeljs/ast/blob/6632050/src/mixins/NodeMethods.ts#L11)

---

### as

▸ **as**(`aliaz`: _any_): [_SQLFunction_](nodes.sqlfunction.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `aliaz` | _any_ |

**Returns:** [_SQLFunction_](nodes.sqlfunction.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/nodes/SQLFunction.ts:23](https://github.com/sequeljs/ast/blob/6632050/src/nodes/SQLFunction.ts#L23)

---

### asc

▸ **asc**(): [_Ascending_](nodes.ascending.md)

**Returns:** [_Ascending_](nodes.ascending.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/OrderPredications.ts:7](https://github.com/sequeljs/ast/blob/6632050/src/mixins/OrderPredications.ts#L7)

---

### average

▸ **average**(): [_Avg_](nodes.avg.md)

**Returns:** [_Avg_](nodes.avg.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Expressions.ts:9](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L9)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:257](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L257)

---

### bitwiseAnd

▸ **bitwiseAnd**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:18](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L18)

---

### bitwiseNot

▸ **bitwiseNot**(): [_BitwiseNot_](nodes.bitwisenot.md)

**Returns:** [_BitwiseNot_](nodes.bitwisenot.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:22](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L22)

---

### bitwiseOr

▸ **bitwiseOr**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:26](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L26)

---

### bitwiseShiftLeft

▸ **bitwiseShiftLeft**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:30](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L30)

---

### bitwiseShiftRight

▸ **bitwiseShiftRight**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:34](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L34)

---

### bitwiseXor

▸ **bitwiseXor**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:38](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L38)

---

### coalesce

▸ **coalesce**(...`exprs`: _any_[]):
[_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name       | Type    |
| ---------- | ------- |
| `...exprs` | _any_[] |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:22](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L22)

---

### concat

▸ **concat**(`other`: _any_): [_Concat_](nodes.concat.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Concat_](nodes.concat.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/ConcatPredication.ts:4](https://github.com/sequeljs/ast/blob/6632050/src/mixins/ConcatPredication.ts#L4)

---

### count

▸ **count**(`distinct?`: _boolean_): [_Count_](nodes.count.md)

#### Parameters:

| Name       | Type      | Default value |
| ---------- | --------- | ------------- |
| `distinct` | _boolean_ | false         |

**Returns:** [_Count_](nodes.count.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Expressions.ts:13](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L13)

---

### createAnd

▸ **createAnd**(`clauses`: _any_[]): [_And_](nodes.and.md)

#### Parameters:

| Name      | Type    |
| --------- | ------- |
| `clauses` | _any_[] |

**Returns:** [_And_](nodes.and.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:26](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L26)

---

### createFalse

▸ **createFalse**(): [_False_](nodes.false.md)

**Returns:** [_False_](nodes.false.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:30](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L30)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:34](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L34)

▸ **createJoin**(`to`: _null_ \| _string_ \| [_Table_](table.md) \|
[_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md),
`constraint`: _any_): [_InnerJoin_](nodes.innerjoin.md)

#### Parameters:

| Name         | Type                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `to`         | _null_ \| _string_ \| [_Table_](table.md) \| [_TableAlias_](nodes.tablealias.md) \| [_SQLLiteral_](nodes.sqlliteral.md) |
| `constraint` | _any_                                                                                                                   |

**Returns:** [_InnerJoin_](nodes.innerjoin.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:35](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L35)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:39](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L39)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:44](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L44)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:49](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L49)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:54](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L54)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:59](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L59)

---

### createOn

▸ **createOn**(`expr`: _any_): [_On_](nodes.on.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_On_](nodes.on.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:72](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L72)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:76](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L76)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:80](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L80)

---

### createTrue

▸ **createTrue**(): [_True_](nodes.true.md)

**Returns:** [_True_](nodes.true.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:87](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L87)

---

### desc

▸ **desc**(): [_Descending_](nodes.descending.md)

**Returns:** [_Descending_](nodes.descending.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/OrderPredications.ts:11](https://github.com/sequeljs/ast/blob/6632050/src/mixins/OrderPredications.ts#L11)

---

### divide

▸ **divide**(`other`: _any_): [_Division_](nodes.division.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Division_](nodes.division.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:42](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L42)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:57](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L57)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:65](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L65)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:78](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L78)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:91](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L91)

---

### eq

▸ **eq**(`other`: _any_): [_Equality_](nodes.equality.md)<_any_, _any_\>

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Equality_](nodes.equality.md)<_any_, _any_\>

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:95](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L95)

---

### eqAll

▸ **eqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:99](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L99)

---

### eqAny

▸ **eqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:103](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L103)

---

### extract

▸ **extract**(`field`: _any_): [_Extract_](nodes.extract.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `field` | _any_ |

**Returns:** [_Extract_](nodes.extract.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Expressions.ts:17](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L17)

---

### grouping

▸ **grouping**(`expr`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name   | Type  |
| ------ | ----- |
| `expr` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:91](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L91)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:25](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L25)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:35](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L35)

---

### gt

▸ **gt**(`other`: _any_): [_GreaterThan_](nodes.greaterthan.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_GreaterThan_](nodes.greaterthan.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:107](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L107)

---

### gtAll

▸ **gtAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:111](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L111)

---

### gtAny

▸ **gtAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:115](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L115)

---

### gteq

▸ **gteq**(`other`: _any_): [_GreaterThanOrEqual_](nodes.greaterthanorequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_GreaterThanOrEqual_](nodes.greaterthanorequal.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:119](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L119)

---

### gteqAll

▸ **gteqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:123](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L123)

---

### gteqAny

▸ **gteqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:127](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L127)

---

### inAll

▸ **inAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:143](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L143)

---

### inAny

▸ **inAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:147](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L147)

---

### inVal

▸ **inVal**(`other`: _any_): [_In_](nodes.in.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_In_](nodes.in.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:131](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L131)

---

### isDistinctFrom

▸ **isDistinctFrom**(`other`: _any_):
[_IsDistinctFrom_](nodes.isdistinctfrom.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_IsDistinctFrom_](nodes.isdistinctfrom.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:155](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L155)

---

### isInfinity

▸ `Protected`**isInfinity**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:45](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L45)

---

### isNotDistinctFrom

▸ **isNotDistinctFrom**(`other`: _any_):
[_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_IsNotDistinctFrom_](nodes.isnotdistinctfrom.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:151](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L151)

---

### isOpenEnded

▸ `Protected`**isOpenEnded**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:49](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L49)

---

### isUnboundable

▸ `Protected`**isUnboundable**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:53](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L53)

---

### lower

▸ **lower**(`column`: _any_): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

#### Parameters:

| Name     | Type  |
| -------- | ----- |
| `column` | _any_ |

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/FactoryMethods.ts:95](https://github.com/sequeljs/ast/blob/6632050/src/mixins/FactoryMethods.ts#L95)

---

### lt

▸ **lt**(`other`: _any_): [_LessThan_](nodes.lessthan.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_LessThan_](nodes.lessthan.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:159](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L159)

---

### ltAll

▸ **ltAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:163](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L163)

---

### ltAny

▸ **ltAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:167](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L167)

---

### lteq

▸ **lteq**(`other`: _any_): [_LessThanOrEqual_](nodes.lessthanorequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_LessThanOrEqual_](nodes.lessthanorequal.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:171](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L171)

---

### lteqAll

▸ **lteqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:175](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L175)

---

### lteqAny

▸ **lteqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:179](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L179)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:183](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L183)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:187](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L187)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:200](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L200)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:213](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L213)

---

### maximum

▸ **maximum**(): [_Max_](nodes.max.md)

**Returns:** [_Max_](nodes.max.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Expressions.ts:21](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L21)

---

### minimum

▸ **minimum**(): [_Min_](nodes.min.md)

**Returns:** [_Min_](nodes.min.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Expressions.ts:25](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L25)

---

### multiply

▸ **multiply**(`other`: _any_): [_Multiplication_](nodes.multiplication.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Multiplication_](nodes.multiplication.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:46](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L46)

---

### not

▸ **not**(): [_Not_](nodes.not.md)

**Returns:** [_Not_](nodes.not.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/NodeMethods.ts:15](https://github.com/sequeljs/ast/blob/6632050/src/mixins/NodeMethods.ts#L15)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:292](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L292)

---

### notEq

▸ **notEq**(`other`: _any_): [_NotEqual_](nodes.notequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_NotEqual_](nodes.notequal.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:217](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L217)

---

### notEqAll

▸ **notEqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:221](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L221)

---

### notEqAny

▸ **notEqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:225](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L225)

---

### notInAll

▸ **notInAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:241](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L241)

---

### notInAny

▸ **notInAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:245](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L245)

---

### notInVal

▸ **notInVal**(`other`: _any_): [_NotIn_](nodes.notin.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_NotIn_](nodes.notin.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:229](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L229)

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

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/NodeMethods.ts:19](https://github.com/sequeljs/ast/blob/6632050/src/mixins/NodeMethods.ts#L19)

---

### over

▸ **over**(`expr?`: _null_ \| _string_ \| [_SQLLiteral_](nodes.sqlliteral.md) \|
[_Node_](nodes.node.md)): [_Over_](nodes.over.md)

#### Parameters:

| Name   | Type                                                                                 | Default value |
| ------ | ------------------------------------------------------------------------------------ | ------------- |
| `expr` | _null_ \| _string_ \| [_SQLLiteral_](nodes.sqlliteral.md) \| [_Node_](nodes.node.md) | null          |

**Returns:** [_Over_](nodes.over.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/WindowPredication.ts:6](https://github.com/sequeljs/ast/blob/6632050/src/mixins/WindowPredication.ts#L6)

---

### quotedArray

▸ **quotedArray**(`others`: _any_[]): _any_[]

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** _any_[]

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:253](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L253)

---

### quotedNode

▸ **quotedNode**(`other`: _any_): _any_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** _any_

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Predications.ts:249](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L249)

---

### subtract

▸ **subtract**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Math.ts:50](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L50)

---

### sum

▸ **sum**(): [_Sum_](nodes.sum.md)

**Returns:** [_Sum_](nodes.sum.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/Expressions.ts:29](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L29)

---

### toSQL

▸ **toSQL**(`engine?`: _null_ \|
[_Engine_](../interfaces/interfaces.engine.md)): _any_

#### Parameters:

| Name     | Type                                                     | Default value |
| -------- | -------------------------------------------------------- | ------------- |
| `engine` | _null_ \| [_Engine_](../interfaces/interfaces.engine.md) | ...           |

**Returns:** _any_

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/nodes/Node.ts:16](https://github.com/sequeljs/ast/blob/6632050/src/nodes/Node.ts#L16)

---

### when

▸ **when**(`other`: _any_): [_Case_](nodes.case.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Case_](nodes.case.md)

Inherited from: [SQLFunction](nodes.sqlfunction.md)

Defined in:
[src/mixins/WhenPredication.ts:5](https://github.com/sequeljs/ast/blob/6632050/src/mixins/WhenPredication.ts#L5)
