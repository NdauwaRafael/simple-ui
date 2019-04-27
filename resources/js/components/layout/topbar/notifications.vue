<script>

    export default {
        props: {
            notifications: {
                type: Array,
                default: []
            }
        },
        data: () => ({
            notifications_display: false,
        }),

        computed: {

            unreadMessages() {
                return this.notifications.filter(notification => notification.status === 'unread').length;
            },
        },


        methods: {
            showNotifications() {
                this.notifications_display = !this.notifications_display
            }
        }
    }
</script>

<template>
    <div style="display: flex;">

        <div class="nav_notifications__overlay" v-if="notifications_display" @click="showNotifications"></div>

        <div class="nav_action nav_notifications">
            <a @click="showNotifications">
                <span class="notify_bubble" v-if="unreadMessages>0">{{unreadMessages}}</span>
                <i class="material-icons">
                    notifications
                </i>
            </a>

            <div class="nav_notifications__content" v-if="notifications_display">

                <div class="notify_title">
                    Notifications
                </div>

                <div class="notify_messages">
                    <ul>
                        <li
                            class="notify_message"
                            v-for="(notification, index) in notifications"
                            :key="index"
                            @click="view(notification)">

                            <div class="notify_message__title" :class="notification.status">
                                {{notification.short_description}}
                            </div>

                            <div class="notify_message__body" :class="notification.status">
                                {{notification.description}}
                            </div>

                            <div class="notify_message__footer" :class="notification.status">
                                {{notification.date}}
                            </div>

                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>
