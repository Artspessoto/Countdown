function countdown() {
  let startCount = () => {
    let timer = Date.parse("oct 15, 2022 12:44:28");
    let dateNow = new Date();

    //se a data atual do sistema for maior que a data da contagem regressiva, aumenta 7 dias
    // em milisegundos ((1000 * 60 * 60 * 24)*7)
    while (timer < dateNow) {
      timer = timer + 604800000;
    }

    let difference = timer - dateNow;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor(difference / (1000 * 60));
    let seconds = Math.floor(difference / 1000);

    d = days.toString().padStart(2, "0");
    h = (hours - days * 24).toString().padStart(2, "0");
    m = (minutes - hours * 60).toString().padStart(2, "0");
    s = (seconds - minutes * 60).toString().padStart(2, "0");

    let timeList = [d, h, m, s];
    componentMount(timeList);
  };
  setInterval(startCount, 1000);
}
countdown();

function componentMount(list) {
  const container = document.querySelector(".timer");
  container.innerHTML = `
    `;
  for (i = 0; i < list.length; i++) {
    const div = document.createElement("div");
    div.innerText = list[i];
    div.classList.add("wrapperDate");
    container.appendChild(div);

    if (i != list.length - 1) {
      const span = document.createElement("span");
      span.innerText = ":";
      container.appendChild(span);
    }
  }
}
