import React, { useEffect, useState } from 'react';
import '../css/misdemeanour.css';

interface MisdemeanourData {
  citizenId: number;
  date: string;
  misdemeanour: string;
  punishmentIdea: string; 
}

interface MisdemeanourResponse {
  misdemeanours: MisdemeanourData[];
}

const Misdemeanour: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourData[]>([]);
  const [filteredMisdemeanours, setFilteredMisdemeanours] = useState<MisdemeanourData[]>([]);
  const [filter, setFilter] = useState<string>('');
 
  useEffect(() => {
    // Fetch misdemeanour data when the component mounts
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/misdemeanours/10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: MisdemeanourResponse = await response.json();

         // Log the fetched data for debugging
         console.log('Fetched data:', data);

        // Fetch random punishment images for each misdemeanour
        const misdemeanoursWithImages = await Promise.all(
          data.misdemeanours.map(async (misdemeanour) => {
            const punishmentImageResponse = await fetch('https://picsum.photos/200/200');
            if (!punishmentImageResponse.ok) {
              throw new Error('Error fetching punishment image');
            }
            const punishmentImageUrl = punishmentImageResponse.url;
            return { ...misdemeanour, punishmentIdea: punishmentImageUrl };
          })
        );

        // Log the modified data with images for debugging
        console.log('Misdemeanours with images:', misdemeanoursWithImages);


        setMisdemeanours(misdemeanoursWithImages);
        setFilteredMisdemeanours(misdemeanoursWithImages);
      } catch (error) {
        
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Define a function to handle filtering
  const handleFilter = (selectedFilter: string) => {
    console.log('Selected filter:', selectedFilter);

    setFilter(selectedFilter);

    if (selectedFilter === '') {
      // If no filter is selected, show all misdemeanours
      setFilteredMisdemeanours(misdemeanours);
    } else {
      // Filter misdemeanours based on the selected filter
      const filtered = misdemeanours.filter((m) => m.misdemeanour === selectedFilter);
      setFilteredMisdemeanours(filtered);
    }
  };
  return (
    <div className="container">
      <h2>Misdemeanours Page</h2>
      <div>
        Filter by Misdemeanour:
        <select onChange={(e) => handleFilter(e.target.value)} value={filter}>
            <option value="">All</option>
          <option value="rudeness">Mild Public Rudeness</option>
          <option value="lift">Speaking in a Lift</option>
          <option value="vegetables">Not Eating Your Vegetables</option>
          <option value="united">Supporting Manchester United</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Citizen ID</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment Idea</th>
          </tr>
        </thead>
        <tbody>
        {filteredMisdemeanours.map((m, index) => {
  // Log the value here for debugging
  console.log('m.misdemeanor:', m.misdemeanour);

  return (
    <tr key={index}>
      <td>{m.citizenId}</td>
      <td>{m.date}</td>
      <td>
      <td>
  {m.misdemeanour === 'rudeness' ? 'Mild Public Rudeness' : ''}
  {m.misdemeanour === 'lift' ? 'Speaking in a Lift' : ''}
  {m.misdemeanour === 'vegetables' ? 'Not Eating Your Vegetables' : ''}
  {m.misdemeanour === 'united' ? 'Supporting Manchester United' : ''}
</td>

      </td>
      <td>
        <img src={m.punishmentIdea} alt="Punishment Idea" />
      </td>
    </tr>
  );
})}


          
        </tbody>
      </table>
    </div>
  );
};

export default Misdemeanour;

