import FeedBrincar from "@/components/common/infantil/FeedBrincar";
import FeedEducacao from "@/components/common/infantil/FeedEducacao";
import FeedFotosInfantil from "@/components/common/infantil/FeedFotosInfantil";
import FeedInfantil from "@/components/common/infantil/FeedInfantil";
import FeedMaterial from "@/components/common/infantil/FeedMaterial";

export default function infantil() {
  return (
    <main>
        <FeedEducacao />
        <FeedMaterial />
        <FeedBrincar />
        <FeedInfantil />
        <FeedFotosInfantil />
    </main>
  );
}