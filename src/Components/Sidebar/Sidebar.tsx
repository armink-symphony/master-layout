import { VerticalNavbar } from "@nike/eds"
import { useState } from "react"

const Sidebar = () => {
  // Array of NavItems & NavSubItems & BottomItems
  const [items, setItems] = useState([
    {
      id: "1",
      icon: "Shoe",
      label: "Shoe",
      active: false,
      subItems: [
        {
          id: "1a",
          label: "Sub Item 1a",
          active: false,
        },
        {
          id: "1b",
          label: "Sub Item 1b",
          active: false,
        },
        {
          id: "1c",
          label: "Sub Item 1c",
          active: false,
        },
      ],
    },
    {
      id: "2",
      icon: "Shipping",
      label: "Shipping",
      active: false,
      subItems: [
        {
          id: "2a",
          label: "Sub Item 2a",
          active: false,
        },
        {
          id: "2b",
          label: "Sub Item 2b",
          active: false,
        },
      ],
    },
    {
      id: "3",
      icon: "Rewards",
      label: "Rewards",
      active: false,
    },
  ])

  const [bottomItems, setBottomItems] = useState([
    {
      id: "4",
      icon: "Settings",
      label: "Settings",
      active: false,
      subItems: [
        {
          id: "5",
          label: "Setting 1",
          active: false,
        },
        {
          id: "6",
          label: "Setting 2",
          active: false,
        },
      ],
    },
    {
      id: "7",
      icon: "Activity",
      label: "Activity",
      active: false,
    },
  ])

  // Click event function example that sets the active value for a nav item
  // Updates the items array with the new items with active state
  const handleClick = (item: any) => {
    // const newItems = setActiveValueInNavItems(item.id, items)
    // setItems(newItems)
  }

  return (
    <div>
      <VerticalNavbar
        // navLogoSlot={<NikeApp width={"56px"} height={"56px"} />}
        panelLogoSlot={
          <img
            alt='Placeholder Logo'
            src='https://unsplash.com/photos/R_0rTS9ENnk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0MjY4ODM1'
            style={{ objectFit: "cover" }}
            height='48px'
            width='48px'
          />
        }
        appName='App Name'
        appSubtitle='Some Subtitle Text'
        onNavigate={handleClick}
        items={items}
        bottomItems={bottomItems}
      />
    </div>
  )
}

export default Sidebar
