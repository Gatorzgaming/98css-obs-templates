import { env } from '$env/dynamic/private';

interface TwitchStorage {
	access_token: string | undefined;
	refresh_token: string | undefined;
	expires_at: Date | undefined;
}

const TwitchStorage = {
	access_token: undefined,
	refresh_token: undefined,
	expires_at: undefined
} as TwitchStorage;

export function UpdateTwitchStorage(data: Partial<TwitchStorage>) {
	Object.assign(TwitchStorage, data);
}

export function TwitchStorageHasValue(key: keyof TwitchStorage) {
	return TwitchStorage[key] !== undefined;
}

export const getOrRefreshAccessToken = async () => {
	if (
		TwitchStorage.access_token &&
		TwitchStorage.expires_at &&
		TwitchStorage.expires_at > new Date()
	) {
		return TwitchStorage.access_token;
	}
	else if (!TwitchStorage.refresh_token) {
		return null;
	}
	console.log('Refreshing access token');
	const response = await fetch('https://id.twitch.tv/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams({
			client_id: env.TWITCH_CLIENT_ID,
			client_secret: env.TWITCH_CLIENT_SECRET,
			grant_type: 'refresh_token',
			refresh_token: TwitchStorage.refresh_token!
		})
	});
	if (!response.ok) {
		UpdateTwitchStorage({
			access_token: undefined,
			refresh_token: undefined,
			expires_at: undefined
		});
		return null;
	}
	const data = await response.json();
	UpdateTwitchStorage({
		access_token: data.access_token,
		expires_at: new Date(Date.now() + data.expires_in * 1000)
	});
	return data.access_token;
};
