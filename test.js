rateLimited([
  () => new Promise(resolve => setTimeout(() => resolve(1), 1050)),
  () => new Promise(resolve => setTimeout(() => resolve(2), 500)),
  () => new Promise(resolve => setTimeout(() => resolve(3), 900)),
  () => new Promise(resolve => setTimeout(() => resolve(4), 1000)),
  () => new Promise(resolve => setTimeout(() => resolve(5), 300)),
  () => new Promise(resolve => setTimeout(() => resolve(6), 900)),
  () => new Promise(resolve => setTimeout(() => resolve(7), 700)),
  () => new Promise(resolve => setTimeout(() => resolve(8), 1200)),
  () => new Promise(resolve => setTimeout(() => resolve(9), 800))
]).then(console.info.bind(console));
