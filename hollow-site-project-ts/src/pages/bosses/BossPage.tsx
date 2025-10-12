import { LeaderBoss } from "./LeaderBoss";
import "./BossPage.css";
import { BossGridDetails } from './BossGridDetails';

export function BossPage() {
  return (
    <>
      <BossGridDetails />

      <LeaderBoss />
    </>
  );
}