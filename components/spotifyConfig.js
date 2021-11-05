import querystring from 'querystring';

const client_id = '977a77f9d4f5414086bce7dd135edf24';
const client_secret = 'fa3d9e1a424a44538b337f5376898a81';
const refresh_token = 'AQDny3J-Wg2ZWAeShHgtpASyQcR1tMVSabU3tC7yJcCdoGNqN-zFRjBAOUduPEEzt7Zl_TXV3UZGNNdfnlcLKBJflMjhymPXNYglLT-pWVqH83lmYyoNnEUhPX4V1UwsYvE';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED = `https://api.spotify.com/v1/me/player/recently-played`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });
    
    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
  
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};
  
export const getTopTracks = async () => {
const { access_token } = await getAccessToken();

return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getRecentlyPlayed = async () => {
const { access_token } = await getAccessToken();

return fetch(RECENTLY_PLAYED, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};