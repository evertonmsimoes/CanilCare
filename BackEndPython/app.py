from flask import Flask, request, jsonify
from flask_cors import CORS
from petshop import Petshop

app = Flask(__name__)
CORS(app)

meu_canino_feliz = Petshop("Meu Canino Feliz", 2, 20, 40, 24, 48)
vai_rex = Petshop("Vai Rex", 1.7, 15, 50, 20, 55)
chow_chawgas = Petshop("ChowChawgas", 0.8, 30, 45, 30, 45)

@app.route('/melhor_petshop', methods=['POST'])
def encontrar_melhor_petshop():
    data = request.json['data']
    qtd_pequenos = int(request.json['qtdPequenos'])
    qtd_grandes = int(request.json['qtdGrandes'])

    preco_mcf = meu_canino_feliz.calcular_preco_total(data, qtd_pequenos, qtd_grandes)
    preco_vr = vai_rex.calcular_preco_total(data, qtd_pequenos, qtd_grandes)
    preco_cc = chow_chawgas.calcular_preco_total(data, qtd_pequenos, qtd_grandes)

    petshops = [(preco_mcf, meu_canino_feliz), (preco_vr, vai_rex), (preco_cc, chow_chawgas)]
    melhor_petshop = min(petshops, key=lambda x: (x[0], -x[1].distancia))

    return jsonify({'melhor_petshop': melhor_petshop[1].nome, 'preco_total': melhor_petshop[0]})

if __name__ == '__main__':
    app.run(debug=True)
