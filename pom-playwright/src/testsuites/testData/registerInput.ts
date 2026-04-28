type ValidUser = {

    name: string;
    country: string;
    account: string;
    email: string;
    password: string;
    confirmPassword: string;

};

export const validUser: ValidUser = {
    name: 'Subash Gole',
    country: 'Barbados',
    account: 'Engineer',
    email: 'subashgole@gmail.com',
    password: 'iamverymean123',
    confirmPassword: 'iamverymean123'
 
};

type DifferentPassword = {

    name: string;
    country: string;
    account: string;
    email: string;
    password: string;
    confirmPassword: string;

};

export const differentPassword: DifferentPassword = {
    name: 'Subash Gole',
    country: 'Barbados',
    account: 'Engineer',
    email: 'subashgole@gmail.com',
    password: 'iamverymean123',
    confirmPassword: 'iamverymean1234'
 
};