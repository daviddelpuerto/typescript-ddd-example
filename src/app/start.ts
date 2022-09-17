import { Server } from './Server';

function handleError(err: Error) {
  console.log(err);
  process.exit(1);
}

try {
  const port = process.env.NODE_PORT || '3000';
  new Server(port).listen().catch(handleError);
} catch (error: any) {
  handleError(error);
}
