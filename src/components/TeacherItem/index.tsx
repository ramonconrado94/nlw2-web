import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/43659431?s=460&u=80ff8f68ae71590b5db1b49c1b98ed09fb6a6f59&v=4"
          alt="Ramon Conrado"
        />
        <div>
          <strong>Ramon Conrado</strong>
          <span>Matéria</span>
        </div>
      </header>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
