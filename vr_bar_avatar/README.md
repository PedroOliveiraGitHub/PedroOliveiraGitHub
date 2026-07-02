# VR - Foto no Bar

Experiência de realidade virtual simples no navegador (WebXR + A-Frame), feita
para ser usada com óculos VR (Meta Quest, Cardboard, etc) ou no desktop.

## Como testar

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

## Estrutura

- `index.html` — a cena VR (sala com a foto em destaque numa "moldura").
- `assets/bar-photo.jpg` — a foto usada na cena (otimizada para web).

## Personalizar

- **Trocar a foto**: substitua `assets/bar-photo.jpg` por outra imagem
  (mantenha proporção próxima de 4:3, ou ajuste `width`/`height` do
  `<a-plane>` da foto em `index.html`).
- **Adicionar mais fotos**: duplique o bloco `<a-plane>` da foto com uma nova
  posição (ex: outra parede) e uma nova imagem em `<a-assets>`.
- **Avatar mais elaborado**: hoje o avatar é representado pelas mãos padrão
  do A-Frame (`hand-controls`). Para usar um modelo 3D completo (avatar
  Ready Player Me, VRoid, etc. em `.glb`/`.vrm`), me envie o arquivo que eu
  integro no lugar das mãos genéricas.
