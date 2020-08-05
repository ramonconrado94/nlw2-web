import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

export interface ClassTeacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  classTeacher: ClassTeacher;
}
const TeacherItem: React.FC<TeacherItemProps> = ({ classTeacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: classTeacher.id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={classTeacher.avatar} alt={classTeacher.name} />
        <div>
          <strong>{classTeacher.name}</strong>
          <span>{classTeacher.subject}</span>
        </div>
      </header>

      <p>{classTeacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {classTeacher.cost}</strong>
        </p>
        <a
          target="_blank"
          href={`https://wa.me/${classTeacher.whatsapp}?text="Olá, gostaria de contratar seus serviços"`}
          type="button"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
