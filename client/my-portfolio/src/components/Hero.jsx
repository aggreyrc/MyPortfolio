const Hero = () => {
    return (
      <section id="home" className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg mb-6 text-center">
          Hello! I'm Aggrey Kibet, a passionate developer and designer, crafting beautiful and functional web experiences.
        </p>
        <div className="flex space-x-4">
          <a href="#projects"> <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded">View Projects</button> </a>
          <a href="#contact"><button className="px-6 py-2 bg-green-500 hover:bg-green-700 rounded">Get in Touch</button> </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  