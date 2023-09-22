import React, {useState, useEffect} from 'react';
import Layout from '../../components/layout/Layout'; // Uvezite svoju Layout komponentu ovde
import ImgCard from '../../components/imgCard/ImgCard'


function Home() {

  const [data,  setData] = useState([])

  // Dohvaćanje podataka
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/product');
        if (!response.ok) {
          throw new Error ('Greška prilikom dohvatanja podataka')
        }
        const jsonData = await response.json();
        setData(jsonData)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout showSlider={true}>
      <ImgCard data={data}/>
    </Layout>
  );
}

export default Home;
