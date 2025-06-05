import { env } from '$env/dynamic/private';

export const TwitchRedirectUri =
	(import.meta.env.DEV ? 'http://localhost:5173' : 'https://gatorz.lilyy.gay') +
	'/api/twitch/login/callback';
export const TwitchUsername = env.TWITCH_USERNAME!;
export let TwitchUserID: number | undefined = env.TWITCH_USER_ID
	? parseInt(env.TWITCH_USER_ID)
	: undefined;

/**
 * Sets the Twitch user ID
 * THIS IS ONLY TO BE CALLED WHEN THE USER IS LOGGED IN
 */
export function _SetTwitchUserID(userID: number) {
	TwitchUserID = userID;
}
