const baseUrl = 'https://islandtreasure.co';

export default api = {

    fetchCurrentPlayer(sessionId){
        return fetch(`${baseUrl}/v1/player`, {
            credentials: 'include',
            headers: {
                'Authorization': sessionId, 
                'Content-Type': 'application/x-www-form-urlencoded'  
            }
        }).then((response)=>{
            return response.json()
        })
    },

    fetchAllGames(){
        return fetch(`${baseUrl}/v1/games`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'  
            }
        }).then((response)=>{
            return response.json()
        })
    },

    fetchAllOffers(){
        return fetch(`${baseUrl}/v1/offers`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'  
            }
        }).then((response)=>{
            return response.json()
        })
    },
    
    fetchBonuses(sessionId){
        return fetch(`${baseUrl}/v1/return_bonus`, {
            credentials: 'include',
            headers: {
                'Authorization': sessionId, 
                'Content-Type': 'application/x-www-form-urlencoded'  
            }
        }).then((response)=>{
            return response.json()
        })
    },

    fetchTermsOfService(){
        return fetch(`${baseUrl}/Terms_of_Service`, {
            credentials: 'include'
        })
    },

    fetchAgreeTermsOfService(dob){
        return fetch(`${baseUrl}/Terms_of_Service`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({dob: dob})
        })
    }
}
