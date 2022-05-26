import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList/CardList';
import Container from '../components/Container/Container';
import LoadElement from '../components/LoadElement/LoadElement';
import Span from '../components/Span/Span';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function removeEmployee(id) {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const result = await res.json();
    if (result.success) {
      alert(result.data);
      const newArr = data.filter((obj) => obj.employee_id !== id);
      setData(newArr);
    }
    if (!result.success) {
      alert(result.error);
    }
  }

  async function fetchData() {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const result = await res.json();
    if (result.success) {
      setData(result.data);
      setLoading(false);
    }
    if (!result.success) {
      setSession(false);
    }
  }

  if (!session) {
    return (
      <Container>
        <h2>Session timeout</h2>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <LoadElement />
      </Container>
    );
  }

  if (data.length === 0) {
    return (
      <Container>
        <h2>No employees stored</h2>
      </Container>
    );
  }

  return (
    <>
      <Span>Total employee count : {data.length}</Span>
      <CardList data={data} test={removeEmployee} />
    </>
  );
}

export default Home;
