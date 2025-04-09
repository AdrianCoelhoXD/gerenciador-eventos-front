import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/login', { 
        email, 
        password 
      });

      if (response.data.success) {
        // Salva o token no localStorage
        localStorage.setItem('token', response.data.token);
        console.log("Token salvo no localStorage:", response.data.token);

        // Redireciona para a página inicial
        navigate("/welcome");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao fazer login. Tente novamente.');
      console.error('Erro no login:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="hidden sm:block sm:w-1/2" style={{ backgroundColor: '#8200DB' }}></div>

      <div className="w-full sm:w-1/2 flex items-center justify-center p-3 sm:p-6 md:p-8">
        <div className="w-full max-w-xs sm:max-w-md space-y-4 sm:space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Faça login na sua conta</h2>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none"
                style={{ 
                  '--tw-ring-color': '#8200DB',
                  '--tw-border-opacity': 1,
                  borderColor: 'rgba(209, 213, 219, var(--tw-border-opacity))',
                  '&:focus': {
                    '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                    borderColor: '#8200DB'
                  }
                }}
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none"
                style={{ 
                  '--tw-ring-color': '#8200DB',
                  '--tw-border-opacity': 1,
                  borderColor: 'rgba(209, 213, 219, var(--tw-border-opacity))',
                  '&:focus': {
                    '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                    borderColor: '#8200DB'
                  }
                }}
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 text-sm sm:text-base border border-transparent rounded-md shadow-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  backgroundColor: '#8200DB',
                  '--tw-ring-color': '#8200DB',
                  '&:hover': {
                    backgroundColor: '#6a00b3'
                  },
                  '&:focus': {
                    '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                    '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'
                  }
                }}
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="text-center text-xs sm:text-sm text-gray-600">
            Não tem uma conta?{' '}
            <Link 
              to="/register" 
              className="font-medium"
              style={{
                color: '#8200DB',
                '&:hover': {
                  color: '#6a00b3'
                }
              }}
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;