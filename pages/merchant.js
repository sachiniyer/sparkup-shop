import { Page, Grid, DescriptionList } from '@shopify/polaris'
import { useRouter } from 'next/router'
import { ItemGrid } from '../components/grid'

export default function Merchant() {
  const router = useRouter()
  let merchant = router.query.i
  return (
    <Page
      breadcrumbs={[{ content: 'Home', url: '/' }]}
      title={merchant + "'s Page"}
      subtitle={`This is all of ${merchant}'s goods`}
    >
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <img
            alt=""
            height="200vh"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={"https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"}
          />
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <DescriptionList
            items={[
              {
                term: 'Name',
                description: merchant
              },
              {
                term: 'Phone Number',
                description:
                  '1234567890'
              },
              {
                term: 'Description',
                description:
                  'This is just a simple person from a simple place'
              },
            ]}
          />
        </Grid.Cell>
      </Grid>
      <ItemGrid merchant={merchant} />
    </Page >
  )
}
