<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user';

const props = defineProps(['authenticated']);
const emit = defineEmits(['signOut']);

const userStore = useUserStore()
const user = userStore.user;
let models = ref([]);

onMounted(() => {
    loadModels();
});

async function loadModels() {
    try {
        let response = await fetch('http://localhost:3000/models', {
            method: "POST",
            body: JSON.stringify({ userId: user.id }),
            headers: {
                "Content-Type": "application/json",
            }
        });
    
        if(response.ok) {
            const modelObjs = await response.json();
            models.value = modelObjs.map(model => model.name);
        }
    } catch(error) {
        console.log(`Response status: ${response.status}`)
    }   
}

async function signOut() {
    emit('signOut');
}

</script>

<template>
  <div>
    <p class="page__title">Dashboard</p>
    <form action="">
        <div class="form__container">
            <label for="pdfpicker">Upload a PDF</label>
            <div>
                <input type="file" id="pdfpicker" name="pdfpicker" accept=".pdf"/>
            </div>
            <label for="prompt">Enter your prompt</label>
            <div>
                <textarea id="prompt" name="prompt" placeholder="Tell the AI what data you want to extract.">
                </textarea>
            </div>
            <div>
                <select name="models" id="models">
                    <option value="">Select AI model</option>
                    <option v-for="model in models" value="model">
                        {{ model }}
                    </option>
                </select>
            </div>
            <input class="submit__button" type="submit" value="Extract Data">
        </div>
    </form>
    <div>
        <button @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<style scoped>
label {
    margin-right: 1rem;
    color: cadetblue;
}

select {
    color: rgb(39, 102, 104);
}

form {
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 1rem;
}

</style>
