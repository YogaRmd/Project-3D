let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
}

function draw() {
  background(135, 206, 235); // Latar langit biru muda
  orbitControl(); // Untuk memutar pandangan

  // Posisi dasar pohon
  translate(0, 200, 0);

  // Batang pohon
  push();
  fill(139, 69, 19); // Warna coklat batang
  translate(0, 50, 0);
  box(20, 100, 20); // Ukuran batang (lebar, tinggi, tebal)
  pop();

  // Daun pohon (kerucut)
  for (let i = 0; i < 3; i++) {
    push();
    fill(34, 139, 34); // Warna hijau daun
    translate(0, -50 - i * 50, 0); // Posisi daun di atas batang
    rotateX(PI); // Putar kerucut 180 derajat
    cone(50 - i * 10, 100); // Ukuran daun berjenjang
    pop();
  }

  // Animasi goyangan pohon
  angle += 0.01;
}