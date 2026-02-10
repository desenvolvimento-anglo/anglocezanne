import FeedAnglo from "@/components/common/quemSomos/FeedAnglo";
import FeedManifesto from "@/components/common/quemSomos/FeedManifesto";
import FeedPrincipios from "@/components/common/quemSomos/FeedPrincipios";
import FeedProposta from "@/components/common/quemSomos/FeedProposta";

export default function Escola() {
  return (
    <main>
        <FeedAnglo />
        <FeedProposta />
        <FeedManifesto />
        <FeedPrincipios />
    </main>
  );
}
