import { MediaCard } from '@shopify/polaris'
import { useRouter } from 'next/router'

export function MerchantCard(props) {
  const router = useRouter()
  const handleClick = e => {
    e.preventDefault()
    router.push('/merchant?i=' + props.merchant)
  }
  return (
    <MediaCard
      title={props.title}
      primaryAction={{
        content: 'learn more about ' + props.title,
        onAction: () => {},
      }}
      description={props.content}
      size="small"
    >
      <img
        alt=""
        width="100%"
        height="300px"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src={props.img}
        onClick={handleClick}
      />
    </MediaCard >
  )
}

export function ItemCard(props) {
  const router = useRouter()
  const handleClick = e => {
    e.preventDefault()
    router.push('/item?i=' + props.item)
  }
  return (
    <MediaCard
      title={props.title}
      primaryAction={{
        content: 'learn more about ' + props.title,
        onAction: () => {},
      }}
      description={props.content}
      size="small"
    >
      <img
        alt=""
        width="100%"
        height="300px"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src={props.img}
        onClick={handleClick}
      />
    </MediaCard >
  )

}
