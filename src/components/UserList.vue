<template>
    <h1>User List Page</h1>
    <div v-if="loading">
        <Spinner />
    </div>
    <div v-if="!loading && errorMessage">
        <p>{{ errorMessage }}</p>
    </div>
    <div v-if="!loading && users.length > 0">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";
import Spinner from "./Spinner.vue";
export default {
    name: 'UserList',
    components: { Spinner },
    data: function () {
        return {
            loading: false,
            users: [],
            errorMessage: null
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let dataUrl = 'http://localhost:3000/users';
            let response = await axios.get(dataUrl);
            this.users = response.data;
            this.loading = false;

        }
        catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    }
}
</script>
<style></style>