from datetime import datetime

class Petshop:
    def __init__(self, nome, distancia, preco_pequeno_dia_util, preco_grande_dia_util, preco_pequeno_final_semana, preco_grande_final_semana):
        self.nome = nome
        self.distancia = distancia
        self.preco_pequeno_dia_util = preco_pequeno_dia_util
        self.preco_grande_dia_util = preco_grande_dia_util
        self.preco_pequeno_final_semana = preco_pequeno_final_semana
        self.preco_grande_final_semana = preco_grande_final_semana

    def calcular_preco_total(self, data, qtd_pequenos, qtd_grandes):
        dia_da_semana = datetime.strptime(data, "%d/%m/%Y").weekday()
        if dia_da_semana < 5:  # Dia útil
            preco_pequeno = self.preco_pequeno_dia_util * qtd_pequenos
            preco_grande = self.preco_grande_dia_util * qtd_grandes
        else:  
            preco_pequeno = self.preco_pequeno_final_semana * qtd_pequenos
            preco_grande = self.preco_grande_final_semana * qtd_grandes
        return preco_pequeno + preco_grande
