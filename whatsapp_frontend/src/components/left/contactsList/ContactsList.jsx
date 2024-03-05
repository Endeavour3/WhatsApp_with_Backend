import ContactsListToolBar from './ContactsListToolBar'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import Contacts from './Contacts'

export default function ContactsList() {
    return (
        <>
            <ContactsListToolBar />
            <SearchBar />
            <FilterBar />
            <Contacts />
        </>
    )
}