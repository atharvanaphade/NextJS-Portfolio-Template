import { getNowPlaying } from '../../components/spotifyConfig';

export default async function handler(_, res) {
    const response = await getNowPlaying();

    if (response.status == 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();

    if (song.item == null) {
        
    }
}