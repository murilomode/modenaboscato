import os
import random
import json
import shutil
# Importa as ferramentas que você já subiu
import names
import formatsvg

# Configuração
QUANTIDADE = 50 
PASTA_SITE = "img_bandeiras" # Pasta onde ficam as imagens pro site

# Limpa e cria a pasta de novo para não acumular lixo
if os.path.exists(PASTA_SITE):
    shutil.rmtree(PASTA_SITE)
os.makedirs(PASTA_SITE)

# Lê a lista de países do arquivo que você subiu
with open('countries', 'r') as f:
    paises = f.read().splitlines()

cardapio = []

print(f"Cozinhando {QUANTIDADE} pratos...")

for i in range(QUANTIDADE):
    try:
        # 1. Escolhe dois países aleatórios (Ex: BR, AR)
        pais_a = random.choice(paises).split(';') # Pega código e nome
        pais_b = random.choice(paises).split(';')
        
        # Garante que não são o mesmo país
        while pais_a == pais_b:
            pais_b = random.choice(paises).split(';')

        # 2. Cria o nome misturado (usando names.py)
        nome_misturado = names.mix(pais_a[1], pais_b[1])
        
        # 3. Define os caminhos das bandeiras originais
        bandeira_a = os.path.join("flags", f"{pais_a[0]}.svg")
        bandeira_b = os.path.join("flags", f"{pais_b[0]}.svg")
        
        # 4. Cria a imagem misturada (usando formatsvg.py)
        # O script original salva como 'output.png', vamos renomear
        formatsvg.mix(bandeira_a, bandeira_b)
        
        nome_arquivo_final = f"mashup_{i}.png"
        caminho_final = os.path.join(PASTA_SITE, nome_arquivo_final)
        
        # Move o 'output.png' para a pasta certa
        shutil.move("output.png", caminho_final)
        
        # Adiciona ao cardápio
        cardapio.append({
            "arquivo": nome_arquivo_final,
            "nome": nome_misturado,
            "pais_a": pais_a[1],
            "pais_b": pais_b[1]
        })
        
        print(f"Prato pronto: {nome_misturado}")

    except Exception as e:
        print(f"Erro na tentativa {i}: {e}")

# Salva o arquivo JSON para o site ler
with open(os.path.join(PASTA_SITE, "menu.json"), "w") as f:
    json.dump(cardapio, f)

print("Cozinha fechada!")
