const Contact = () => {
    return (
      <section id="contact" className="p-10 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg">
          <label className="block mb-4">
            <span className="block text-sm font-bold mb-2">Name</span>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white" />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-bold mb-2">Email</span>
            <input type="email" className="w-full p-2 rounded bg-gray-700 text-white" />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-bold mb-2">Subject</span>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white" />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-bold mb-2">Message</span>
            <textarea className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
          </label>
          <button className="w-full px-6 py-2 bg-green-500 hover:bg-green-700 rounded">Submit</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  