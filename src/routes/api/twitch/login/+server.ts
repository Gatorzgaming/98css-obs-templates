import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { TwitchRedirectUri } from '$lib/server/constants';
import { TwitchStorageHasValue } from '$lib/server/twitch';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async () => {
	if (TwitchStorageHasValue('access_token')) {
		return error(400, 'Already logged in');
	}
	const url = new URL('https://id.twitch.tv/oauth2/authorize');
	const searchParams = new URLSearchParams({
		response_type: 'code',
		client_id: env.TWITCH_CLIENT_ID,
		redirect_uri: TwitchRedirectUri,
		scope: ['moderator:read:followers'].join('+')
	});
	url.search = searchParams.toString();
	throw redirect(302, url.toString());
};
