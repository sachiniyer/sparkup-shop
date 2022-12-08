import { Page } from '@shopify/polaris'
import { MerchantGrid } from '../components/grid'

export default function Home() {
  return (
    <Page
      title="Merchants of Sparkup"
      subtitle="All of our available vendors"
    >
      <MerchantGrid />
    </Page>
  )
}
