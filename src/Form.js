import { useState } from "react";
import Modal from "./Modal";

const Form = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setModal] = useState(false);

  function setUserInfo() {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
  }

  function toggleModal() {
    setModal(!showModal);
  }

  return (
    <div className="w-full max-w-xs relative z-40">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          setUserInfo();
        }}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-purple-500 focus:outline-none"
              id="name"
              placeholder="Seu Nome"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-purple-500 focus:outline-none"
              id="email"
              placeholder="Seu Email"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button
            onClick={toggleModal}
            className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
          {showModal ? (
            <Modal>
              <div className="">
                <h1> Email Enviado para {email}</h1>
                <h2>{usuario}, Confira a caixa de spam caso não encontre!</h2>
                <div className="buttons">
                  <button onClick={toggleModal}>Ok!</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Form;
