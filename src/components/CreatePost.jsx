import React, {useState} from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hidden, setHidden] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setHidden(true);
  };

  if (hidden) return <button className='bg-blue-gradient flex items-center text-white px-4 py-1 rounded'><span className='sm:flex hidden'>Post Submit</span><i className={`text-lg `}>!</i></button> ;



  return (
    <div id='createPost' className="flex mt-96 flex-col bg-black-gradient rounded-lg items-center justify-center p-6 max-w-xl w-full mx-auto">
      <h1 className="text-gradient text-2xl font-bold mb-4">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border-b border-gray-300 outline-none text-white rounded bg-black-gradient-2"
          required
        />
        <textarea
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border-b border-gray-300 text-white outline-none bg-black-gradient-2 rounded h-40"
          required
        />
        <button type="submit" className="bg-blue-gradient text-black font-semibold px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};


export default CreatePost
