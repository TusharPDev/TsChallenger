//Ex on the type never & TypeScript's exhaustiveness checking

type Direction = 'up' | 'down' | 'left' | 'right';

export function move(direction: Direction) {
  switch (direction) {
    case 'up':
      console.log('Moving up');
      break;
    case 'down':
      console.log('Moving down');
      break;
    case 'left':
      console.log('Moving left');
      break;
    case 'right':
      console.log('Moving right');
      break;
    default:
      const exhaustivenessCheck: never = direction; // TypeScript infers `never` type here
      break;
  }
}
