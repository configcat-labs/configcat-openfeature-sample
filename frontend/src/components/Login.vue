<script setup>
import { ref } from 'vue';
import Signup from './Signup.vue';

const emit = defineEmits(['authenticated']);

const email = ref('');
const password = ref('');
const userRegistered = ref(true);

async function signIn() {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify({ email: email.value, password: password.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.ok) {
            emit('authenticated', {
                id: await response.json()
            });
        }
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
  <div>
    <div v-if="userRegistered">
        <p class="page__title">Sign in</p>
        <form @submit.prevent="signIn">
            <div class="form__container">
                <div>
                    <input required type="email" placeholder="Your email" v-model="email" />
                </div>
                <div>
                    <input required type="password" placeholder="Your password" v-model="password"/>
                </div>
                <input class="submit__button" type="submit" value="Submit"/>
            </div>
        </form>
        <p>Don't have an account? <a href="#" @click="userRegistered = false">Sign up</a></p>
    </div>
    <Signup v-else @sign-up="userRegistered = true"/>
  </div>
</template>
