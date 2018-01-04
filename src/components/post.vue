<template>

    <div>
        <v-card>
            <v-card-text>
                <div class="text-lg-right text-sm-right text-md-right">
                    <v-btn primary @click="open_new_staff_form()">New Staff Member</v-btn>
                </div>
            </v-card-text>
        </v-card>
        <v-data-table
                v-bind:headers="headers"
                :items="personel"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td v-for="h in headers">{{props.item[h.value]}}</td>
            </template>
        </v-data-table>
        <newStaffForm></newStaffForm>
    </div>
    
</template>

<script>
    export default {
        name: "post",

    }
</script>

<style scoped>

</style>