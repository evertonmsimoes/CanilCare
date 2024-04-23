export async function chamarAPI(data, qtdPequenos, qtdGrandes) {
    try {
        const response = await fetch('http://127.0.0.1:5000/melhor_petshop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                data: data,
                qtdPequenos: qtdPequenos,
                qtdGrandes: qtdGrandes 
            })
        });
        if (!response.ok) {
            throw new Error('Erro ao chamar a API');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Erro ao chamar a API:', error);
    }
}