# Publicar no GitHub Pages com dominio proprio

Sim, este site pode ser publicado pelo GitHub Pages porque usa apenas HTML, CSS, JavaScript e imagens.

1. Crie um repositório no GitHub.
2. Envie os arquivos da pasta `buceta-lanches`.
3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, escolha a branch principal e a pasta raiz.
5. Em `Custom domain`, coloque seu domínio.
6. No painel do seu domínio, crie os registros DNS que o GitHub Pages pedir.
7. Ative `Enforce HTTPS` quando o GitHub liberar.

Para domínio raiz, normalmente o GitHub usa estes registros `A`:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Para subdomínio, como `www.seudominio.com`, normalmente use um `CNAME` apontando para:

```text
seu-usuario.github.io
```

Depois disso, crie um arquivo chamado `CNAME` na raiz do site com apenas o domínio dentro, por exemplo:

```text
www.seudominio.com
```
