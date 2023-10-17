import ItemList from './ItemList'

const Content = ({items}) => {
  return (
    <>
      {items.length ? (
        <ItemList 
          items={items} 
        /> ) : (
        <p className="response">No items in the list.</p>
      )}
    </>
  )
}

export default Content