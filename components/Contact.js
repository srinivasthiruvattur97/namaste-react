const Contact = () => {
  return (
    <div className="m-5 p-5">
      <h1 className="text-3xl">Contact Us</h1>
      <h2 className="pb-3">Phone +91-7894516515</h2>
      <input
        type="text"
        placeholder="Name"
        className="border border-black m-1 p-1"
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        className="border border-black m-1 p-1"
      />
      <br />

      <button className="border border-b-4 rounded-md p-1 m-1">Submit</button>
    </div>
  );
};

export default Contact;
