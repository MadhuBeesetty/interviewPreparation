
/* Implement the validate function below.
 * Remember, there are three kinds of validation errors:
 *
 * {ok: false, message: `${name} is required`}
 * {ok: false, message: `type ${type} expected for ${name}`}
 * {ok: false, message: `unexpected property ${name}`}
 * There four possible `types` a property can have:
 * string, number, boolean, and array:employee
 */
// {
//   "employees": [
//     {
//       "id": 1,
//       "name": "alice",
//       "age": 40,
//       "fulltime": true,
//       "reports": "reports"
//     }
//   ]
//   "schema": {
//     "employee": [
//       {
//         "name": "id",
//         "required": true,
//         "type": "number"
//       },
//       {
//         "name": "age",
//         "required": false,
//         "type": "number"
//       },
//       {
//         "name": "name",
//         "required": true,
//         "type": "string"
//       },
//       {
//         "name": "fulltime",
//         "required": true,
//         "type": "boolean"
//       },
//       {
//         "name": "reports",
//         "required": false,
//         "type": "array:employee"
//       }
//     ]
//   }


function validate(employees, schema) {
  let empObj = employees.employees[0];


  return { ok: true, message: "success" };
}
