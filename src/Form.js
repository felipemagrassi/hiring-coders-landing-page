import { useState } from "react";
import Modal from "./Modal";

const Form = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setModal] = useState(false);

  function setUserInfo() {
    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
  }

  function toggleModal() {
    setModal(!showModal);
  }

  return (
    <div className="w-full max-w-xs relative">
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-red-500 focus:outline-none"
              id="name"
              placeholder="Seu Nome"
              required
              onChange={(e) => setUser(e.target.value)}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-red-500 focus:outline-none"
              id="email"
              required
              placeholder="Seu Email"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button
            onClick={user !== "" && email !== "" ? toggleModal : null}
            className="w-full shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
          {showModal ? (
            <Modal>
              <div className="flex justify-center items-center fixed inset-0 z-10 bg-opacity-10 bg-white">
                <div className="max-w-lg p-4 rounded-3xl bg-black">
                  <h1 className="text-lg	 text-center text-white">
                    {" "}
                    Email enviado para {email}
                  </h1>
                  <h2 className="text-center text-white">
                    {user}, Confira a caixa de spam caso não encontre!
                  </h2>
                  <div className="flex justify-center items-center my-2">
                    <button
                      className="py-1 px-6 text-white text-lg rounded border-gray-200 my-0 mx-auto cursor-pointer inline-block bg-red-500"
                      onClick={toggleModal}
                    >
                      Ok!
                    </button>
                  </div>
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
