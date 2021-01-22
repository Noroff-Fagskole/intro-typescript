const myLink = document.querySelector('a')!;

console.log(myLink.href);

/*
 object is possibly null
 if you know the value of that var will return something add an
 exclamation mark.

 if not you can do run time check first. before using the myLink var
 if (myLink) {
  console.log(myLink.href);
 }

 typescript knows all the different properties and methods on the
 element and it will come up in the inteli-sense
 */

/* type casting

Tell TS what kind of type this element is going to be */
const form = document.querySelector('form') as HTMLFormElement;
console.log(form.children);

const email = document.querySelector('#inputEmail') as HTMLInputElement;
const password = document.querySelector('#inputPassword') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    email.value,
    password.value
   );
    // value as number turns it into number
})
