// async function load() {
//   const a = 3.14;
//   await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         let result = ((a * a) / 12) * 3.14 + 190 / 12;
//         resolve(result);
//         console.log(result);
//       } catch (error) {
//         reject(error);
//         console.log(result, "error");
//       }
//     }, 2000);
//   });
//   console.log("done");
// }
// // async function load() {
// //   try {
// //     let a = 11;
// //     let doubleA = await new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         if (a > 10) {
// //           reject({ message: "A too big", value: null });
// //         } else {
// //           let result = a + a;
// //           resolve({ message: "success", value: result });
// //         }
// //       }, 2000);
// //     });
// //     doubleA.value ? console.log(doubleA.value) : console.log(doubleA.message);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// load();

async function load2() {
  let a = 5;
  let doubleA = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 10) {
        reject({ message: "A too big", value: null });
      } else {
        let result = a + a;
        resolve({ message: "success", value: result });
      }
    }, 2000);
  });
  doubleA.value ? console.log(doubleA.value) : console.log(doubleA.message);
}
load2();
