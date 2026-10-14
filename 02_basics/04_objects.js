// const newObjUser= {}; //singletone object
const newObjUser1 = new Object(); // non-singletone object
newObjUser1.id = "123abc";
newObjUser1.name = "sam";
newObjUser1.email = "example@gmail.com";
newObjUser1.age = 45;
// console.log(newObjUser1);

// const regularObj = {
//   email: "some@gmail.com",
//   userName: {
//     fullName: {
//       firstName: "Sid",
//       lastName: "Patil",
//     },
//   },
// };

// console.log(regularObj);
// console.log(regularObj.userName)
// console.log(regularObj.userName.fullName)
// console.log(regularObj.userName.fullName.firstName)

// let myObj1 = {1:"a",2:"b"};
// let myObj2 = {3:"c",4:"d"};
// let myObj3 = {5:"e",6:"f"};

// const myNewObj3= {myObj1, myObj2, myObj3}; // cannot merge like this.
// let myNewObj4 = Object.assign({}, myObj1, myObj2, myObj3);
// let myNewObj5= {...myObj1, ...myObj2, ...myObj3};

// console.log(myNewObj4);
// console.log(myNewObj5);

// const users = [
//     {id:1,
//      name:"Siddhesh"
//     },
//     {id:2,
//      name:"SUMO"
//     },
//     {id:3,
//      name:"jay"
//     },
//     {id:4,
//      name:"rahu"
//     },
// ];

// console.log(users[0].name);

// console.log(newObjUser1);
// console.log("These are newObjUser1's Keys: ",Object.keys(newObjUser1));
// console.log("These are newObjUser1's Values: ",Object.values(newObjUser1));
// console.log("These are newObjUser1's Entries: ",Object.entries(newObjUser1)); // it returned each key and value combined into there own respective Arrays.

// console.log(newObjUser1.hasOwnProperty("name"));

const course = {
  courseName: "Js in Hindi",
  price: "999",
  courseInstructor: "Sid",
};
// console.log(course);

// course.courseIntructor // not recommended instade use.

// const { courseName, price, /* renaming veribales = */ courseInstructor:instructor } = course;
// console.log(instructor);
// console.log(courseName);
// console.log(price);


// { "courseName": "Js in Hindi", "price": "999", "courseInstructor": "Sid" }

//This is a JSON Example
// const jsonExampe = 
// [
//   { "courseName": "Js in Hindi", "price": "999", "courseInstructor": "Sid" }
// ];

// console.log(jsonExampe)


/* json formatted objects
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Madame",
        "first": "Rose-Marie",
        "last": "Blanc"
      },
      "location": {
        "street": {
          "number": 1337,
          "name": "Rue de L'Abbé-Migne"
        },
        "city": "Amsoldingen",
        "state": "Appenzell Innerrhoden",
        "country": "Switzerland",
        "postcode": 9873,
        "coordinates": {
          "latitude": "-60.8682",
          "longitude": "59.1544"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "rose-marie.blanc@example.com",
      "login": {
        "uuid": "d1722901-41f2-4b48-a00f-234f1bf505e8",
        "username": "yellowdog307",
        "password": "3ip76k2",
        "salt": "g0iTpI3b",
        "md5": "c13c521c722b5919f639d0765192d37b",
        "sha1": "b8fb636748dfbf77a287ed809c3beef5cb4bd029",
        "sha256": "a6a033f9efc881caf0cefe6df5bdf9b53ea45fb5eb06c077bd773777deb73ee7"
      },
      "dob": {
        "date": "1962-01-31T16:33:32.334Z",
        "age": 64
      },
      "registered": {
        "date": "2021-08-18T07:00:08.200Z",
        "age": 5
      },
      "phone": "076 039 59 30",
      "cell": "079 444 49 76",
      "id": {
        "name": "AVS",
        "value": "756.6329.4581.60"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/10.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
      },
      "nat": "CH"
    }
  ],
  "info": {
    "seed": "31eecc9d2fbc3064",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
*/

