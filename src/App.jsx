import { Card } from './components/Cards.jsx';
import { Avatar } from './components/Avatar.jsx';

export default function App() {
  return (
    <main>
      <h1>Assignment 17: Describing the UI</h1>
      <section>
        <h2>Profile Card</h2>
        <Card>
          <Avatar
            size={120}
            person={{
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2'
            }}
          />
        </Card>
      </section>
    </main>
  );
}
