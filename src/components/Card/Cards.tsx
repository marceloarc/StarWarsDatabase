
import { Card } from '../../components/Card/Card';
import { fetchAllPeople } from '../../api/people/people';

export async function Cards() {
  const peoplesData = await fetchAllPeople();

  return (

    <div className="flex flex-wrap -m-4 mx-auto">
      {peoplesData.results.map(people => {
        const formattedHeight = `${people.height} cm`;
        let image = require(`../../../public/images/${people.name}.jpg`);
        return (
          <Card
            key={people.name}
            title={people.name}
            image={image}
            description={formattedHeight}
          />
        );
      })}
    </div>
  );

}