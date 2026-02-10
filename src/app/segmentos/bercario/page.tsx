import FeedAlimentacao from "@/components/common/bercario/FeedAlimentação";
import FeedBercario from "@/components/common/bercario/FeedBercario";
import FeedFotosBercario from "@/components/common/bercario/FeedFotosBercario";
import FeedInfraestrutura from "@/components/common/bercario/FeedInfraestrutura";
import FeedInstalacoes from "@/components/common/bercario/FeedInstalacoes";



export default function Bercario() {
  return (
    <main>
        <FeedBercario />
        <FeedInfraestrutura />
        <FeedAlimentacao />
        <FeedInstalacoes />
        <FeedFotosBercario />
    </main>
  );
}