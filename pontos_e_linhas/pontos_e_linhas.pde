// Pontos e Linhas — Arte Generativa
// Gera pontos aleatórios e une-os com linhas
// Pressiona qualquer tecla para gerar uma nova composição

int NUM_PONTOS = 30;
float[] px, py;

void setup() {
  size(800, 800);
  gerarPontos();
}

void draw() {
  background(15);
  desenharLinhas();
  desenharPontos();
}

void gerarPontos() {
  px = new float[NUM_PONTOS];
  py = new float[NUM_PONTOS];
  for (int i = 0; i < NUM_PONTOS; i++) {
    px[i] = random(50, width - 50);
    py[i] = random(50, height - 50);
  }
}

void desenharLinhas() {
  for (int i = 0; i < NUM_PONTOS; i++) {
    for (int j = i + 1; j < NUM_PONTOS; j++) {
      float d = dist(px[i], py[i], px[j], py[j]);
      // linhas mais próximas ficam mais visíveis
      float alpha = map(d, 0, width, 200, 10);
      stroke(180, 210, 255, alpha);
      strokeWeight(0.6);
      line(px[i], py[i], px[j], py[j]);
    }
  }
}

void desenharPontos() {
  for (int i = 0; i < NUM_PONTOS; i++) {
    noStroke();
    fill(255, 220, 100);
    ellipse(px[i], py[i], 8, 8);
    // halo suave
    fill(255, 220, 100, 40);
    ellipse(px[i], py[i], 20, 20);
  }
}

void keyPressed() {
  gerarPontos();
}

void mousePressed() {
  gerarPontos();
}
