---
id: 'attributes.integer'
title: 'Class: Integer'
sidebar_label: 'Integer'
hide_title: true
---

# Class: Integer

[Attributes](../modules/attributes.md).Integer

## Hierarchy

- [_Attribute_](attributes.attribute.md)

  ↳ **Integer**

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

Defined in: @sequeljs/ast/src/attributes/Attribute.ts:22

## Properties

### name

• **name**: _string_ \| [_SQLLiteral_](nodes.sqlliteral.md)

Inherited from:
[Attribute](attributes.attribute.md).[name](attributes.attribute.md#name)

Defined in: @sequeljs/ast/src/attributes/Attribute.ts:22

---

### relation

• **relation**: [_Relation_](../modules/interfaces.md#relation)

Inherited from:
[Attribute](attributes.attribute.md).[relation](attributes.attribute.md#relation)

Defined in: @sequeljs/ast/src/attributes/Attribute.ts:20

## Methods

### add

▸ **add**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:14

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

Defined in: @sequeljs/ast/src/mixins/AliasPredication.ts:5

---

### asc

▸ **asc**(): [_Ascending_](nodes.ascending.md)

**Returns:** [_Ascending_](nodes.ascending.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/OrderPredications.ts:7

---

### average

▸ **average**(): [_Avg_](nodes.avg.md)

**Returns:** [_Avg_](nodes.avg.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Expressions.ts:9

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:257

---

### bitwiseAnd

▸ **bitwiseAnd**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:18

---

### bitwiseNot

▸ **bitwiseNot**(): [_BitwiseNot_](nodes.bitwisenot.md)

**Returns:** [_BitwiseNot_](nodes.bitwisenot.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:22

---

### bitwiseOr

▸ **bitwiseOr**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:26

---

### bitwiseShiftLeft

▸ **bitwiseShiftLeft**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:30

---

### bitwiseShiftRight

▸ **bitwiseShiftRight**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:34

---

### bitwiseXor

▸ **bitwiseXor**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:38

---

### concat

▸ **concat**(`other`: _any_): [_Concat_](nodes.concat.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Concat_](nodes.concat.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/ConcatPredication.ts:4

---

### count

▸ **count**(`distinct?`: _boolean_): [_Count_](nodes.count.md)

#### Parameters:

| Name       | Type      | Default value |
| ---------- | --------- | ------------- |
| `distinct` | _boolean_ | false         |

**Returns:** [_Count_](nodes.count.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Expressions.ts:13

---

### desc

▸ **desc**(): [_Descending_](nodes.descending.md)

**Returns:** [_Descending_](nodes.descending.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/OrderPredications.ts:11

---

### divide

▸ **divide**(`other`: _any_): [_Division_](nodes.division.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Division_](nodes.division.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:42

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:57

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:65

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:78

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:91

---

### eq

▸ **eq**(`other`: _any_): [_Equality_](nodes.equality.md)<_any_, _any_\>

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Equality_](nodes.equality.md)<_any_, _any_\>

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:95

---

### eqAll

▸ **eqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:99

---

### eqAny

▸ **eqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:103

---

### extract

▸ **extract**(`field`: _any_): [_Extract_](nodes.extract.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `field` | _any_ |

**Returns:** [_Extract_](nodes.extract.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Expressions.ts:17

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:25

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:35

---

### gt

▸ **gt**(`other`: _any_): [_GreaterThan_](nodes.greaterthan.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_GreaterThan_](nodes.greaterthan.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:107

---

### gtAll

▸ **gtAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:111

---

### gtAny

▸ **gtAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:115

---

### gteq

▸ **gteq**(`other`: _any_): [_GreaterThanOrEqual_](nodes.greaterthanorequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_GreaterThanOrEqual_](nodes.greaterthanorequal.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:119

---

### gteqAll

▸ **gteqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:123

---

### gteqAny

▸ **gteqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:127

---

### inAll

▸ **inAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:143

---

### inAny

▸ **inAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:147

---

### inVal

▸ **inVal**(`other`: _any_): [_In_](nodes.in.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_In_](nodes.in.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:131

---

### isAbleToTypeCast

▸ **isAbleToTypeCast**(): _boolean_

**Returns:** _boolean_

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/attributes/Attribute.ts:29

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:155

---

### isInfinity

▸ `Protected`**isInfinity**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:45

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:151

---

### isOpenEnded

▸ `Protected`**isOpenEnded**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:49

---

### isUnboundable

▸ `Protected`**isUnboundable**(`value`: _any_): _boolean_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `value` | _any_ |

**Returns:** _boolean_

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:53

---

### lower

▸ **lower**(): [_NamedSQLFunction_](nodes.namedsqlfunction.md)

**Returns:** [_NamedSQLFunction_](nodes.namedsqlfunction.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/attributes/Attribute.ts:33

---

### lt

▸ **lt**(`other`: _any_): [_LessThan_](nodes.lessthan.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_LessThan_](nodes.lessthan.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:159

---

### ltAll

▸ **ltAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:163

---

### ltAny

▸ **ltAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:167

---

### lteq

▸ **lteq**(`other`: _any_): [_LessThanOrEqual_](nodes.lessthanorequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_LessThanOrEqual_](nodes.lessthanorequal.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:171

---

### lteqAll

▸ **lteqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:175

---

### lteqAny

▸ **lteqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:179

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:183

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:187

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:200

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:213

---

### maximum

▸ **maximum**(): [_Max_](nodes.max.md)

**Returns:** [_Max_](nodes.max.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Expressions.ts:21

---

### minimum

▸ **minimum**(): [_Min_](nodes.min.md)

**Returns:** [_Min_](nodes.min.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Expressions.ts:25

---

### multiply

▸ **multiply**(`other`: _any_): [_Multiplication_](nodes.multiplication.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Multiplication_](nodes.multiplication.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:46

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

Defined in: @sequeljs/ast/src/mixins/Predications.ts:292

---

### notEq

▸ **notEq**(`other`: _any_): [_NotEqual_](nodes.notequal.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_NotEqual_](nodes.notequal.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:217

---

### notEqAll

▸ **notEqAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:221

---

### notEqAny

▸ **notEqAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:225

---

### notInAll

▸ **notInAll**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:241

---

### notInAny

▸ **notInAny**(`others`: _any_[]): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:245

---

### notInVal

▸ **notInVal**(`other`: _any_): [_NotIn_](nodes.notin.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_NotIn_](nodes.notin.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:229

---

### quotedArray

▸ **quotedArray**(`others`: _any_[]): _any_[]

#### Parameters:

| Name     | Type    |
| -------- | ------- |
| `others` | _any_[] |

**Returns:** _any_[]

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:253

---

### quotedNode

▸ **quotedNode**(`other`: _any_): _any_

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** _any_

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Predications.ts:249

---

### subtract

▸ **subtract**(`other`: _any_): [_Grouping_](nodes.grouping.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Grouping_](nodes.grouping.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Math.ts:50

---

### sum

▸ **sum**(): [_Sum_](nodes.sum.md)

**Returns:** [_Sum_](nodes.sum.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/Expressions.ts:29

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

Defined in: @sequeljs/ast/src/attributes/Attribute.ts:37

---

### when

▸ **when**(`other`: _any_): [_Case_](nodes.case.md)

#### Parameters:

| Name    | Type  |
| ------- | ----- |
| `other` | _any_ |

**Returns:** [_Case_](nodes.case.md)

Inherited from: [Attribute](attributes.attribute.md)

Defined in: @sequeljs/ast/src/mixins/WhenPredication.ts:5
