import Layout from "@/components/Layout"
import Crossflex from "@/components/Landing/Crossflex"
import Purity from "@/components/Landing/Purity"
import Cerastar from "@/components/Landing/Cerastar"
import Massivholztueren from "@/components/Landing/Massivholztueren"
import Shelves from "@/components/Landing/Shelves"
import Strips from "@/components/Landing/Strips"
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
        <Shelves />
        <Strips />
        <Accessories />
      </div>
      <div id="unternehmen">
        <Company />
      </div>
    </Layout>
  )
}

export default index
