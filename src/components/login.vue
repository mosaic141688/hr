<template>
    <div>
        <v-layout row justify-center>
            <v-dialog v-model="login" fullscreen transition="dialog-bottom-transition" :overlay=false>
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon @click.native="dialog = false" dark>
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>

                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-card>
                                <v-card-media src="/public/logo.bmp" height="200px">
                                </v-card-media>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">User Login</h3>
                                        <div>Type in your Email and Password below</div>
                                    </div>
                                </v-card-title>
                                <v-crad-content>

                                    <v-form v-model="valid">
                                        <v-text-field
                                                label="Email"
                                                v-model="user.email"
                                                :counter="10"
                                                required
                                        ></v-text-field>
                                        <v-text-field
                                                label="Password"
                                                v-model="user.password"
                                                required
                                        ></v-text-field>
                                    </v-form>
                                </v-crad-content>
                                <v-card-actions>
                                    <v-btn flat color="orange" @click="login=false">Login</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>

                </v-card>
            </v-dialog>
        </v-layout>

    </div>
</template>

<script>
    export default {
        name: "login",
        data:function () {
            return{
                login:true,
                user:{
                    email:'',
                    password:''
                }
            }
        }
    }
</script>

<style scoped>

</style>