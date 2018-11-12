import auth0 from 'auth0-js';

class Auth {
	constructor() {
		this.auth0 = new auth0.WebAuth({
			domain: 'decodeweb.auth0.com',
			audience: 'https://decodeweb.auth0.com/userinfo',
			clientID: 'LTlP5n5wlTlPErO0XMfGq0YPX6qnCkUb',
			redirectUri: 'http://localhost:3002/callback',
			responseType: 'token id_token',
			scope: 'openid profile'
		});

		this.getProfile = this.getprofile.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.isAuthenticated = thus.isAuthenticated.bind(this);
		this.signIn = this.signIn.bind(this);
		this.signOut = this.signOut.bind(this);
	}

}