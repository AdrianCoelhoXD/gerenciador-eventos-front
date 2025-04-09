import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrganizeEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    isOnline: false,
    maxParticipants: "",
    categories: "",
    imageUrl: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const token = localStorage.getItem("token");
    console.log("Token enviado:", token);
    if (!token) {
      setError("Você precisa estar logado para criar um evento");
      setIsLoading(false);
      return;
    }

    const requiredFields = ['name', 'description', 'date', 'location', 'maxParticipants'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setError(`Preencha todos os campos obrigatórios: ${missingFields.join(', ')}`);
      setIsLoading(false);
      return;
    }

    try {
      const eventData = {
        ...formData,
        maxParticipants: parseInt(formData.maxParticipants),
        date: new Date(formData.date).toISOString(),
        categories: formData.categories ? 
          formData.categories.split(',').map(cat => cat.trim()) : []
      };

      console.log("Dados enviados para o backend:", eventData);

      const response = await axios.post(
        "http://localhost:3000/api/events",
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      
      if (response.status === 201) {
        navigate("/organizer");
      } else {
        throw new Error(response.data.message || "Erro ao criar evento");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Sessão expirada. Faça login novamente.");
      } else {
        setError(err.response?.data?.message || 
          "Erro ao criar evento. Verifique os dados e tente novamente.");
      }
      console.error("Erro detalhado:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="hidden sm:block sm:w-1/2 bg-blue-600"></div>

      <div className="w-full sm:w-1/2 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">Criar Evento</h1>
          
          {error && (
            <div className="p-3 bg-red-100 text-red-700 text-sm rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome do Evento *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Descrição *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Data e Hora do Evento *
              </label>
              <input
                type="datetime-local"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Localização *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="isOnline"
                checked={formData.isOnline}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Evento Online
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Número Máximo de Participantes *
              </label>
              <input
                type="number"
                name="maxParticipants"
                min="1"
                value={formData.maxParticipants}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Categorias (separadas por vírgula)
              </label>
              <input
                type="text"
                name="categories"
                value={formData.categories}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Música, Tecnologia, Educação"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                URL da Imagem do Evento
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Criando..." : "Criar Evento"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrganizeEvent;