import { useState } from "react";
import { db, collection, addDoc } from "@/lib/firebaseConfig";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addDoc(collection(db, "messages"), { name, message, timestamp: new Date() });
      alert("Message sent!");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send"}</button>
      </form>
    </div>
  );
}
