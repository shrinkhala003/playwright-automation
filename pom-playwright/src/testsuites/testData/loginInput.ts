type ValidLogin = {
    email: string;
    password: string;

};

export const validLogin: ValidLogin = {
    email: 'qa_testers@qabrains.com',
    password: 'Password123'
}

type InvalidLogin = {
    email: string;
    password: string;
};

export const invalidLogin: InvalidLogin = {
    email: 'kapilcool@gmail.com',
    password: 'iamverycool'
} 