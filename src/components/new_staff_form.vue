<template>
    <div>
        <v-layout row justify-center>
            <v-dialog v-model="new_staff_form_is_open" fullscreen transition="dialog-bottom-transition" :overlay=false>
                <v-card>
                    <v-toolbar dark color="secondary">
                        <v-btn icon @click.native="close_new_staff_form()" dark>
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark flat @click.native="create_user()">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>


                    <v-tabs v-model="tab_model">
                        <v-tabs-bar color="secondary">
                            <v-tabs-item
                                    v-for="tab in tabs"
                                    :key="tab"
                                    :href="'#' + tab"
                                    ripple
                            >
                                {{ tab }}
                            </v-tabs-item>
                            <v-tabs-slider color="yellow"></v-tabs-slider>
                        </v-tabs-bar>
                        <v-tabs-items>
                            <v-tabs-content
                                    id="Personal"
                            >
                                <v-card flat>
                                    <v-card-text>
                                        <v-layout>
                                            <v-flex xs12 sm6 offset-sm3>
                                                <v-card>
                                                    <v-card-text>
                                                        <v-form v-model="valid">
                                                            <v-text-field
                                                                    label="Name"
                                                                    v-model="user.name"
                                                                    required
                                                            ></v-text-field>
                                                            <v-text-field
                                                                    label="Second Name"
                                                                    v-model="user.second_name"
                                                                    required
                                                            ></v-text-field>
                                                            <v-text-field
                                                                    label="Surname"
                                                                    v-model="user.surname"
                                                                    required
                                                            ></v-text-field>
                                                            <v-flex xs11 sm5>
                                                                <v-menu
                                                                        lazy
                                                                        :close-on-content-click="false"
                                                                        v-model="date_of_birth_enabled"
                                                                        transition="scale-transition"
                                                                        offset-y
                                                                        full-width
                                                                        :nudge-right="40"
                                                                        max-width="290px"
                                                                        min-width="290px"
                                                                >
                                                                    <v-text-field
                                                                            slot="activator"
                                                                            label="Date of Birth"
                                                                            v-model="user.date_of_birth"
                                                                            prepend-icon="event"
                                                                            readonly
                                                                    ></v-text-field>
                                                                    <v-date-picker v-model="date_of_birth" @input="user.date_of_birth = formatDate($event)"  no-title scrollable
                                                                                   actions>
                                                                        <template slot-scope="{ save, cancel }">
                                                                            <v-card-actions>
                                                                                <v-spacer></v-spacer>
                                                                                <v-btn flat color="primary"
                                                                                       @click="cancel">Cancel
                                                                                </v-btn>
                                                                                <v-btn flat color="primary"
                                                                                       @click="save">OK
                                                                                </v-btn>
                                                                            </v-card-actions>
                                                                        </template>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                            </v-flex>
                                                            <v-text-field
                                                                    label="User Password"
                                                                    v-model="user.password"
                                                                    required
                                                            ></v-text-field>
                                                        </v-form>
                                                    </v-card-text>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                    </v-card-text>
                                </v-card>
                            </v-tabs-content>
                            <v-tabs-content id="Banking Details">
                                <v-card flat>
                                    <v-card-text>
                                        <v-layout>
                                            <v-flex xs12 sm6 offset-sm3>
                                                <v-card>
                                                    <v-card-text>
                                                        <v-form v-model="valid">
                                                            <v-text-field
                                                                    label="Account Number"
                                                                    v-model="user.bank_account_number"
                                                                    :counter="10"
                                                                    required
                                                            ></v-text-field>
                                                            <v-text-field
                                                                    label="Bank"
                                                                    v-model="user.bank"
                                                                    :counter="10"
                                                                    required
                                                            ></v-text-field>
                                                            <v-text-field
                                                                    label="Bank Branch"
                                                                    v-model="user.bank_branch"
                                                                    required
                                                            ></v-text-field>
                                                        </v-form>
                                                    </v-card-text>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>

                                    </v-card-text>
                                </v-card>
                            </v-tabs-content>
                            <v-tabs-content id="Employment Details">
                                <v-card flat>
                                    <v-card-text>
                                        <v-layout>
                                            <v-flex xs12 sm6 offset-sm3>
                                                <v-card>
                                                    <v-card-text>
                                                        <v-form v-model="valid">
                                                            <v-text-field
                                                                    label="Work Email"
                                                                    v-model="user.email"
                                                                    required
                                                            ></v-text-field>
                                                            <v-text-field
                                                                    label="Employee Number"
                                                                    v-model="user.employment_number"
                                                                    required
                                                            ></v-text-field>
                                                            <v-flex xs11 sm5>
                                                                <v-menu
                                                                        lazy
                                                                        :close-on-content-click="false"
                                                                        v-model="contract_start_date_enabled"
                                                                        transition="scale-transition"
                                                                        offset-y
                                                                        full-width
                                                                        :nudge-right="40"
                                                                        max-width="290px"
                                                                        min-width="290px"
                                                                >
                                                                    <v-text-field
                                                                            slot="activator"
                                                                            label="Contract Start Date"
                                                                            v-model="user.contract_start_date"
                                                                            prepend-icon="event"
                                                                            readonly
                                                                    ></v-text-field>
                                                                    <v-date-picker v-model="contract_start_date"  @input="user.contract_start_date = formatDate($event)" no-title scrollable
                                                                                   actions>
                                                                        <template slot-scope="{ save, cancel }">
                                                                            <v-card-actions>
                                                                                <v-spacer></v-spacer>
                                                                                <v-btn flat color="primary"
                                                                                       @click="cancel">Cancel
                                                                                </v-btn>
                                                                                <v-btn flat color="primary"
                                                                                       @click="save">OK
                                                                                </v-btn>
                                                                            </v-card-actions>
                                                                        </template>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                            </v-flex>
                                                            <v-flex xs11 sm5>
                                                                <v-menu
                                                                        lazy
                                                                        :close-on-content-click="false"
                                                                        v-model="contract_end_date_enabled"
                                                                        transition="scale-transition"
                                                                        offset-y
                                                                        full-width
                                                                        :nudge-right="40"
                                                                        max-width="290px"
                                                                        min-width="290px"
                                                                >
                                                                    <v-text-field
                                                                            slot="activator"
                                                                            label="Contract End Date"
                                                                            v-model="user.contract_end_date"
                                                                            prepend-icon="event"
                                                                            readonly
                                                                    ></v-text-field>
                                                                    <v-date-picker v-model="contract_end_date"  @input="user.contract_end_date = formatDate($event)" no-title scrollable
                                                                                   actions>
                                                                        <template slot-scope="{ save, cancel }">
                                                                            <v-card-actions>
                                                                                <v-spacer></v-spacer>
                                                                                <v-btn flat color="primary"
                                                                                       @click="cancel">Cancel
                                                                                </v-btn>
                                                                                <v-btn flat color="primary"
                                                                                       @click="save">OK
                                                                                </v-btn>
                                                                            </v-card-actions>
                                                                        </template>
                                                                    </v-date-picker>
                                                                </v-menu>
                                                            </v-flex>
                                                            <v-text-field
                                                                    label="Department"
                                                                    v-model="user.department"
                                                            ></v-text-field>
                                                            <v-text-field
                                                                    label="Graded Tax"
                                                                    v-model="user.graded_tax"
                                                                    required
                                                            ></v-text-field>
                                                            <v-text-field
                                                                    label="Post"
                                                                    v-model="user.post"
                                                                    required
                                                            ></v-text-field>
                                                        </v-form>
                                                    </v-card-text>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>

                                    </v-card-text>
                                </v-card>
                            </v-tabs-content>
                        </v-tabs-items>
                    </v-tabs>


                </v-card>
            </v-dialog>
        </v-layout>

    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "new-staff-form",
        props: ['edit'],
        sockets: {
            create_user(usr) {
                console.log('Created User', usr)
                console.log()
            },
            err(er) {
                console.log('There was an Error', er)
            }
        },
        data: function () {
            return {
                user: {
                    email: '',
                    password: ''
                },
                date: null,
                menu: false,
                date_of_birth_enabled:false,
                date_of_birth:null,
                contract_end_date_enabled:false,
                contract_start_date_enabled:false,
                contract_end_date:null,
                contract_start_date:null,
                modal: false,
                valid: true,
                tab_model: 'Tab Model',
                tabs: ['Personal', 'Banking Details', 'Employment Details']
            }
        },
        computed: {
            can_edit() {
                return this.edit || this.new_staff_form
            },
            ...mapGetters(['new_staff_form_is_open'])
        },
        created() {

            console.log('Created', mapGetters(['new_staff_form_is_open']))
        },
        methods: {
            formatDate (date) {
                if (!date) {
                    return null
                }

                const [year, month, day] = date.split('-')
                return `${day}/${month}/${year}`
            },
            create_user() {
                this.$socket.emit('create_user', this.user)
            },
            ...mapMutations(['open_new_staff_form', 'close_new_staff_form'])
        }
    }
</script>

<style>
    .tabs__li{
        color: white;
    }
</style>