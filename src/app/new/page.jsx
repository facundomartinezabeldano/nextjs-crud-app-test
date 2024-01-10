"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function ErrorPrompt({ errors }) {
  if (errors.length > 0) {
    return (
      <div className="bg-red-500 text-white p-4 mb-4 text-center">
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function NewPage() {

  const router = useRouter();
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const title = e.target[0].value;
    const description = e.target[1].value;
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      });
    }
    catch (err) {
      console.log(err);
      const errors = [...errors, err];
      setErrors(errors);
    }

    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Titulo de la tarea
        </label>
        <input className="border border-grey-400 p-2 mb-4 w-full text-black" type="text" placeholder="Titulo" />
        <label htmlFor="title">
          Descripcion
        </label>
        <textarea className="border border-grey-400 p-2 mb-4 w-full text-black" name="" id="" cols="30" rows="3" placeholder="Contenido"></textarea>
        <button className="bg-blue-500 hoover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-4 mb-4" >Crear</button>
        <ErrorPrompt errors={errors} />
      </form>
    </div>
  );
}

export default NewPage;