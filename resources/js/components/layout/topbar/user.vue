<script>
    export default {
        props: {
            avatar: {
                default: '',
                type: String
            },
            no_dropdown_avatar: {
                default: false,
                type: Boolean
            },
            name: {
                default: 'Charles Okoyo',
                type: String
            }
        },

        data: () => ({
            show_avatar_details: false,
            user_details_displayed: false
        }),
        methods: {
            show_details() {
                if (this.show_avatar_details) {
                    this.user_details_displayed = false;
                    setTimeout(() => {
                        this.show_avatar_details = false
                    })
                } else {
                    this.show_avatar_details = true;
                    this.user_details_displayed = true;
                }
            }
        },
    }
</script>
<template>
    <div>
        <div v-show="show_avatar_details" class="avatar_toggled" @click="show_details"></div>
        <div class="nav_user">
            <a @click="show_details">
                <img v-if="avatar !== '' " :src="avatar" alt="user avatar" class="user_avatar">
                <span v-else class="nav_action">
                    <i class="material-icons">account_circle</i>
                </span>
            </a>
            <!--<span class="user_name">Active User</span>-->
            <div class="user_content" v-show="show_avatar_details"
                 :class="{'avatar_displayed': user_details_displayed}">
                <div class="user_content__avatar" v-show="avatar !== '' && !no_dropdown_avatar">
                    <img v-if="avatar !== '' " :src="avatar" alt="user avatar" class="user_avatar">
                </div>
                <div class="user_content__links">
                <span class="title">
                    <h5>{{name}}</h5>
                </span>

                    <span class="links-items">
                    <slot></slot>
                </span>
                </div>
            </div>
        </div>
    </div>
</template>
