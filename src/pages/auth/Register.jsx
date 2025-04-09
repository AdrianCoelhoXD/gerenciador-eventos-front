import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        { name, email, password }
      );

      if (response.data.success) {
        // Salva o token no localStorage
        localStorage.setItem('token', response.data.token);
        console.log("Token salvo no localStorage:", response.data.token);

        // Redireciona para a página inicial
        navigate("/welcome");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Erro ao registrar. Tente novamente."
      );
      console.error('Erro no registro:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="hidden sm:block sm:w-1/2 bg-blue-600"></div>

      <div className="w-full sm:w-1/2 flex items-center justify-center p-3 sm:p-6 md:p-8">
        <div className="w-full max-w-xs sm:max-w-md space-y-4 sm:space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Crie sua conta
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
              >
                Clique aqui para fazer login
              </Link>
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-100 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          <form
            className="mt-4 sm:mt-6 space-y-3 sm:space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite sua senha"
                required
                minLength={7}
              />
              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Crie uma senha com no mínimo 7 caracteres com ao menos uma letra e um número
              </p>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 text-sm sm:text-base border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Registrando..." : "Criar conta"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;