```javascript
// Incorrect use of $inc operator within updateOne
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { count: -1 } });
```