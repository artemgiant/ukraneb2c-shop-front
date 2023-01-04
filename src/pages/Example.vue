<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <label for="email">Your Email</label>
    <Field id="email_addr" name="email_addr" type="email" />
    <ErrorMessage name="email_addr" />

    <label for="password">Your Password</label>
    <Field id="password" name="acc_pazzword" type="password" />
    <ErrorMessage name="acc_pazzword" />

    <button>Submit</button>
  </Form>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email_addr: Yup.string().email().required().label('Email Address'),
  acc_pazzword: Yup.string().min(5).required().label('Your Password'),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));





  let schema = Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().required().positive().integer(),
    email: Yup.string().email(),
    website: Yup.string().url(),
    createdOn: Yup.date().default(function () {
      return new Date();
    }),
  });

// check validity
  schema
      .isValid({
        name: 'jimmy',
        age: 24,
      })
      .then(function (valid) {
        console.log(valid)
        valid; // => true
      });


  schema.validate

// you can try and type cast objects to the defined schema
  schema.cast({
    name: 'jimmy',
    age: '24',
    createdOn: '2014-09-23T19:25:25Z',
  });
// => { name: 'jimmy', age: 24, createdOn: Date }

}
</script>

<style scoped>
input,
label {
  display: block;
  margin-top: 20px;
}

input + span {
  display: block;
}

button {
  margin-top: 20px;
}
</style>
