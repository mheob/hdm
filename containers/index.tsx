import Layout from "@/components/Layout"
import Crossflex from "@/components/Landing/Crossflex"
import Purity from "@/components/Landing/Purity"
import Cerastar from "@/components/Landing/Cerastar"
import Massivholztueren from "@/components/Landing/Massivholztueren"
import Accessories from "@/components/Landing/Accessories"
import Company from "@/components/Landing/Company"

const index: React.FC = () => {
  return (
    <Layout title="HDM &ndash; Holz Design Moers">
      <div id="produkte">
        <Crossflex />
        <Purity />
        <Cerastar />
        <Massivholztueren />
        <Accessories />
      </div>
      <div id="unternehmen">
        <Company />
      </div>
    </Layout>
  )
}

export default index
