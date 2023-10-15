let arrayVariable = [];

function add(data) {
    arrayVariable.push(data);
  console.log("Data is added.");
}

function edit(index, newData) {
  if (index >= 0 && index < arrayVariable.length) {
    arrayVariable[index] = newData;
    console.log("Data is edited.");
  } else {
    console.log("Invalid index.");
  }
}

function remove(index) {
  if (index >= 0 && index < arrayVariable.length) {
    arrayVariable.splice(index, 1);
    console.log("Data removed.");
  } else {
    console.log("Invalid index. Data not removed.");
  }
}

function show() {
  if (arrayVariable.length === 0) {
    console.log("No data in the array.");
  } else {
    console.log("Array contents:");
    arrayVariable.forEach((data, index) => {
      console.log(`Index ${index}: ${JSON.stringify(data)}`);
    });
  }
}

add({ name: "lily", age: 17 });
add({ name: "Agalya", age: 25 });

show();

edit(1, { name: "jeni", age: 28 });
show();

remove(0);
show();
