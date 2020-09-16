import Layout from "@/components/Layout"
import Crossflex from "@/components/Products/Crossflex"
import Purity from "@/components/Products/Purity"
import Cerastar from "@/components/Products/Cerastar"
import Massivholztueren from "@/components/Products/Massivholztueren"

const index: React.FC = () => {
  return (
    <Layout title="HDM &ndash; Holz Design Moers">
      <Crossflex />
      <Purity />
      <Cerastar />
      <Massivholztueren />
    </Layout>
  )
}

export default index
