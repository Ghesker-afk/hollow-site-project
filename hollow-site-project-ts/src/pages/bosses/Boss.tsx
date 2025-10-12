import './Boss.css';

type Boss = {
  name: string,
  health: number,
  phases: number,
  area: string
};

type BossProps = {
  bossObject: Boss;
};

export function Boss({ bossObject }: BossProps) {

  return (
    <div className="boss-container">
      <p className="boss-name-text">
        Name: {bossObject.name}
      </p>

      <p className="boss-health-text">
        Health &#183; {bossObject.health}
      </p>

      <p>
        Area: {bossObject.area} &#10003;
      </p>

      <p>
        Number of Phases: {bossObject.phases}
      </p>
    </div>
  );
}