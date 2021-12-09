list = document.getElementsByClassName("lista_dinamica")[0];

conteudo = ['acampar','trilha','hiking','natação','corrida','material sobrevivência','kit fogueira','barraca','militar','botas','casaco de chuva','equipamento de escalada','binoculo','machado','faca militar','placa solar','óculos de sol'];

for(let item of conteudo){
    li = document.createElement("li");
    li.textContent = "#"+item;
    list.appendChild(li);
};