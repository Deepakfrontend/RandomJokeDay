import axios from 'axios';
import React, { useEffect, useState } from 'react';

const JokeComponent = () => {
  const [jokes, setJokes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJokes(prev => [...prev, res.data]);
      setVisibleCount(prev => prev + 1);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch joke');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(); // Load one joke on initial render
  }, []);

  const handleDelete = (id) => {
    setJokes(prev => prev.filter(joke => joke.id !== id));
    setVisibleCount(prev => prev - 1);
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100">
      <h1 className="text-center text-4xl font-bold mb-8 text-purple-800 font-sans drop-shadow-md">
        🎉 Joke Of the Day.
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={fetchJoke}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Show Next Joke'}
        </button>
      </div>

      {loading && (
        <div className="flex justify-center my-4">
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <p className="text-center text-gray-700 mb-6 text-md">
        {visibleCount} Joke{visibleCount !== 1 && 's'} displayed
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {error && <p className="text-center text-red-600">{error}</p>}

        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="bg-white p-6 rounded-xl shadow-lg border-l-8 border-purple-400 hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="bg-purple-100 px-4 py-2 rounded mb-3">
              <h3 className="text-xl font-bold text-purple-700">{joke.setup}</h3>
            </div>
            <p className="text-gray-800 text-lg">{joke.punchline}</p>
            <button
              onClick={() => handleDelete(joke.id)}
              className="mt-4 text-sm text-red-600 hover:underline"
            >
              ❌ Delete this joke
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JokeComponent;
