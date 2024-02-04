async function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1: Get some bread"), 1000);
  });
}

async function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 2: Toast the bread"), 1000);
  });
}

async function step3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3: Add some cheese"), 1000);
  });
}

async function step4() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 4: Add some jelly"), 1000);
  });
}

async function main() {
  try {
    const res1 = await step1();
    console.log(res1);
    const res2 = await step2();
    console.log(res2);
    const res3 = await step3();
    console.log(res3);
    const res4 = await step4();
    console.log(res4);
  } catch (e) {
    console.log("Error: ", e);
  }
}
main();
