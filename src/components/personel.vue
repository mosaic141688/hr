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
    import newStaffForm from './new_staff_form'
    import {mapGetters,mapMutations} from 'vuex'

    export default {
        props: ['personel'],
        name: "personel",
        components:{newStaffForm},
        data: function () {
            return {
                new_staff:false
            }
        },
        computed: {
            headers() {
                return Object.keys(this.personel[0]).map(k => {
                    return {
                        text: k,
                        value: k
                    }
                })
            }
        },
        methods:{
            new_staff_click(){
                this.new_staff = true
            },
            ...mapMutations(['open_new_staff_form'])
        }
    }

</script>

<style scoped>

</style>