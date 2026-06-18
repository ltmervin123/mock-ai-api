export default function CustomLogger(message: string, ...rest: string[]) {
  console.log(JSON.stringify({...rest, ...JSON.parse(message) }, null, 2));
}
