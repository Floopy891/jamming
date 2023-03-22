const clientId = '24908bea40ef440a9a10d0f84d1f741c';
const redirectURI = 'http://localhost:3000/';

let accessToken;

const Spotify = {
    
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        //access token check
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    
        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = expiresInMatch[1];

            //clears params & allows grabbing new token @ expiration

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            wondow.location = accessURL;
        }

    }
}

export default Spotify;