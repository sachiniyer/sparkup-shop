import { Page, Grid, DescriptionList } from '@shopify/polaris'

export default function Item() {
  return (
    <Page
      breadcrumbs={[{ content: 'Merchant', url: '/merchant' }]}
      title={"Coffee"}
      subtitle={`This is a well sourced speciality coffee`}
    >
      <Grid columns={{ sm: 3 }}>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <img
            alt=""
            height="400vh"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={"https://burst.shopifycdn.com/photos/wooden-table-with-a-scale-and-pour-over-coffee.jpg"}
          />
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <DescriptionList
            items={[
              {
                term: 'Name',
                description: "fresh coffee"
              },
              {
                term: 'Description',
                description:
                  'Some sort of well source speciality coffee'
              },
            ]}
          />
        </Grid.Cell>
      </Grid>

    </Page>
  )
}
