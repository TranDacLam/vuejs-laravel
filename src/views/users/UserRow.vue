<template>
    <tr>
        <td>
            {{ user.id }}
        </td>
        <td>
            {{ user.name }}
        </td>
        <td>
            {{ user.email }}
        </td>
        <td>
            <router-link class="btn btn-primary" :to="`/users/edit/${user.id}`">Edit</router-link>
        </td>
        <td>
            <button class="btn btn-danger" @click="deleteUser">Delete</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: {
            user: Object,
            handleDelete: Function,
        },
        methods: {
            deleteUser: function () {
                this.$store.dispatch('deleteUser', this.user.id);
            },
        }
    }
</script>