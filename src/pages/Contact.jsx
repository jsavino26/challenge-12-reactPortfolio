
jsx
Copy
Edit
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prev) => ({ ...prev, [field]: `${field} is required` }));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <label>
          Name:
          <input name="name" onBlur={() => handleBlur('name')} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input
            name="email"
            onBlur={() => handleBlur('email')}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea name="message" onBlur={() => handleBlur('message')} onChange={handleChange} />
          {errors.message && <span>{errors.message}</span>}
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;