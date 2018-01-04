<template>
    <v-app>
        <v-navigation-drawer
                fixed
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                app
        >
            <v-list>
                <v-list-tile
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.route"
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>remove</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-slide-y-transition mode="out-in">
                    <v-layout column align-center>
                        <router-view :personel="staff"></router-view>
                        <!-- Login -->

                    </v-layout>
                </v-slide-y-transition>

            </v-container>
        </v-content>
        <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                fixed
        >
            <v-list>
                <v-list-tile @click.native="right = !right">
                    <v-list-tile-action>
                        <v-icon>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>

      </v-app>
</template>

<script>
    import mapState from 'vuex'
    export default {
        data() {
            return {
                login:true,
                clipped: true,
                drawer: true,
                fixed: false,
                user:{
                  email:'',
                  password:''
                },
                items: [
                    {
                        icon: 'people',
                        title: 'Staff',
                        route: 'personel'
                    },
                    {
                        icon: 'card_membership',
                        title: 'positions',
                        route: 'positions'
                    },
                    {
                        icon: 'recent_actors',
                        title: 'leaves',
                        route: 'leave'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Human Resources',
                staff:[
                    {
                        first_name:'Name',
                        second_name:'Second Name',
                        surname:'Surname',
                        employment_post:'Post',
                        bank_account:'',
                        bank_name:'',
                        bank_branch:'',
                        contract_start_date:'',
                        contract_end_date:'',
                        employee_number:''
                    },
                    {
                        first_name:'Name',
                        second_name:'Second Name',
                        surname:'Surname',
                        employment_post:'Post',
                        bank_account:'',
                        bank_name:'',
                        bank_branch:'',
                        contract_start_date:'',
                        contract_end_date:'',
                        employee_number:''
                    },
                    {
                        first_name:'Name',
                        second_name:'Second Name',
                        surname:'Surname',
                        employment_post:'Post',
                        bank_account:'',
                        bank_name:'',
                        bank_branch:'',
                        contract_start_date:'',
                        contract_end_date:'',
                        employee_number:''
                    },
                    {
                        first_name:'Name',
                        second_name:'Second Name',
                        surname:'Surname',
                        employment_post:'Post',
                        bank_account:'',
                        bank_name:'',
                        bank_branch:'',
                        contract_start_date:'',
                        contract_end_date:'',
                        employee_number:''
                    }
                ]
            }
        },
        computed:{
            ...mapState['count']
        },
        created(){

        }
    }
</script>

<style scoped>
</style>
