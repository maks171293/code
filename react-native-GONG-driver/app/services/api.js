// const BaseURL = 'http://cl-gong.springs.pw/api/';
const BaseURL = 'http://192.71.245.181/api/';

/*
 *rest api module
 */

class API {
    constructor() {
        if (!API.instance) {
            API.instance = this;
        }
        return API.instance;
    }

    countries(data, callback) {
        return fetch(BaseURL + 'country/get-all', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + data.token,
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

    /**
     * signUp rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    signUp(data, callback) {
        fetch(BaseURL + 'users/driver-signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(null, response);
            })
            .catch(error => {
                callback(error);
            });
    }

    /**
     * login rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    login(data, callback) {
        fetch(BaseURL + 'driver/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(null, response);
            })
            .catch(error => {
                callback(error);
            });
    }

    /**
     *get all driver question
     * @param data
     * @param callback
     * @returns {Promise.<TResult>}
     */
    getDriverSettings(data, callback) {
        return fetch(BaseURL + 'driver/get-partner-settings', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error ', e));
    }

    /**
     * set questions for driver
     *
     *
     * @param data
     * @param callback
     * @returns {Promise.<TResult>}
     */
    setDriverSettings(data, callback) {
        return fetch(BaseURL + 'driver/set-partner-settings', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            // .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(error => {
                callback(error);
                console.log('Error', error)
            });
    }

    /**
     * set rates by driver id
     * @param data
     * @param callback
     * @returns {Promise.<TResult>}
     */
    setRate(data, callback) {
        return fetch(BaseURL + 'driver/set-rate', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting driver/set-rate ', e));
    }

    /**
     * set rates by driver id
     * @param data
     * @param callback
     * @returns {Promise.<TResult>}
     */
    removeRate(data, callback) {
        return fetch(BaseURL + 'driver/remove-rate', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting driver/remove-rate ', e));
    }

    /**
     * get rates for specific service
     * @param data
     * @param callback
     * @returns {Promise.<TResult>}
     */
    getRateByService(data, callback) {
        return fetch(BaseURL + 'driver/get-rate', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => {
                console.log('error hitting driver/get-rate ', e)
                callback(e);
            });
    }

    /**
     * get all services from database
     * @param data
     * @returns {Promise.<TResult>}
     */
    getServices(data, callback) {
        return fetch(BaseURL + 'service/all', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting /service/all ', e));
    }

    /**
     * send activation key
     * @param data
     * @returns {Promise.<TResult>}
     */
    activateDriver(data, callback) {
        return fetch(BaseURL + 'driver/activate-driver', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting /driver/activate-driver ', e));
    }

    /**
     * save questionnaire
     * @param data
     * @returns {Promise.<TResult>}
     */
    setDriverFillsQuestionnaire(data, callback) {
        return fetch(BaseURL + 'driver/set-partner-questionnaire', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => {
                callback(e);
                console.log('error hitting /driver/set-partner-questionnaire ', e)
            });
    }
    /**
     * job done
     * @param data
     * @returns {Promise.<TResult>}
     */
    jobDone(data, callback) {
        return fetch(BaseURL + 'driver/job-done', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting /driver/job-done ', e));
    }

    findJob(data, callback) {
        return fetch(BaseURL + 'driver/find-job', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting driver/find-job', e));
    }

    setStatusWaiting(data, callback) {
        return fetch(BaseURL + 'driver/set-status-waiting', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting driver/set-status-waiting', e));
    }

    acceptJob(data, callback) {
        return fetch(BaseURL + 'driver/accept-job', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting driver/accept-job', e));
    }

    rejectJob(data, callback) {
        return fetch(BaseURL + 'driver/reject-job', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                callback(response)
            })
            .catch(e => console.log('error hitting driver/reject-job', e));
    }

    getDriver(token, callback) {
        return fetch(BaseURL + 'driver/get', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => console.log('Error', error));
    }

    /**
     * update profile rest api
     * @param data
     * @returns {Promise.<TResult>}
     */
    updateDriver(data, callback) {
        fetch(BaseURL + 'driver/update-profile', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + data.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(response => {
                callback(null, response);
            })
            .catch(error => {
                callback(error);
            });
    }

    /**
     * Send photo of document
     * @param data
     * @returns {Promise.<TResult>}
     */
    setDocumentPhoto(data, callback) {
        return fetch(BaseURL + 'driver/set-documents', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + data.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => {
                callback(error);
                console.log('Error', error)
            });
    }

    /**
     * Get photo of document
     * @param data
     * @returns {Promise.<TResult>}
     */
    getDocumentPhoto(data, callback) {
        return fetch(BaseURL + 'driver/get-documents', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + data.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => {
                callback(error);
                console.log('Error', error)
            });
    }

    /**
     * Set working hours
     * @param data
     * @returns {Promise.<TResult>}
     */
    setWorkingHours(data, callback) {
        return fetch(BaseURL + 'driver/set-working-hours', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + data.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => {
                console.log('Error', error)
                // callback(error);
            });
    }

    /**
     * Get working hours
     * @param data
     * @returns {Promise.<TResult>}
     */
    getWorkingHours(data, callback) {

        return fetch(BaseURL + 'driver/get-working-hours', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + data.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => {
                callback(error);
                // console.log('Error1231312', error)
            });
    }

    /**
     * Send driver location to server
     * @param data
     * @returns {Promise.<TResult>}
     */
    sendLocation(data, callback) {

        return fetch(BaseURL + 'driver/set-last-point', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + data.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(response => {
                callback(response);
            })
            .catch(error => {
                callback(error);
                // console.log('Error1231312', error)
            });
    }

}
const instance = new API();
Object.freeze(instance);

export default instance;
