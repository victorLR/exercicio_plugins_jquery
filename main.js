$(document).ready(function () {
    // Máscara para o campo de telefone
    $('#SeuTelefone').mask('(00) 00000-0000');

    // Validar o formulário ao enviar
    $('form').submit(function (e) {
        const telefoneValue = $('#SeuTelefone').cleanVal();
        const telefoneError = $('#telefoneError');

        if (telefoneValue.length < 10) {
            telefoneError.text('Informe um número de telefone válido (mínimo de 10 dígitos).');
            e.preventDefault(); // Impede o envio do formulário
        } else {
            telefoneError.text(''); // Limpa a mensagem de erro se estiver presente
        }
    });

    // Máscara para o campo de CEP
    $('#SeuCep').mask('00000-000');

    $('form').submit(function (e) {
        const cepValue = $('#SeuCep').cleanVal();
        const cepError = $('#CepError');

        if (cepValue.length < 8) {
            cepError.text('Informe um número de CEP válido (mínimo 8 dígitos).');
            e.preventDefault();
        } else {
            cepError.text('');
        }
    });
    // Máscara do campo de CPF
    $('#SeuCpf').mask('000000000-00');

    $('form').submit(function(e){
    const CpfValue = $('#SeuCpf').cleanVal();
    const CpfError = $('#CpfError');

    if (CpfValue.length < 10) {
        CpfError.text('Informe um número de CPF válido (mínimo de 10 dígitos).');
        e.preventDefault();
    } else {
        CpfError.text('');
    }
    });
});

