// const employees = {
//   "employees": [
//     {
//       "id": 1,
//       "name": "alice",
//       "age": 40,
//       "fulltime": true,
//       "reports": "reports"
//     }
//   ]
// }

// const employees = {
//   "employees": [
//     {
//       "id": 1,
//       "name": "alice",
//       "age": 40,
//       "fulltime": true,
//       "salary": false,
//       "reports": "reports"
//     }
//   ]
// }

// const employees = {
//   "employees": [
//     {
//       "name": "alice",
//     }
//   ]
// }

// const employees = {
//   "employees": []
// }

const schema = {
  "schema": {
    "employee": [
      {
        "name": "id",
        "required": true,
        "type": "number"
      },
      {
        "name": "age",
        "required": false,
        "type": "number"
      },
      {
        "name": "name",
        "required": true,
        "type": "string"
      },
      {
        "name": "fulltime",
        "required": true,
        "type": "boolean"
      },
      {
        "name": "reports",
        "required": false,
        "type": "array:employee"
      }
    ]
  }

}

function validate(employees, schema) {
  let empObj = employees.employees[0];

  let schemaArr = schema.employee;
  let resBool;
  let message;
  console.log(schema.schema.employee);
  for (var i = 0; i < schemaArr.length; i++) {
    if (!empObj[schemaArr[i].name]) {
      resBool = false;
      message = `${schemaArr[i].name} is missing`
    } else {
      resBool = true;
      message = 'success'
    }
  }
  console.log(empObj);
  return { ok: true, message: "success" };
}

validate(employees, schema)
