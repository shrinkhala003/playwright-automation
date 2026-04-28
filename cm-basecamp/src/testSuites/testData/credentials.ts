export const credentials = {
    normalUser: {
        email: process.env.NORMAL_USER_EMAIL!,
        password: process.env.NORMAL_USER_PASSWORD!,
    },
    admin: {
        email: process.env.ADMIN_EMAIL!,
        password: process.env.ADMIN_PASSWORD!,
    },
    superAdmin: {
        email: process.env.SUPER_ADMIN_EMAIL!,
        password: process.env.SUPER_ADMIN_PASSWORD!,
    },
    supervisor: {
        email: process.env.SUPERVISOR_EMAIL!,
        password: process.env.SUPERVISOR_PASSWORD!,
    },
}
