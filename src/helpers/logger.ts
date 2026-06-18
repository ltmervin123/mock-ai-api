export default function logger(message: string, ...rest: string[]) {
  console.log(JSON.stringify({...rest, ...JSON.parse(message) }, null, 2));
}
