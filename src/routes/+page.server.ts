import { TwitchUserID, TwitchUsername } from "$lib/server/constants";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ url }) => {
    const fresh = url.searchParams.get('fresh');
    return {
        username: TwitchUsername,
        userID: TwitchUserID,
        fresh: fresh === 'true'
    }
}