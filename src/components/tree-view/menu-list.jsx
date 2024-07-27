import MenuItem from "./menu-item";


export default function MenuList({list = []}) {

    return (
        <ul className="menu-list-container">
            {
                list && list.length ?
                    list.map((listItem, index) => <MenuItem key={listItem + index} item={listItem}/>)
                    : null
            }
        </ul>
    )

}