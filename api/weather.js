// api/weather.js
export default async function handler(request, response) {
  // Pegamos a cidade que o front enviou
  const { city_name } = request.query;

  // Sua chave fica aqui, segura no servidor
  const API_KEY = "cc11f440";

  if (!city_name) {
    return response.status(400).json({ error: "Nome da cidade é obrigatório" });
  }

  try {
    // O servidor chama a HG Brasil (Servidor -> Servidor não tem trava de CORS)
    const url = `https://api.hgbrasil.com/weather?key=${API_KEY}&city_name=${encodeURIComponent(city_name)}`;

    const apiResponse = await fetch(url);
    const data = await apiResponse.json();

    // Devolvemos a resposta limpa para o seu site
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: "Erro interno ao buscar clima" });
  }
}
