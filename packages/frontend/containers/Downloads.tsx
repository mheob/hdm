import Downloads from '@/components/Downloads/Downloads'
import Layout from '@/components/Layout'
import certificatesCeDop from '@/data/ce-dop.json'
import certificatesFscPefc from '@/data/fsc-pefc.json'
import { IFiles } from '@/models/files'

export default function DownloadContainer() {
  return (
    <Layout title="Downloads * HDM &ndash; Holz Design Moers">
      <h2 className="container mt-12 text-4xl font-bold lg:mt-32 lg:px-32 lg:text-5xl">Downloads</h2>

      <Downloads title="FSC / PEFC" files={certificatesFscPefc as IFiles[]} />

      <Downloads title="CE-DOP Leistungsbeschreibungen" files={certificatesCeDop as IFiles[]} />
    </Layout>
  )
}
