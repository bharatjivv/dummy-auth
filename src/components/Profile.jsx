import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (!userId || !token) {
      navigate('/');
      return;
    }

    fetch(`https://dummyjson.com/users/${userId}`, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(setUser)
    .catch(() => navigate('/'));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2>User Profile</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Birth Date:</strong> {user.birthDate}</p>

      <button onClick={handleLogout} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
