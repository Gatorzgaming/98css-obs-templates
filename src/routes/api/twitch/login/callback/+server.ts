import { env } from '$env/dynamic/private';
import { _SetTwitchUserID, TwitchRedirectUri, TwitchUsername } from '$lib/server/constants';
import { TwitchStorageHasValue, UpdateTwitchStorage } from '$lib/server/twitch';
import { error, type RequestHandler, redirect } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	if (TwitchStorageHasValue('access_token')) {
		return error(400, 'Already logged in');
	}
	const code = url.searchParams.get('code');
	if (!code) {
		return error(400, 'No code provided');
	}
	const response = await fetch('https://id.twitch.tv/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams({
			client_id: env.TWITCH_CLIENT_ID,
			client_secret: env.TWITCH_CLIENT_SECRET,
			code,
			grant_type: 'authorization_code',
			redirect_uri: TwitchRedirectUri
		})
	});
	if (!response.ok) {
		const errorData = await response.json();
		return error(500, errorData);
	}
	const data = await response.json();
	UpdateTwitchStorage({
		access_token: data.access_token,
		refresh_token: data.refresh_token,
		expires_at: new Date(Date.now() + data.expires_in * 1000)
	});

	// Get the user ID
	const userResponse = await fetch(`https://api.twitch.tv/helix/users?login=${TwitchUsername}`, {
		headers: {
			Authorization: `Bearer ${data.access_token}`,
			'Client-ID': env.TWITCH_CLIENT_ID!
		}
	});
	const userData = await userResponse.json();
	_SetTwitchUserID(userData.data[0].id);
	console.log('Logged in');
	throw redirect(302, '/?fresh=true');
};
