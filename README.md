# MongoDB $inc Race Condition
This example demonstrates a potential race condition when using the `$inc` operator in MongoDB's `updateOne` method.  Multiple concurrent operations decrementing a counter may result in the counter becoming negative.

## Problem
The provided code snippet attempts to decrement a counter using `$inc`. However, in a concurrent environment, multiple operations might try to decrement the counter at the same time, leading to the counter value going below zero.

## Solution
The solution involves implementing atomic operations to ensure that the counter is not decremented below zero.  This can be achieved using `$min` instead of `$inc` with a value of 0 to prevent negative values, coupled with an appropriate check and retry mechanism.