//procurar o botao
document.querySelector("#add-time")
    //quando clicar no botaoo 
    .addEventListener('click', cloneField)

//executar uma acao
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
        //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
        //para cada campo, limpar
    fields.forEach(function(field) {
            //pegar o field e limpa ele
            field.value = ""
        })
        // colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}