[@sequeljs/ast](../README.md) / [Exports](../modules.md) /
[Attributes](../modules/attributes.md) / Integer

# Class: Integer

## Hierarchy

- [_Attribute_](attributes.attribute.md)

  ↳ **Integer**

## Index

### Constructors

- [constructor](attributes.integer.md#constructor)

### Properties

- [name](attributes.integer.md#name)
- [relation](attributes.integer.md#relation)

### Methods

- [add](attributes.integer.md#add)
- [as](attributes.integer.md#as)
- [asc](attributes.integer.md#asc)
- [average](attributes.integer.md#average)
- [between](attributes.integer.md#between)
- [bitwiseAnd](attributes.integer.md#bitwiseand)
- [bitwiseNot](attributes.integer.md#bitwisenot)
- [bitwiseOr](attributes.integer.md#bitwiseor)
- [bitwiseShiftLeft](attributes.integer.md#bitwiseshiftleft)
- [bitwiseShiftRight](attributes.integer.md#bitwiseshiftright)
- [bitwiseXor](attributes.integer.md#bitwisexor)
- [concat](attributes.integer.md#concat)
- [count](attributes.integer.md#count)
- [desc](attributes.integer.md#desc)
- [divide](attributes.integer.md#divide)
- [doesNotMatch](attributes.integer.md#doesnotmatch)
- [doesNotMatchAll](attributes.integer.md#doesnotmatchall)
- [doesNotMatchAny](attributes.integer.md#doesnotmatchany)
- [doesNotMatchRegexp](attributes.integer.md#doesnotmatchregexp)
- [eq](attributes.integer.md#eq)
- [eqAll](attributes.integer.md#eqall)
- [eqAny](attributes.integer.md#eqany)
- [extract](attributes.integer.md#extract)
- [groupingAll](attributes.integer.md#groupingall)
- [groupingAny](attributes.integer.md#groupingany)
- [gt](attributes.integer.md#gt)
- [gtAll](attributes.integer.md#gtall)
- [gtAny](attributes.integer.md#gtany)
- [gteq](attributes.integer.md#gteq)
- [gteqAll](attributes.integer.md#gteqall)
- [gteqAny](attributes.integer.md#gteqany)
- [inAll](attributes.integer.md#inall)
- [inAny](attributes.integer.md#inany)
- [inVal](attributes.integer.md#inval)
- [isAbleToTypeCast](attributes.integer.md#isabletotypecast)
- [isDistinctFrom](attributes.integer.md#isdistinctfrom)
- [isInfinity](attributes.integer.md#isinfinity)
- [isNotDistinctFrom](attributes.integer.md#isnotdistinctfrom)
- [isOpenEnded](attributes.integer.md#isopenended)
- [isUnboundable](attributes.integer.md#isunboundable)
- [lower](attributes.integer.md#lower)
- [lt](attributes.integer.md#lt)
- [ltAll](attributes.integer.md#ltall)
- [ltAny](attributes.integer.md#ltany)
- [lteq](attributes.integer.md#lteq)
- [lteqAll](attributes.integer.md#lteqall)
- [lteqAny](attributes.integer.md#lteqany)
- [matches](attributes.integer.md#matches)
- [matchesAll](attributes.integer.md#matchesall)
- [matchesAny](attributes.integer.md#matchesany)
- [matchesRegexp](attributes.integer.md#matchesregexp)
- [maximum](attributes.integer.md#maximum)
- [minimum](attributes.integer.md#minimum)
- [multiply](attributes.integer.md#multiply)
- [notBetween](attributes.integer.md#notbetween)
- [notEq](attributes.integer.md#noteq)
- [notEqAll](attributes.integer.md#noteqall)
- [notEqAny](attributes.integer.md#noteqany)
- [notInAll](attributes.integer.md#notinall)
- [notInAny](attributes.integer.md#notinany)
- [notInVal](attributes.integer.md#notinval)
- [quotedArray](attributes.integer.md#quotedarray)
- [quotedNode](attributes.integer.md#quotednode)
- [subtract](attributes.integer.md#subtract)
- [sum](attributes.integer.md#sum)
- [typeCastForDatabase](attributes.integer.md#typecastfordatabase)
- [when](attributes.integer.md#when)

## Constructors

### constructor

\+ **new Integer**(`relation`: [_Relation_](../modules/interfaces.md#relation),
`name`: _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_Integer_](attributes.integer.md)

#### Parameters:

| Name       | Type                                            |
| ---------- | ----------------------------------------------- |
| `relation` | [_Relation_](../modules/interfaces.md#relation) |
| `name`     | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_Integer_](attributes.integer.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/attributes/Attribute.ts:22](https://github.com/sequeljs/ast/blob/6632050/src/attributes/Attribute.ts#L22)

## Properties

### name

• **name**: _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)

Inherited from:
[Attribute](attributes.attribute.md).[name](attributes.attribute.md#name)

Defined in:
[src/attributes/Attribute.ts:22](https://github.com/sequeljs/ast/blob/6632050/src/attributes/Attribute.ts#L22)

---

### relation

• **relation**: [_Relation_](../modules/interfaces.md#relation)

Inherited from:
[Attribute](attributes.attribute.md).[relation](attributes.attribute.md#relation)

Defined in:
[src/attributes/Attribute.ts:20](https://github.com/sequeljs/ast/blob/6632050/src/attributes/Attribute.ts#L20)

## Methods

### add

▸ **add**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Math.ts:14](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L14)

---

### as

▸ **as**(`other`: _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)):
[_As_](nodes.as.md)

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `other` | _string_ \| [_SQLLiteral_](nodes.sqlliteral.md) |

**Returns:** [_As_](nodes.as.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/AliasPredication.ts:5](https://github.com/sequeljs/ast/blob/6632050/src/mixins/AliasPredication.ts#L5)

---

### asc

▸ **asc**(): [_Ascending_](nodes.ascending.md)

**Returns:** [_Ascending_](nodes.ascending.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/OrderPredications.ts:7](https://github.com/sequeljs/ast/blob/6632050/src/mixins/OrderPredications.ts#L7)

---

### average

▸ **average**(): [_Avg_](nodes.avg.md)

**Returns:** [_Avg_](nodes.avg.md)

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Math.ts:18](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L18)

---

### bitwiseNot

▸ **bitwiseNot**(): [_BitwiseNot_](nodes.bitwisenot.md)

**Returns:** [_BitwiseNot_](nodes.bitwisenot.md)

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Math.ts:38](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L38)

---

### concat

▸ **concat**(`other`: _any_): [_Concat_](nodes.concat.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Concat_](nodes.concat.md)

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Expressions.ts:13](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L13)

---

### desc

▸ **desc**(): [_Descending_](nodes.descending.md)

**Returns:** [_Descending_](nodes.descending.md)

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Expressions.ts:17](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L17)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Predications.ts:131](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L131)

---

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

**Returns:** _boolean_

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/attributes/Attribute.ts:29](https://github.com/sequeljs/ast/blob/6632050/src/attributes/Attribute.ts#L29)

---

### isDistinctFrom

▸ **isDistinctFrom**(`other`: _any_):
[_IsDistinctFrom_](nodes.isdistinctfrom.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_IsDistinctFrom_](nodes.isdistinctfrom.md)

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Predications.ts:53](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L53)

---

### lower

▸ **lower**(): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/attributes/Attribute.ts:33](https://github.com/sequeljs/ast/blob/6632050/src/attributes/Attribute.ts#L33)

---

### lt

▸ **lt**(`other`: _any_): [_LessThan_](nodes.lessthan.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_LessThan_](nodes.lessthan.md)

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Predications.ts:213](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L213)

---

### maximum

▸ **maximum**(): [_Max_](nodes.max.md)

**Returns:** [_Max_](nodes.max.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Expressions.ts:21](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L21)

---

### minimum

▸ **minimum**(): [_Min_](nodes.min.md)

**Returns:** [_Min_](nodes.min.md)

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Math.ts:46](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L46)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Predications.ts:229](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Predications.ts#L229)

---

### quotedArray

▸ **quotedArray**(`others`: _any_[]): _any_[]

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** _any_[]

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

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

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Math.ts:50](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Math.ts#L50)

---

### sum

▸ **sum**(): [_Sum_](nodes.sum.md)

**Returns:** [_Sum_](nodes.sum.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/Expressions.ts:29](https://github.com/sequeljs/ast/blob/6632050/src/mixins/Expressions.ts#L29)

---

### typeCastForDatabase

▸ **typeCastForDatabase**(`value`:
[_Visitable_](../modules/visitors.md#visitable)): _string_ \| _number_

#### Parameters:

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| `value` | [_Visitable_](../modules/visitors.md#visitable) |

**Returns:** _string_ \| _number_

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/attributes/Attribute.ts:37](https://github.com/sequeljs/ast/blob/6632050/src/attributes/Attribute.ts#L37)

---

### when

▸ **when**(`other`: _any_): [_Case_](nodes.case.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Case_](nodes.case.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in:
[src/mixins/WhenPredication.ts:5](https://github.com/sequeljs/ast/blob/6632050/src/mixins/WhenPredication.ts#L5)
