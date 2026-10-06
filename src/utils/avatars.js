// Avatar images, in order of priority:
//  1) your own file in src/assets/avatars/ (png, jpg, jpeg, webp, svg) named after the key, e.g. user.png
//  2) the default placeholder portrait below (loaded from the web)
//  3) colored initials, if neither is available (handled by <Avatar>)
const files = import.meta.glob('/src/assets/avatars/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' })

const local = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase(), url])
)

const portrait = (gender, n) => `https://randomuser.me/api/portraits/${gender}/${n}.jpg`

// Change the numbers (0-99) to pick different portraits, or replace any URL.
const remote = {
  user: portrait('women', 44),
  charlene: portrait('women', 44),
  livia: portrait('women', 65),
  randy: portrait('men', 32),
  workman: portrait('men', 75),
  ana: portrait('women', 12),
  tom: portrait('men', 46),
}

export const getAvatar = (key) => (key ? local[key.toLowerCase()] ?? remote[key.toLowerCase()] : undefined)
