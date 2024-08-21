const Title = () => {
    const data = new Date()
    const diaSem = data.getDay()
    const diaNum = data.getDate()
    const mesNum = data.getMonth()

    const semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return (
        <h1 style={{color:"#FCFCFC"}}>{semana[diaSem]}, <span style={{color:"#8758FF"}}>{diaNum}</span> de {mes[mesNum]} </h1>
    )
}

export default Title