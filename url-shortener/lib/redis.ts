import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function setUrl(url: string) {
  const short = getShort();
  await redis.set(`short/${short}`, url);
  return short;
}

function getShort(): string {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return [...new Array(8)]
    .map((_) => alpha[Math.floor(Math.random() * alpha.length)])
    .join('');
}
