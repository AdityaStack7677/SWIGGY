const Contact = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        ></input>
        <button className="border border-black p-2 m-2 bg-zinc-600 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
