import Layout from "@/components/Layout"
import Crossflex from "@/components/Products/Crossflex"
import Purity from "@/components/Products/Purity"

const index: React.FC = () => {
  return (
    <Layout title="HDM &ndash; Holz Design Moers">
      <Crossflex />
      <Purity />
    </Layout>
  )
}

export default index
