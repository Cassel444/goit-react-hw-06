import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, statusFilter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(statusFilter)
  );
};
function ContactList() {
  const contacts = useSelector(selectContacts);
  const statusFilter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <ul className={css.lists}>
      {visibleContacts.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
