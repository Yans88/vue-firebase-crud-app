<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add User</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.contact" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add User</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {db} from '../firebaseDB';
    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) { 
                event.preventDefault();
                db.collection('users').add(this.user).then(()=>{
                    alert("Success");
                    this.user.name = ''
                    this.user.email = ''
                    this.user.contact = ''
                    window.location.href = '/list';
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>