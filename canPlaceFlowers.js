function canPlaceFlowers(flowerbed, n) {
  let res = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      flowerbed[i] = 1;
      res += 1;
    }
  }
  console.log(res);
  if (n == res) {
    return true;
  }
  return false;
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
