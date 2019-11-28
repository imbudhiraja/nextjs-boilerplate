import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({ secretKey: 'boilerplate' });

export default encryptor;
