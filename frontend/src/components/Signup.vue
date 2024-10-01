<script setup>
import { ref } from 'vue'

const emit = defineEmits(['sign-up']);
const email = ref('')
const password = ref('')

async function signUp() {
    try {
        const response = await fetch('http://localhost:3000/register', {
            method: "POST",
            body: JSON.stringify({ email: email.value, password: password.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            emit('sign-up');
        }
    } catch(error) {
        console.log(error)
    }
}
</script>

<template>
    <div>
        <p class="page__title">Sign up</p>
        <form @submit.prevent="signUp">
            <div class="form__container">
                <div>
                    <input required type="email" placeholder="Your email" v-model="email" />
                </div>
                <div>
                    <input required type="password" placeholder="Create a password" v-model="password"/>
                </div>
                <div>
                <input class="submit__button" type="submit" value="Submit"/>
                </div>
                <p>Already have an account? <a href="#">Sign In</a></p>
            </div>
        </form>
    </div>
</template>