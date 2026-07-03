# VR - Foto no Bar

Experiência de realidade virtual simples no navegador (WebXR + A-Frame), feita
para ser usada com óculos VR (Meta Quest, Cardboard, etc) ou no desktop.

## Como testar

### No computador (local)

1. Sirva a pasta com um servidor local, por exemplo:
   ```
   cd vr_bar_avatar
   python3 -m http.server 8000
   ```
2. Abra `http://localhost:8000` no navegador.
   - No desktop: use o mouse para olhar ao redor e WASD para andar.
   - No headset (Quest, etc): abra o link no navegador do óculos e clique em
     "Enter VR". Suas mãos aparecem como o avatar (modelo padrão do A-Frame)
     e seguem os controles.

### No iPhone / Safari (via GitHub Pages)

O Safari do iOS não suporta WebXR (limitação da Apple), então não existe modo
estéreo "Cardboard" verdadeiro. Ainda assim, ao tocar em "Enter VR" o Safari
entra em tela cheia e usa o giroscópio do telemóvel para olhar ao redor
("magic window") — dá para caminhar apontando o telemóvel para os lados.

1. Ative o GitHub Pages para este repositório (uma vez só): Settings → Pages →
   "Deploy from a branch" → branch `claude/vr-program-images-e6gnf4`, pasta
   `/ (root)` → Save.
2. Espere ~1 minuto e abra no Safari:
   `https://pedrooliveiragithub.github.io/PedroOliveiraGitHub/vr_bar_avatar/`
3. Toque em "Enter VR" e permita o acesso ao giroscópio quando o Safari
   perguntar.

## Estrutura

- `index.html` — a cena VR: a foto envolve o utilizador como ambiente (não é
  um quadro numa parede, é o "céu" da cena).
- `assets/bar-photo.jpg` — a foto original, otimizada para web.
- `assets/bar-sky.jpg` — versão usada no ambiente: a foto original centrada
  num canvas 2x mais largo, com as bordas esbatidas para preto. Como a foto
  não é uma panorâmica 360° real, isto evita esticar a imagem de forma feia
  — você fica "dentro" da foto olhando para a frente, e ao virar-se vê uma
  transição suave para um vazio escuro em vez de a imagem distorcida.

## Personalizar

- **Trocar a foto**: gere um novo `assets/bar-sky.jpg` a partir da sua foto
  (mesmo processo: canvas 2x a largura da foto, foto centrada, bordas
  esbatidas para preto) e substitua o ficheiro — ou me envie a foto nova que
  eu gero de novo.
- **Mais foto ao redor / menos vazio atrás**: ajuste a largura do canvas em
  relação à foto (hoje é 2x, ou seja, a foto cobre 180° e o resto é vazio).
  Usar 1.5x cobre mais ângulo (240°) à custa de mais distorção.
- **Avatar mais elaborado**: hoje o avatar é representado pelas mãos padrão
  do A-Frame (`hand-controls`). Para usar um modelo 3D completo (avatar
  Ready Player Me, VRoid, etc. em `.glb`/`.vrm`), me envie o arquivo que eu
  integro no lugar das mãos genéricas.
