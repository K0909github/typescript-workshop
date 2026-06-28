let person: { firstName: string; lastName?: string; age: number; }; // lastName? にプロパティを変更
person = { firstName: "AWS", lastName: "太郎", age: 30 };//値を代入

delete person.lastName; //lastName を削除

console.log(person); // { firstName: 'AWS', age: 30 }