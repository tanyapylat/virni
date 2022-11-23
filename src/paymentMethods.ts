export const paymentMethods = {
    MonoBank: {
        name: 'Monobank',
        cardNumber: '5375 4112 0478 0477',
        owner: 'Diana Zaverach',
    },
    MonoBankJar: {
        url: 'https://send.monobank.ua/jar/4Xui6HVpu4',
    },
    PrivatBank: {
        name: 'PrivatBank',
        cardNumber: '5168 7554 6529 4623',
        owner: 'Diana Zaverach',
    },

    Millennium: {
        name: 'Millennium Bank',
        cardNumber: '67 1160 2202 0000 0003 6120 1408',
        owner: 'Diana Zaverach',
    },

    PayPal: {
        name: 'PayPal',
        cardNumber: 'tanyapylatgithub@gmail.com',
        owner: 'Tetyana Pylat',
    },

    Payoneer: {
        name: 'Payoneer',
        cardNumber: 'tanyapylatgithub@gmail.com',
        owner: 'Tetyana Pylat',
    },

    Crypto: [
        { name: 'Bitcoin', number: 'bc1qjvwlcl74crkuudkv0vkxtuaduz0ygx5yxn4yxc' },

        {
            name: 'Ethereum',
            number: '0x3d96F86F9142D53A02ffB1D2E39d0fa153683897',
        },
        { name: 'USDT (ERC20)', number: '0x3d96F86F9142D53A02ffB1D2E39d0fa153683897' },
        { name: 'USDT (TRC20)', number: 'TJvwgMKsHKNo1LPMkhqaFRE1hiT1kREkzY' },
        { name: 'Dogecoin', number: 'D87gDHk1uqowhY8rhLXqqfwo9wReVXMMVJ' },
    ],
};
