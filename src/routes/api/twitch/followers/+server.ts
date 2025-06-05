import { TwitchUserID } from '$lib/server/constants';
import { getOrRefreshAccessToken } from '$lib/server/twitch';
import { error, json, redirect, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ request }) => {
	const accessToken = await getOrRefreshAccessToken();
	if (!accessToken) {
		throw error(401, 'Unauthorized');
	}
	if (!TwitchUserID) {
		throw error(503, 'Getting User ID');
	}
	const response = await fetch(
		`https://api.twitch.tv/helix/channels/followers?broadcaster_id=${TwitchUserID}`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Client-ID': env.TWITCH_CLIENT_ID!
			}
		}
	);
	if (!response.ok) {
		const errorData = await response.json();
		console.log(errorData);
		return error(500, errorData);
	}
	const data = await response.json();
	return json(data);
};
