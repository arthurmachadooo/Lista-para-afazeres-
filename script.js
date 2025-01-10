var tarefaInput = document.getElementById('tarefaInput');
var adicionarTarefaBtn = document.getElementById('adicionarTarefaBtn');
var listaTarefas = document.getElementById('listaTarefas');


function carregarTarefas() {
    var tarefas = localStorage.getItem('tarefas');
    if (tarefas) {
        tarefas = JSON.parse(tarefas);
        for (var i = 0; i < tarefas.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = tarefas[i] + ' <button class="remover">Remover</button>';
            listaTarefas.appendChild(li);
        }
    }
}


function salvarTarefas() {
    var tarefas = [];
    var lista = document.querySelectorAll('li');
    for (var i = 0; i < lista.length; i++) {
        tarefas.push(lista[i].firstChild.textContent.trim());
    }
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

adicionarTarefaBtn.addEventListener('click', function() {
    var tarefa = tarefaInput.value.trim();
    if (tarefa) {
        var li = document.createElement('li');
        li.innerHTML = tarefa + ' <button class="remover">Remover</button>';
        listaTarefas.appendChild(li);
        tarefaInput.value = '';

        salvarTarefas();
    }
});


listaTarefas.addEventListener('click', function(e) {
    if (e.target.classList.contains('remover')) {
        e.target.parentElement.remove();
        salvarTarefas();
    }
});


carregarTarefas();
