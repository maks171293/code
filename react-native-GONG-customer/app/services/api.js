const BaseURL = 'http://cl-gong.springs.pw/api/';
//const BaseURL = 'http://localhost:8000/api/';

/**
 * rest api module
 */
export default  API = {
    /**
     * vehicles rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    vehicles(data, callback) {
        return fetch(BaseURL + 'service/vehicle', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer woewmL1iBfPOP6GjbCaTMAPjNCxk4d6WcQz5R6C36gTkJ5kx7aGtRrAu1tyM',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => console.log('Error', error));
    },

    /**
     * login rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    getCustomer(token, callback) {
        return fetch(BaseURL + 'customer/get', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer '+token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => console.log('Error', error));
    },
    /**
     * update profile rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    updateCustomer(data, callback) {
        return fetch(BaseURL + 'customer/update-profile', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer '+data.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => console.log('Error', error));
    },

    /**
     * login rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    login(data, callback) {
        return fetch(BaseURL + 'customer/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => console.log('Error', error));
    },

    /**
     * signUp rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    signUp(data, callback) {
        return fetch(BaseURL + 'users/customer-signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(e => console.log('error hitting /users/customer-signup/ ', e));
    },

    payment(data, callback){
        return fetch(BaseURL + 'users/payment', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer woewmL1iBfPOP6GjbCaTMAPjNCxk4d6WcQz5R6C36gTkJ5kx7aGtRrAu1tyM',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => console.log('Error', error));
    }


};