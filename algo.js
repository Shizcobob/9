/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };


  
  const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
  
  // This object contains inherited key value pairs from the above proto obj.
  const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  });

  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];

  function entries(obj) {
    let newObj = [];

    for(const key in obj) {
        console.log(key)

        if (obj.hasOwnProperty(key)) {
            newObj.push([key, obj[key]]);
        }
    }

    return newObj
  }
  console.log(entries(obj1))
  console.log(entries(obj2))
  
  /*****************************************************************************/